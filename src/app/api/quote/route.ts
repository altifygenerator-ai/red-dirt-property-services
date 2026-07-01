import { NextResponse } from "next/server";

const quoteToEmail =
  process.env.QUOTE_TO_EMAIL ?? "reddirtpropertyservicesar@gmail.com";
const quoteFromEmail =
  process.env.QUOTE_FROM_EMAIL ??
  "Red Dirt Property Services <quotes@hometownwebservicesar.cc>";
const replyToEmail = process.env.QUOTE_REPLY_TO_EMAIL ?? quoteToEmail;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const honeypot = clean(formData.get("companyWebsite"));
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(formData.get("name"));
    const phone = clean(formData.get("phone"));
    const email = clean(formData.get("email"));
    const location = clean(formData.get("location"));
    const service = clean(formData.get("service"));
    const details = clean(formData.get("details"));
    const sourcePage = clean(formData.get("sourcePage"));

    if (!name || !phone || !location || !service || !details) {
      return NextResponse.json(
        { message: "Please fill out the required quote fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "The quote form is missing the Resend API key." },
        { status: 500 }
      );
    }

    const safe = {
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      email: escapeHtml(email || "Not provided"),
      location: escapeHtml(location),
      service: escapeHtml(service),
      details: escapeHtml(details).replaceAll("\n", "<br />"),
      sourcePage: escapeHtml(sourcePage || "Red Dirt website"),
    };

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.55;color:#171717;">
        <h1 style="margin:0 0 16px;font-size:24px;">New Red Dirt Quote Request</h1>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Town / Property Area:</strong> ${safe.location}</p>
        <p><strong>Type of Work:</strong> ${safe.service}</p>
        <p><strong>Source Page:</strong> ${safe.sourcePage}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:18px 0;" />
        <p><strong>Details:</strong></p>
        <p>${safe.details}</p>
      </div>
    `;

    const text = `New Red Dirt Quote Request

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Town / Property Area: ${location}
Type of Work: ${service}
Source Page: ${sourcePage || "Red Dirt website"}

Details:
${details}
`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: quoteFromEmail,
        to: [quoteToEmail],
        reply_to: email || replyToEmail,
        subject: `New Red Dirt Quote Request - ${location}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend quote form error:", errorText);
      return NextResponse.json(
        { message: "The quote form could not send. Please call or text instead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { message: "Something went wrong sending the quote request." },
      { status: 500 }
    );
  }
}
