import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages, type ServicePageData } from "@/data/seoPages";

const basePage = servicePages["dirt-work"];

const page: ServicePageData = {
  ...basePage,
  title: "Mini Excavator & Dirt Work | Driveways, Ditches & Culverts",
  description:
    "Red Dirt Property Services LLC handles mini excavator work, small excavation, driveway grading and touch-ups, drainage ditches, culvert help, washout repair, rough grading, and root excavation around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
  ogTitle: "Mini Excavator & Dirt Work | Red Dirt Property Services LLC",
  ogDescription:
    "Mini excavator work, small excavation, driveways, drainage ditches, culverts, washouts, rough grading, and root work for rural Arkansas properties.",
  eyebrow: "Mini Excavator • Dirt Work • Driveways • Drainage",
  h1:
    "Mini Excavator Dirt Work For Driveways, Ditches, Culverts And Small Excavation.",
  intro:
    "Red Dirt can help with practical mini-excavator and dirt work around rural places, cabins, driveways, field entrances, and properties that need water, roots, or rough ground handled. Driveway grading and touch-ups, drainage ditches, culvert help, washouts, rough grading, root excavation, and small digging jobs are quoted around the actual property.",
  overviewTitle:
    "Water, access, roots, and rough ground do not get easier by ignoring them.",
  overviewText: [
    "A driveway washing out, a ditch not draining, a rough entrance, exposed roots, or a culvert area that is not moving water can turn into a bigger problem every time it rains.",
    "We can look at mini-excavator work, small excavation, driveway touch-ups and grading, drainage ditches, culvert help, rough grading, washout repair, root excavation, and cleanup work tied to access roads, cabins, shops, and country places.",
    "Some dirt work needs material, equipment time, and an in-person look before it can be quoted firm. Send wide photos first if you can, especially pictures of the access, slope, water flow, roots, and the full problem area."
  ],
  cards: [
    "Mini excavator work",
    "Driveway grading & touch-ups",
    "Drainage ditches",
    "Culvert help",
    "Washout repair",
    "Root & stump excavation"
  ],
  detailTitle:
    "Mini excavator work depends on access, water, material, roots, and what the ground is doing.",
  detailText: [
    "A short driveway touch-up is not the same job as rebuilding a washed-out entrance, cutting or cleaning a ditch, helping with a culvert, or digging around a root and stump system. Grade, slope, runoff, rock, material, and room to work all change the quote.",
    "We are a good fit for small rural dirt work, mini-excavator work, root excavation, and property access jobs that match our equipment and crew. If a job needs engineering, major excavation, or heavy commercial equipment, we will tell you straight.",
    "Photos help, but bigger drainage, culvert, or driveway jobs may need a property look before we give a firm number."
  ],
  schemaName: "Mini Excavator and Dirt Work Service",
  schemaDescription:
    "Mini excavator work, small excavation, driveway grading and touch-ups, drainage ditches, culvert help, washout repair, rough grading, root excavation, and rural property access work around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
  serviceType: [
    "Mini excavator work",
    "Dirt work",
    "Small excavation",
    "Driveway repair",
    "Driveway grading",
    "Drainage ditches",
    "Culvert work",
    "Washout repair",
    "Rough grading",
    "Root excavation"
  ],
  related: [
    {
      label: "Amity Dirt Work",
      href: "/amity-dirt-work",
      text: "Local mini excavator, driveway, drainage, culvert, washout, and small excavation work around Amity."
    },
    {
      label: "Glenwood Dirt Work",
      href: "/glenwood-dirt-work",
      text: "Mini excavator and dirt work around Glenwood for driveways, drainage, roots, and rural property access."
    },
    ...basePage.related,
  ],
};

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/dirt-work",
  },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: `/${page.slug}`,
    images: [
      {
        url: page.heroImage,
        alt: page.heroAlt,
      },
    ],
  },
  twitter: {
    title: page.ogTitle,
    description: page.ogDescription,
    images: [page.heroImage],
  },
};

export default function DirtWorkPage() {
  return <ServiceLandingPage page={page} />;
}
