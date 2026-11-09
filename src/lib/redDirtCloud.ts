// The publishable key is intended for browser use. All customer records are secured by database RLS.
// This project only uses Red Dirt's separate red_dirt_office_documents table.
export const RED_DIRT_SUPABASE_URL = "https://cuobtsfjppfvofqdihuo.supabase.co";
export const RED_DIRT_PUBLISHABLE_KEY = "sb_publishable_Pp3JosDCCJBb6vucEnvDzQ_o-FS7GQz";
export const RED_DIRT_ALLOWED_EMAIL = "reddirtpropertyservicesar@gmail.com";
const SESSION_KEY = "red-dirt-office-supabase-auth-v1";

export type OfficeIdentity = { id: string; email: string };
type AuthSession = { access_token: string; refresh_token: string; expires_at: number; user?: OfficeIdentity };

function authHeaders(token?: string): HeadersInit {
  return {
    apikey: RED_DIRT_PUBLISHABLE_KEY,
    ...(token ? { Authorization: "Bearer " + token } : {}),
    "Content-Type": "application/json",
  };
}
async function parse(response: Response) {
  const data = await response.json().catch(() => ({})) as Record<string, unknown>;
  if (!response.ok) {
    const error = String(data.msg || data.error_description || data.message || data.error || "Request failed.");
    throw new Error(error);
  }
  return data;
}
function getSavedSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as AuthSession;
    if (!saved.access_token || !saved.refresh_token) return null;
    return saved;
  } catch { return null; }
}
function saveSession(result: Record<string, unknown>) {
  const token = String(result.access_token || "");
  const refresh = String(result.refresh_token || "");
  if (!token || !refresh) throw new Error("Sign-in did not return a session.");
  const expiresIn = Number(result.expires_in || 3600);
  const user = result.user as OfficeIdentity | undefined;
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    access_token: token, refresh_token: refresh,
    expires_at: Date.now() + expiresIn * 1000,
    user,
  } satisfies AuthSession));
}
export async function signInToOffice(password: string): Promise<void> {
  const response = await fetch(RED_DIRT_SUPABASE_URL + "/auth/v1/token?grant_type=password", {
    method: "POST", headers: authHeaders(),
    body: JSON.stringify({ email: RED_DIRT_ALLOWED_EMAIL, password }),
  });
  saveSession(await parse(response));
}
export async function signUpToOffice(password: string): Promise<boolean> {
  const response = await fetch(RED_DIRT_SUPABASE_URL + "/auth/v1/signup", {
    method: "POST", headers: authHeaders(),
    body: JSON.stringify({
      email: RED_DIRT_ALLOWED_EMAIL, password,
      data: { office: "red-dirt" },
      // May fall back to the Supabase project's existing default redirect until
      // this URL is added to the shared Auth redirect allowlist.
    }),
  });
  const result = await parse(response);
  if (result.access_token) { saveSession(result); return true; }
  return false;
}
export async function getAccessToken(): Promise<string> {
  const saved = getSavedSession();
  if (!saved) throw new Error("Please sign in again.");
  if (saved.expires_at > Date.now() + 60_000) return saved.access_token;
  const response = await fetch(RED_DIRT_SUPABASE_URL + "/auth/v1/token?grant_type=refresh_token", {
    method: "POST", headers: authHeaders(),
    body: JSON.stringify({ refresh_token: saved.refresh_token }),
  });
  try {
    const result = await parse(response);
    saveSession(result);
    return String(result.access_token);
  } catch(error) {
    localStorage.removeItem(SESSION_KEY);
    throw error;
  }
}
export async function getOfficeIdentity(): Promise<OfficeIdentity | null> {
  if (!getSavedSession()) return null;
  const token = await getAccessToken();
  const response = await fetch(RED_DIRT_SUPABASE_URL + "/auth/v1/user", {
    headers: authHeaders(token), cache: "no-store",
  });
  if (!response.ok) return null;
  const user = await parse(response);
  const email = String(user.email || "").toLowerCase();
  if (email !== RED_DIRT_ALLOWED_EMAIL || !user.email_confirmed_at || typeof user.id !== "string") {
    await signOutOfOffice();
    return null;
  }
  return { id: String(user.id), email };
}
export async function signOutOfOffice() {
  const saved = getSavedSession();
  localStorage.removeItem(SESSION_KEY);
  if (saved) {
    await fetch(RED_DIRT_SUPABASE_URL + "/auth/v1/logout", {
      method: "POST", headers: authHeaders(saved.access_token),
    }).catch(() => {});
  }
}

async function dataRequest(path: string, method = "GET", body?: unknown): Promise<unknown> {
  let token = await getAccessToken();
  const makeRequest = (bearer: string) => fetch(RED_DIRT_SUPABASE_URL + "/rest/v1/" + path, {
    method,
    headers: {
      ...authHeaders(bearer),
      ...(method === "POST" ? { Prefer: "resolution=merge-duplicates,return=representation" } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: "no-store",
  });
  let response = await makeRequest(token);
  if (response.status === 401) {
    const current = getSavedSession();
    if (current) {
      current.expires_at = 0;
      localStorage.setItem(SESSION_KEY, JSON.stringify(current));
      token = await getAccessToken();
      response = await makeRequest(token);
    }
  }
  if (!response.ok) {
    const details = await response.json().catch(() => ({})) as Record<string, unknown>;
    throw new Error(String(details.message || details.error || "Unable to save to Supabase."));
  }
  if (response.status === 204) return null;
  return response.json();
}

export type CloudDocRow<T> = { id: string; owner_id: string; number: string; kind: string; document: T; emailed_at: string|null };
export async function loadCloudDocs<T>(): Promise<CloudDocRow<T>[]> {
  return await dataRequest("red_dirt_office_documents?select=id,owner_id,number,kind,document,emailed_at&order=updated_at.desc") as CloudDocRow<T>[];
}
export async function saveCloudDoc<T extends { id: string; number: string; kind: string; updatedAt: string }>(doc: T, ownerId: string) {
  const result = await dataRequest("red_dirt_office_documents?on_conflict=id", "POST", [{
    id: doc.id, owner_id: ownerId, number: doc.number, kind: doc.kind,
    document: doc, updated_at: doc.updatedAt,
  }]) as CloudDocRow<T>[];
  if (!Array.isArray(result) || !result.length) throw new Error("Saved document was not returned.");
  return result[0];
}
export async function deleteCloudDoc(id: string) {
  await dataRequest("red_dirt_office_documents?id=eq." + encodeURIComponent(id), "DELETE");
}
export async function sendOfficeInvoice(id: string): Promise<void> {
  const token = await getAccessToken();
  const response = await fetch("/api/office/send-invoice", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
    body: JSON.stringify({ id }), cache: "no-store",
  });
  await parse(response);
}
