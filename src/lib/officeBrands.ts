/** Branding shared by the private Office UI and authenticated mail endpoint.
 * Existing documents with no businessKey belong to Red Dirt. */
export type OfficeBusiness = "red_dirt" | "lyn_lilis";
export type BusinessDocument = { businessKey?: OfficeBusiness };
export const businessOf = (document: BusinessDocument): OfficeBusiness =>
  document.businessKey === "lyn_lilis" ? "lyn_lilis" : "red_dirt";

export const OFFICE_BRANDS = {
  red_dirt: {
    name: "Red Dirt Property Services LLC",
    shortName: "Red Dirt",
    label: "RED DIRT",
    subLabel: "PROPERTY SERVICES LLC",
    phone: "870-828-2562",
    phoneHref: "8708282562",
    secondaryPhone: "",
    email: "reddirtpropertyservicesar@gmail.com",
    website: "https://www.reddirtpropertyservicesar.com",
    websiteLabel: "reddirtpropertyservicesar.com",
    fromName: "Red Dirt Property Services LLC",
    numberPrefix: "RD",
  },
  lyn_lilis: {
    name: "Lyn & Lili's Tidy House",
    shortName: "Lyn & Lili's",
    label: "LYN & LILI'S",
    subLabel: "TIDY HOUSE · CLEANING & HOME SERVICES",
    phone: "870-260-4536",
    phoneHref: "8702604536",
    secondaryPhone: "870-997-7893",
    email: "lynandlilistidyhouse@gmail.com",
    website: "https://www.lynandlilistidyhouse.com",
    websiteLabel: "lynandlilistidyhouse.com",
    fromName: "Lyn & Lili's Tidy House",
    numberPrefix: "LL",
  },
} as const;

export const LYN_SERVICE_CHECKLIST = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Airbnb & Rental Turnovers",
  "Move-In / Move-Out Cleaning",
  "Professional Building Cleaning",
  "Home Organization & Decluttering",
  "Senior Home Cleaning & Household Help",
  "Holiday & Special Occasion Cleaning",
  "Tobacco Residue & Stained-Wall Cleaning",
  "Post-Party Cleanup",
] as const;
