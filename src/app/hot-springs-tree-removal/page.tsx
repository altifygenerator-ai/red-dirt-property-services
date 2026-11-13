import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages, type ServicePageData } from "@/data/seoPages";

const page: ServicePageData = {
  ...servicePages["tree-work"],
  slug: "hot-springs-tree-removal",
  title: "Small Tree Removal & Limb Cleanup in Hot Springs AR",
  description:
    "Need a small tree removed or limbs hauled off around Hot Springs, AR? Red Dirt quotes practical tree removal, fallen limb cleanup, brush hauling, and light clearing around Hot Springs, Royal, Pearcy, and Lake Hamilton when the job can be handled safely.",
  ogTitle: "Hot Springs Tree Removal & Limb Cleanup | Red Dirt",
  ogDescription:
    "Small tree removal, limb cleanup, tree debris hauling, and light clearing around Hot Springs, AR. Send photos for a straightforward estimate.",
  eyebrow: "Hot Springs • Small Tree Removal • Limb Cleanup",
  h1: "Small Tree Removal And Cleanup Around Hot Springs.",
  intro:
    "Have a smaller tree that needs taken down, limbs scattered across the yard, or a pile of branches that needs hauled away? Red Dirt Property Services can look at the job, explain what fits our equipment, and quote the removal and cleanup around Hot Springs and nearby rural properties.",
  overviewEyebrow: "What We Can Help With",
  overviewTitle: "Not every tree job needs the same crew or equipment.",
  overviewText: [
    "We take on manageable tree removal, fallen limbs, brush piles, and small-property clearing when we can safely do the work. We can cut, load, and haul debris so you aren't left with a mess afterward.",
    "Hot Springs properties vary a lot. A tree in an open yard is different from one hanging over a house, near utility lines, or on a steep lake lot. We look at the surroundings before promising a price or taking on a job.",
    "Text us wide photos of the tree, nearby buildings or wires, and access for a truck and trailer. We can often tell whether it is a good fit before scheduling an on-site look.",
  ],
  cards: [
    "Small tree removal",
    "Downed tree and limb cleanup",
    "Tree debris hauling",
    "Brush and branch piles",
    "Yard and fence-line clearing",
    "Cleanup after another tree crew",
  ],
  detailEyebrow: "Safety And Access",
  detailTitle: "We don't gamble with trees over houses or power lines.",
  detailText: [
    "Large hazardous trees, difficult rigging, unstable trees, and work around power lines belong with an appropriately equipped specialist. We will say so if the work is outside our scope.",
    "For work that fits, our quote considers the size of the tree, where it can fall, safe access, loading, hauling distance, and disposal. Stump grinding can be quoted separately when needed.",
    "We can also look at nearby cleanup, overgrown edges, and brush hauling while we're there if combining the work makes sense.",
  ],
  areaTitle:
    "Small tree work around Hot Springs, Royal, Pearcy, Lake Hamilton, Mountain Pine, and nearby Arkansas communities.",
  areaText:
    "Red Dirt is based in the Amity and Glenwood area and travels to Hot Springs for suitable tree removal, limb cleanup, storm debris, and brush-hauling jobs. Travel and access are figured into each quote.",
  schemaName: "Small Tree Removal and Limb Cleanup in Hot Springs AR",
  schemaDescription:
    "Small tree removal, fallen limb cleanup, tree debris hauling, brush removal, and light clearing in and around Hot Springs, Arkansas, subject to safe site access and job scope.",
  serviceType: [
    "Small tree removal",
    "Tree limb cleanup",
    "Tree debris hauling",
    "Brush removal",
    "Light property clearing",
  ],
  areaServed: [
    "Hot Springs AR",
    "Royal AR",
    "Pearcy AR",
    "Lake Hamilton AR",
    "Mountain Pine AR",
    "Bismarck AR",
  ],
  related: [
    { label: "Hot Springs Storm Cleanup", href: "/hot-springs-storm-cleanup", text: "Fallen limbs, storm debris, and brush pile hauling around Hot Springs." },
    { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Help with rough yards, junk, brush, and other property cleanup jobs." },
    { label: "Hot Springs Stump Grinding", href: "/hot-springs-stump-grinding", text: "Ask about grinding a stump after the tree work is complete." },
    { label: "Hot Springs Brush Hogging", href: "/hot-springs-brush-hogging", text: "Cut back overgrown acreage, field edges, and rough spots." },
    { label: "Tree Work in Southwest Arkansas", href: "/tree-work", text: "See our broader approach to small tree work and clearing." },
    { label: "Hot Springs Service Area", href: "/hot-springs-ar", text: "Explore our cleanup, hauling, dirt work, and property services near Hot Springs." },
  ],
};

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/hot-springs-tree-removal" },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: "/hot-springs-tree-removal",
    images: [{ url: page.heroImage, alt: page.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.ogTitle,
    description: page.ogDescription,
    images: [page.heroImage],
  },
};

export default function HotSpringsTreeRemovalPage() {
  return <ServiceLandingPage page={page} />;
}
