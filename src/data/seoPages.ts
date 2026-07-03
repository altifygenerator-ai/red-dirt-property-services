import { areaNavLinks, serviceNavLinks, siteData } from "@/data/site";

export type RelatedLink = {
  label: string;
  href: string;
  text: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  heroImage: string;
  heroAlt: string;
  eyebrow: string;
  h1: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  overviewEyebrow: string;
  overviewTitle: string;
  overviewText: string[];
  cards: string[];
  detailImage: string;
  detailAlt: string;
  detailEyebrow: string;
  detailTitle: string;
  detailText: string[];
  areaTitle: string;
  areaText: string;
  schemaName: string;
  schemaDescription: string;
  serviceType: string[];
  areaServed: string[];
  related: RelatedLink[];
};

export type LocationPageData = {
  slug: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  heroImage: string;
  heroAlt: string;
  eyebrow: string;
  h1: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  overviewEyebrow: string;
  overviewTitle: string;
  overviewText: string[];
  cards: string[];
  detailImage: string;
  detailAlt: string;
  detailEyebrow: string;
  detailTitle: string;
  detailText: string[];
  localTitle: string;
  localText: string;
  schemaName: string;
  schemaDescription: string;
  areaServed: string[];
  serviceType: string[];
  related: RelatedLink[];
};

const areaLinks = areaNavLinks.map((item) => ({
  label: `${item.label} Area`,
  href: item.href,
  text: item.description,
}));

const serviceLinks = serviceNavLinks.map((item) => ({
  label: item.label,
  href: item.href,
  text: item.description,
}));

export const coreAreaServed = [
  "Amity AR",
  "Glenwood AR",
  "Kirby AR",
  "Norman AR",
  "Mount Ida AR",
  "Bonnerdale AR",
  "Bismarck AR",
  "Caddo Valley AR",
  "Arkadelphia AR",
  "Hot Springs AR",
  "Mountain Pine AR",
  "Malvern AR",
  "Murfreesboro AR",
];

export const servicePages: Record<string, ServicePageData> = {
  "property-cleanup": {
    slug: "property-cleanup",
    title: "Property Cleanup in Rural Arkansas",
    description:
      "Red Dirt Property Services handles property cleanup, brush cleanup, junk piles, debris hauling, neglected yards, and rural cleanup work around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    ogTitle: "Property Cleanup in Rural Arkansas | Red Dirt Property Services",
    ogDescription:
      "Local property cleanup for brush, junk, debris, storm mess, rental properties, cabins, and rough rural places around Amity and Glenwood, Arkansas.",
    heroImage: "/images/work-1.jpg",
    heroAlt: "Rural Arkansas property cleanup with brush and debris removed",
    eyebrow: "Property Cleanup • Brush • Junk • Debris",
    h1: "When A Property Gets Away From You, We Help Get It Back Under Control.",
    intro:
      "Red Dirt handles the kind of cleanup work that piles up around country places, rentals, cabins, lots, and family properties. Brush, junk, debris, old materials, storm mess, and overgrowth can all turn into a headache fast. We bring the truck, trailer, tools, and local know-how to help clear it out.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Cleanup Quote",
    overviewEyebrow: "Real Property Cleanup",
    overviewTitle: "Not every cleanup is a simple junk pickup.",
    overviewText: [
      "Some places need more than a trash can and a good intention. Rural properties around Amity, Glenwood, Mount Ida, and Hot Springs can collect brush piles, scrap, old furniture, storm limbs, outbuilding junk, and years of odds and ends before anyone has time to deal with it.",
      "We help homeowners, landlords, cabin owners, families, and folks cleaning up acreage get the property looking usable again without trying to turn a rough job into a polished city-service package.",
      "Send photos first if you can. We can usually tell pretty quick whether it is a haul-off, a brush cleanup, a light demo job, or something that needs looked at in person."
    ],
    cards: [
      "Overgrown yard cleanup",
      "Brush piles and debris",
      "Old furniture and junk",
      "Rental and cabin cleanup",
      "Storm limb cleanup",
      "Outbuilding cleanups"
    ],
    detailImage: "/images/work-4.jpg",
    detailAlt: "Opened up rural property after cleanup work",
    detailEyebrow: "How We Quote It",
    detailTitle: "Photos, access, load size, and disposal matter.",
    detailText: [
      "Property cleanup can mean one trailer load or a full day of cutting, loading, dragging, sorting, and hauling. That is why we quote based on the actual job instead of throwing out a number that does not fit.",
      "We look at what needs moved, whether there is brush or demolition debris mixed in, how close we can get the trailer, how heavy the material is, and where it needs disposed of.",
      "The goal is to give you a straight answer before we show up, then leave the place better than we found it."
    ],
    areaTitle: "Property cleanup around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby rural areas.",
    areaText:
      "Red Dirt is based around Amity and Glenwood, and we serve nearby rural properties when the job makes sense with travel and disposal. If you are outside town, send the location with your photos and we will tell you straight.",
    schemaName: "Property Cleanup Service",
    schemaDescription:
      "Property cleanup, brush cleanup, junk piles, storm debris, hauling, and rural cleanup work around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    serviceType: [
      "Property cleanup",
      "Rural property cleanup",
      "Brush cleanup",
      "Debris hauling",
      "Junk removal",
      "Storm debris cleanup"
    ],
    areaServed: coreAreaServed,
    related: [
      serviceLinks.find((item) => item.href === "/junk-removal")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      serviceLinks.find((item) => item.href === "/storm-cleanup")!,
      areaLinks.find((item) => item.href === "/amity-ar")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/mount-ida-ar")!,
    ],
  },

  "junk-removal": {
    slug: "junk-removal",
    title: "Junk Removal & Hauling in Southwest Arkansas",
    description:
      "Junk removal, furniture haul-off, appliance removal, garage junk, rental junk, debris hauling, and property cleanups around Amity, Glenwood, Hot Springs, Arkadelphia, Mount Ida, and nearby Arkansas communities.",
    ogTitle: "Junk Removal & Hauling | Red Dirt Property Services",
    ogDescription:
      "Local junk removal and hauling for furniture, appliances, debris, garage junk, rental cleanouts, and rural properties around Southwest Arkansas.",
    heroImage: "/images/truck-trailers.jpg",
    heroAlt: "Truck and trailers ready for local junk removal and hauling in Arkansas",
    eyebrow: "Junk Removal • Hauling • Load-Outs",
    h1: "Got Junk That Needs Gone Without A Bunch Of Runaround?",
    intro:
      "Red Dirt helps haul off the stuff that is too big, too heavy, too awkward, or too much for one pickup load. Furniture, appliances, old materials, garage junk, rental leftovers, and mixed debris can all be quoted with photos and a location.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Haul-Off Quote",
    overviewEyebrow: "Local Junk Removal",
    overviewTitle: "Straightforward haul-off help for homes, rentals, shops, and rural places.",
    overviewText: [
      "Junk removal around here is not always a neat pile by the curb. Sometimes it is an old couch in a shed, appliances behind a rental, scrap mixed with trash, leftover remodel material, or a garage that needs room to breathe again.",
      "We are set up for practical haul-off work with a truck, trailers, and a crew that is used to rural driveways, tight access, odd loads, and dirty jobs.",
      "If the load has dump fees, extra weight, appliances, or multiple stops, we factor that into the quote so there are fewer surprises."
    ],
    cards: [
      "Furniture haul-off",
      "Appliance removal",
      "Garage junk",
      "Rental leftovers",
      "Scrap and debris",
      "Trailer load cleanups"
    ],
    detailImage: "/images/flatbed.jpg",
    detailAlt: "Flatbed trailer used for junk removal and local hauling jobs",
    detailEyebrow: "What We Need",
    detailTitle: "A few photos usually tell the story.",
    detailText: [
      "For most junk removal jobs, the fastest way to start is a few pictures of the pile or room, the town you are in, and whether there are stairs, gates, hills, or tight spots getting to it.",
      "A single item, a small garage pile, and a full rental cleanout are all different jobs. We quote based on load size, labor, disposal, mileage, and how easy it is to safely get the material loaded.",
      "We keep it simple: send what you have, we look it over, and we tell you whether it is something we can get handled."
    ],
    areaTitle: "Junk removal around Amity, Glenwood, Hot Springs, Arkadelphia, Malvern, and nearby towns.",
    areaText:
      "Red Dirt serves local homes, rentals, cabins, shops, and rural properties across the Amity and Glenwood area, with larger haul-off jobs making sense into Hot Springs, Arkadelphia, Malvern, Mount Ida, and surrounding communities.",
    schemaName: "Junk Removal Service",
    schemaDescription:
      "Junk removal, furniture haul-off, appliance removal, garage cleanouts, debris hauling, and rental junk removal around Amity, Glenwood, Hot Springs, Arkadelphia, and nearby Arkansas communities.",
    serviceType: [
      "Junk removal",
      "Furniture removal",
      "Appliance removal",
      "Garage cleanout",
      "Debris hauling",
      "Rental junk removal"
    ],
    areaServed: coreAreaServed,
    related: [
      serviceLinks.find((item) => item.href === "/cleanouts")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/light-demolition")!,
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/arkadelphia-ar")!,
      areaLinks.find((item) => item.href === "/malvern-ar")!,
    ],
  },

  "shed-removal": {
    slug: "shed-removal",
    title: "Shed Removal & Small Structure Cleanup",
    description:
      "Shed removal, old outbuilding removal, small structure teardown, fence removal, light demolition, and debris hauling around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    ogTitle: "Shed Removal & Small Structure Cleanup | Red Dirt Property Services",
    ogDescription:
      "Old sheds, small outbuildings, fence lines, decks, and demo debris removed by a local rural Arkansas crew.",
    heroImage: "/images/equipment-1.jpg",
    heroAlt: "Equipment for shed removal and small structure cleanup in Arkansas",
    eyebrow: "Shed Removal • Small Structures • Demo Debris",
    h1: "Old Sheds And Small Structures Do Not Need To Sit There Forever.",
    intro:
      "Rotten sheds, falling fences, small barns, decks, and damaged outbuildings can sit around for years because nobody wants to fool with the teardown and haul-off. Red Dirt takes on light demolition work that fits our crew, tools, truck, and trailers.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Shed Removal Quote",
    overviewEyebrow: "Shed Removal",
    overviewTitle: "Tear it down, clean it up, and haul it off.",
    overviewText: [
      "A shed removal job is not just swinging a hammer. You have to think about access, nails, rotten lumber, metal, shingles, hidden junk, disposal, and whether the structure is safe enough to work around.",
      "We focus on light demolition, not full house demolition. Sheds, small outbuildings, damaged fences, old decks, playsets, and similar projects are the kind of work we can usually look at.",
      "If the structure is unsafe, leaning hard, full of unknown material, or sitting in a tight spot, we will want several photos or an in-person look before quoting firm."
    ],
    cards: [
      "Old shed removal",
      "Small outbuildings",
      "Fence removal",
      "Deck tear-downs",
      "Playset removal",
      "Demo debris hauling"
    ],
    detailImage: "/images/dump.jpg",
    detailAlt: "Debris hauling for shed removal and light demolition jobs",
    detailEyebrow: "What Affects Price",
    detailTitle: "Size, material, safety, and disposal all matter.",
    detailText: [
      "A small empty metal shed is a different job than a rotten wood shed full of junk, shingles, old wire, insulation, trash, and heavy debris. That is why photos from all sides help so much.",
      "We quote based on the structure, how it needs to come apart, how close we can get the trailer, how much labor it takes, and what disposal will cost.",
      "The goal is to leave you with open space instead of a pile of splinters and metal that becomes another problem."
    ],
    areaTitle: "Shed removal around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby rural properties.",
    areaText:
      "We handle shed and light structure removal for homeowners, landlords, cabins, small farms, and rural properties across the Amity and Glenwood area, with larger jobs quoted into surrounding towns.",
    schemaName: "Shed Removal Service",
    schemaDescription:
      "Shed removal, small structure teardown, light demolition, fence removal, deck removal, and debris hauling around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    serviceType: [
      "Shed removal",
      "Small structure removal",
      "Light demolition",
      "Fence removal",
      "Deck removal",
      "Debris hauling"
    ],
    areaServed: coreAreaServed,
    related: [
      serviceLinks.find((item) => item.href === "/light-demolition")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/junk-removal")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/amity-ar")!,
      areaLinks.find((item) => item.href === "/arkadelphia-ar")!,
    ],
  },

  "storm-cleanup": {
    slug: "storm-cleanup",
    title: "Storm Cleanup & Debris Hauling",
    description:
      "Storm cleanup, downed limb cleanup, brush piles, scattered debris, rural property cleanup, and hauling after Arkansas weather around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby towns.",
    ogTitle: "Storm Cleanup & Debris Hauling | Red Dirt Property Services",
    ogDescription:
      "Local cleanup help for storm limbs, brush piles, scattered debris, and property mess after Arkansas weather rolls through.",
    heroImage: "/images/work-3.jpg",
    heroAlt: "Storm cleanup and rural debris removal in Arkansas",
    eyebrow: "Storm Cleanup • Limbs • Debris • Brush",
    h1: "When Arkansas Weather Leaves A Mess, We Can Help Clean It Up.",
    intro:
      "Storms can scatter limbs, brush, damaged materials, and debris across a property in one night. Red Dirt helps get manageable storm mess loaded, hauled, cut back, and cleaned up so you are not staring at it for the next six months.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Storm Cleanup Quote",
    overviewEyebrow: "After The Weather Clears",
    overviewTitle: "Limbs, brush, debris, and property mess add up fast.",
    overviewText: [
      "Around here, a storm does not have to be headline news to make a property hard to deal with. A few downed limbs, scattered debris, torn-up brush, or an old structure knocked loose can create a job bigger than a homeowner wants to take on alone.",
      "We help with manageable storm debris, brush piles, haul-off work, and cleanup tied to property damage. If a job needs a licensed tree crew, utility work, or dangerous overhead cutting, we will be honest about that.",
      "For cleanup jobs that fit our equipment and crew, send photos and your location so we can quote it fairly."
    ],
    cards: [
      "Downed limb cleanup",
      "Brush and debris piles",
      "Storm junk hauling",
      "Fence-line cleanup",
      "Cabin property cleanup",
      "Rural access cleanup"
    ],
    detailImage: "/images/truck-2.png",
    detailAlt: "Truck used for storm debris cleanup and hauling",
    detailEyebrow: "Safe And Practical",
    detailTitle: "We quote the cleanup, not dangerous utility work.",
    detailText: [
      "Storm work has to be looked at with common sense. Loose debris, brush, limbs already on the ground, and cleanup around the property can often be handled with a truck, trailer, tools, and labor.",
      "Trees on power lines, major hanging limbs, and dangerous removals need the right specialized crew. We do not pretend every storm job is the same.",
      "Send photos from a safe distance and tell us what town the property is near. We will let you know what part of the cleanup we can handle."
    ],
    areaTitle: "Storm cleanup around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    areaText:
      "Red Dirt is set up for rural cleanup and hauling after Arkansas weather, especially around Amity, Glenwood, Kirby, Mount Ida, Mountain Pine, Hot Springs, Arkadelphia, and surrounding areas.",
    schemaName: "Storm Cleanup Service",
    schemaDescription:
      "Storm debris cleanup, downed limb cleanup, brush pile cleanup, debris hauling, and rural property cleanup after storms around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    serviceType: [
      "Storm cleanup",
      "Storm debris removal",
      "Downed limb cleanup",
      "Brush pile cleanup",
      "Debris hauling",
      "Rural property cleanup"
    ],
    areaServed: coreAreaServed,
    related: [
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      serviceLinks.find((item) => item.href === "/junk-removal")!,
      areaLinks.find((item) => item.href === "/mountain-pine-ar")!,
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/mount-ida-ar")!,
    ],
  },

  "dirt-work": {
    slug: "dirt-work",
    title: "Dirt Work, Driveways, Ditches & Culverts",
    description:
      "Red Dirt Property Services handles small dirt work, driveway touch-ups, rough grading, drainage ditches, culvert help, washouts, and rural property work around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    ogTitle: "Dirt Work, Driveways, Ditches & Culverts | Red Dirt",
    ogDescription:
      "Small dirt work, driveway help, drainage ditches, culverts, washouts, and rough grading for rural Arkansas properties.",
    heroImage: "/images/equipment-1.jpg",
    heroAlt: "Equipment for dirt work, driveway repair, and rural property cleanup in Arkansas",
    eyebrow: "Dirt Work • Driveways • Ditches • Culverts",
    h1: "Driveways, Ditches, Culverts, And Small Dirt Work That Needs Done Right.",
    intro:
      "Red Dirt can help with practical dirt work around rural places, cabins, driveways, field entrances, and properties that need water moving the right direction. Driveway touch-ups, drainage ditches, culvert help, washouts, and rough grading are quoted by the job, access, material needs, and what the property is doing now.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Dirt Work Quote",
    overviewEyebrow: "Practical Dirt Work",
    overviewTitle: "Water, access, and dirt problems do not fix themselves.",
    overviewText: [
      "A driveway washing out, a ditch not draining, or a culvert that needs cleaned up or set right can turn into a bigger problem every time it rains. Rural Arkansas properties need practical fixes that match the land, not a fancy sales pitch.",
      "We can look at small dirt work, driveway touch-ups, drainage ditches, culvert help, rough grading, washout repair, and cleanup work tied to access roads, cabins, shops, and country places.",
      "Some dirt work needs material, equipment time, and an in-person look before it can be quoted firm. Send photos first if you can, especially pictures of the access, slope, water flow, and problem area."
    ],
    cards: [
      "Driveway touch-ups",
      "Drainage ditches",
      "Culvert help",
      "Washout repair",
      "Rough grading",
      "Rural access cleanup"
    ],
    detailImage: "/images/tractor-pov.jpg",
    detailAlt: "Rural Arkansas equipment work for driveways and property access",
    detailEyebrow: "Quoted By The Job",
    detailTitle: "Dirt work depends on access, water, material, and what the ground is doing.",
    detailText: [
      "A short driveway touch-up is not the same job as rebuilding a washed-out entrance, cutting a ditch, or helping with a culvert. Grade, slope, water flow, rock, material, and room to work all change the quote.",
      "We are a good fit for small rural dirt work and property access jobs that match our equipment and crew. If a job needs engineering, major excavation, or heavy commercial equipment, we will tell you straight.",
      "Photos help, but bigger drainage or driveway jobs may need a property look before we give a firm number."
    ],
    areaTitle: "Dirt work around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby rural areas.",
    areaText:
      "Red Dirt quotes driveway help, ditches, culverts, washouts, rough grading, and small dirt work around the Amity and Glenwood area, with surrounding towns quoted when the job fits the route and scope.",
    schemaName: "Dirt Work Service",
    schemaDescription:
      "Small dirt work, driveway touch-ups, drainage ditches, culvert help, washout repair, rough grading, and rural property access work around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    serviceType: [
      "Dirt work",
      "Driveway repair",
      "Driveway grading",
      "Drainage ditches",
      "Culvert work",
      "Washout repair",
      "Rough grading"
    ],
    areaServed: coreAreaServed,
    related: [
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      serviceLinks.find((item) => item.href === "/stump-grinding")!,
      areaLinks.find((item) => item.href === "/amity-ar")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/mount-ida-ar")!,
    ],
  },

  "tree-work": {
    slug: "tree-work",
    title: "Tree Work, Limb Cleanup & Small Acreage Clearing",
    description:
      "Red Dirt Property Services handles small tree work, limb cleanup, brush removal, light clearing, small acreage cleanup, and tree debris hauling around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns. Tree work depends on the job and location.",
    ogTitle: "Tree Work & Small Acreage Clearing | Red Dirt",
    ogDescription:
      "Small tree work, limb cleanup, brush removal, light clearing, and tree debris hauling for rural Arkansas properties when the job fits.",
    heroImage: "/images/work-3.jpg",
    heroAlt: "Tree limbs and brush cleanup on a rural Arkansas property",
    eyebrow: "Tree Work • Limbs • Brush • Light Clearing",
    h1: "Tree Work Depends On The Job, And We Look At It That Way.",
    intro:
      "Red Dirt can help with small tree work, limb cleanup, brush removal, tree debris, and light clearing when the job fits our crew, equipment, and access. We are not the crew for dangerous removals over houses, power lines, or tight overhead hazards, but we can look at practical rural tree and clearing work.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Ask About Tree Work",
    overviewEyebrow: "Look First, Quote Fair",
    overviewTitle: "Some tree jobs are a fit. Some need a specialized tree crew.",
    overviewText: [
      "Tree work can be simple, or it can be dangerous. Limbs already on the ground, brush piles, small trees, fence-line growth, and light clearing are often practical jobs. Trees leaning over a house, close to power lines, or tied up in overhead hazards are a different story.",
      "We would rather look at the job and be honest than take on something that should be handled by a specialized tree service. Send photos from a safe distance and show what is near the tree, not just the tree itself.",
      "We are also open to light clearing and small acreage cleanup when the job fits, such as opening up an acre or two, knocking back brush, cleaning up small trees, or hauling debris after cutting."
    ],
    cards: [
      "Small tree work",
      "Downed limb cleanup",
      "Brush removal",
      "Tree debris hauling",
      "Fence-line cleanup",
      "Light acreage clearing"
    ],
    detailImage: "/images/work-4.jpg",
    detailAlt: "Rural property opened up after tree and brush cleanup",
    detailEyebrow: "Safety Matters",
    detailTitle: "We avoid power lines, houses, and dangerous overhead work.",
    detailText: [
      "The first question with tree work is not price. It is whether the job can be done safely with the right equipment and crew. Power lines, houses, tight drops, heavy lean, dead tops, and hanging limbs all matter.",
      "For the jobs that fit, we can help cut, drag, load, haul, grind stumps separately, and clean up the mess so the property is more usable again.",
      "For jobs that do not fit, we will tell you straight instead of pretending every tree is the same."
    ],
    areaTitle: "Tree work and light clearing around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby rural areas.",
    areaText:
      "Red Dirt quotes small tree work, limb cleanup, brush removal, tree debris hauling, and light acreage clearing around the Amity and Glenwood area, with larger rural jobs quoted by photos, access, and safety.",
    schemaName: "Tree Work and Light Clearing Service",
    schemaDescription:
      "Small tree work, limb cleanup, brush removal, tree debris hauling, light acreage clearing, and rural property cleanup around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    serviceType: [
      "Tree work",
      "Limb cleanup",
      "Brush removal",
      "Tree debris hauling",
      "Small acreage clearing",
      "Light clearing"
    ],
    areaServed: coreAreaServed,
    related: [
      serviceLinks.find((item) => item.href === "/stump-grinding")!,
      serviceLinks.find((item) => item.href === "/storm-cleanup")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      areaLinks.find((item) => item.href === "/amity-ar")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/mountain-pine-ar")!,
    ],
  },

  "stump-grinding": {
    slug: "stump-grinding",
    title: "Stump Grinding in Rural Arkansas",
    description:
      "Red Dirt Property Services handles stump grinding for yards, driveways, fence lines, cleanup areas, and rural properties around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    ogTitle: "Stump Grinding | Red Dirt Property Services",
    ogDescription:
      "Stump grinding for rural Arkansas yards, driveways, fence lines, cleanup areas, and properties around Amity, Glenwood, Mount Ida, Hot Springs, and Arkadelphia.",
    heroImage: "/images/tractor-pov.jpg",
    heroAlt: "Equipment work on rural Arkansas property for stump grinding and cleanup",
    eyebrow: "Stump Grinding • Cleanup • Rural Properties",
    h1: "Old Stumps Do Not Have To Sit In The Way Forever.",
    intro:
      "Stumps can make mowing harder, get in the way of driveways and cleanup work, or leave a property looking unfinished after trees come down. Red Dirt can quote stump grinding by size, location, access, and how much cleanup needs done after the grind.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Stump Quote",
    overviewEyebrow: "Stump Grinding",
    overviewTitle: "Size, access, roots, rocks, and cleanup all matter.",
    overviewText: [
      "A stump out in the open is a different job than one next to a fence, driveway, structure, buried metal, rocks, or tight landscaping. The size of the stump, the root flare, and room to get equipment in all affect the quote.",
      "We can look at single stumps, multiple stumps, stumps tied to cleanup work, and stumps left after small tree or storm jobs. Photos help us see the stump and the access around it.",
      "Stump grinding is usually about getting the stump down and out of the way. If you need hauling, dirt work, or cleanup after, we can quote that with it."
    ],
    cards: [
      "Single stump grinding",
      "Multiple stumps",
      "Fence-line stumps",
      "Driveway edge stumps",
      "Storm cleanup stumps",
      "Cleanup after grinding"
    ],
    detailImage: "/images/equipment-1.jpg",
    detailAlt: "Equipment for stump grinding and property cleanup in Arkansas",
    detailEyebrow: "Before We Grind",
    detailTitle: "Show the stump, the access, and anything close to it.",
    detailText: [
      "For a stump quote, send photos of the stump from a few angles, something for size if you can, and a wider photo showing how we get to it. Let us know if there are rocks, fencing, utilities, concrete, or buried material nearby.",
      "Stumps near underground utilities, tight structures, or unknown buried material need to be treated carefully. We quote based on what can be done safely and practically.",
      "If the stump is part of a bigger cleanup, tree debris, dirt work, or brush job, we can look at everything together."
    ],
    areaTitle: "Stump grinding around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby rural areas.",
    areaText:
      "Red Dirt quotes stump grinding around local homes, cabins, rural properties, driveways, fence lines, and cleanup areas when the job fits equipment access and travel.",
    schemaName: "Stump Grinding Service",
    schemaDescription:
      "Stump grinding for yards, driveways, fence lines, cleanup areas, storm cleanup, and rural properties around Amity, Glenwood, Mount Ida, Hot Springs, Arkadelphia, and nearby Arkansas towns.",
    serviceType: [
      "Stump grinding",
      "Stump removal",
      "Tree stump grinding",
      "Fence-line stump grinding",
      "Driveway stump grinding",
      "Cleanup after stump grinding"
    ],
    areaServed: coreAreaServed,
    related: [
      serviceLinks.find((item) => item.href === "/tree-work")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/dirt-work")!,
      areaLinks.find((item) => item.href === "/amity-ar")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
    ],
  },

  "hot-springs-junk-removal": {
    slug: "hot-springs-junk-removal",
    title: "Junk Removal in Hot Springs AR | Hauling & Cleanouts",
    description:
      "Junk removal in Hot Springs AR for furniture, appliances, garage junk, rental cleanouts, cabin cleanouts, debris piles, and haul-off work around Lake Hamilton, Royal, Pearcy, and nearby areas.",
    ogTitle: "Hot Springs Junk Removal & Hauling | Red Dirt Property Services",
    ogDescription:
      "Local junk removal, hauling, garage cleanouts, rental junk, cabin junk, and debris pickup around Hot Springs, Lake Hamilton, Royal, Pearcy, and nearby Arkansas properties.",
    heroImage: "/images/truck-trailers.jpg",
    heroAlt: "Truck and trailers for junk removal around Hot Springs Arkansas",
    eyebrow: "Hot Springs Junk Removal • Hauling • Cleanouts",
    h1: "Junk Removal Around Hot Springs Without Making It A Bigger Mess.",
    intro:
      "Red Dirt helps Hot Springs area homeowners, landlords, cabin owners, and property managers get rid of old furniture, appliances, garage junk, remodel debris, rental junk, and mixed piles that need loaded and hauled off.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get A Hot Springs Quote",
    overviewEyebrow: "Junk Hauling In Hot Springs",
    overviewTitle: "For the stuff that will not fit in a trash can or the back of a car.",
    overviewText: [
      "Hot Springs junk jobs can be a single heavy item, a full garage, a rental left behind by a tenant, or a cabin cleanup after a busy season. The load size, access, stairs, weight, and dump fees all matter.",
      "We quote the work from photos when we can, then show up with the trailer and tools needed to get the junk moved without leaving the property worse than it started.",
      "This page is focused on junk removal and hauling around Hot Springs. If the job is more like a full property cleanup, cleanout, storm cleanup, or light demolition, Red Dirt can still look at it and point the quote the right way."
    ],
    cards: [
      "Furniture and appliance removal",
      "Garage and carport junk",
      "Rental junk left behind",
      "Cabin and lake house junk",
      "Debris piles and mixed loads",
      "Trailer load haul-offs"
    ],
    detailImage: "/images/dump.jpg",
    detailAlt: "Dump trailer used for Hot Springs junk removal and debris hauling",
    detailEyebrow: "Quote Details",
    detailTitle: "Photos help separate a quick pickup from a full cleanout.",
    detailText: [
      "A couch and a washer is a different job than a garage full of boxes, lumber, trash bags, and heavy items. Photos let us see the volume, weight, and how close the trailer can get.",
      "Hot Springs properties can also have tight driveways, hills, lake-area access, decks, stairs, or rental units with limited parking. Those details affect labor and scheduling.",
      "Send the location, a few wide photos, and close shots of anything heavy. We will price the job as fair as we can before anyone wastes a trip."
    ],
    areaTitle: "Junk removal around Hot Springs, Lake Hamilton, Royal, Pearcy, Mountain Pine, Bismarck, and nearby areas.",
    areaText:
      "Red Dirt can quote Hot Springs junk removal, haul-offs, garage cleanouts, rental junk, cabin junk, appliances, furniture, and debris removal when the job fits the route and scope.",
    schemaName: "Junk Removal Services in Hot Springs AR",
    schemaDescription:
      "Junk removal, hauling, garage junk removal, rental junk removal, cabin junk removal, appliance removal, furniture removal, and debris hauling around Hot Springs, Arkansas.",
    areaServed: ["Hot Springs AR", "Lake Hamilton AR", "Royal AR", "Pearcy AR", "Mountain Pine AR", "Bismarck AR"],
    serviceType: ["Junk removal", "Hauling", "Furniture removal", "Appliance removal", "Rental cleanouts", "Garage cleanouts", "Debris hauling"],
    related: [
      { label: "Hot Springs Cleanouts", href: "/hot-springs-cleanouts", text: "Rental, estate, garage, cabin, shed, and outbuilding cleanouts around Hot Springs." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Wider cleanup help for junk, brush, debris, rough yards, and neglected spots." },
      { label: "Hot Springs Shed Removal", href: "/hot-springs-shed-removal", text: "Old sheds, small structures, teardown debris, and haul-off work." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/lake-hamilton-ar")!,
      serviceLinks.find((item) => item.href === "/junk-removal")!,
    ],
  },

  "hot-springs-property-cleanup": {
    slug: "hot-springs-property-cleanup",
    title: "Property Cleanup in Hot Springs AR | Brush, Junk & Debris",
    description:
      "Property cleanup in Hot Springs AR for overgrown yards, brush piles, junk, debris, cabin cleanup, rental cleanup, storm mess, and rough property cleanup around Lake Hamilton, Royal, Pearcy, and nearby areas.",
    ogTitle: "Hot Springs Property Cleanup | Red Dirt Property Services",
    ogDescription:
      "Property cleanup around Hot Springs for junk, brush, debris, rough yards, cabin areas, rental properties, storm mess, and rural spots outside town.",
    heroImage: "/images/work-1.jpg",
    heroAlt: "Property cleanup work around Hot Springs Arkansas",
    eyebrow: "Hot Springs Property Cleanup • Brush • Junk • Debris",
    h1: "Property Cleanup Around Hot Springs For The Mess That Has Gotten Out Of Hand.",
    intro:
      "Red Dirt handles hands-on property cleanup around Hot Springs when there is junk, brush, debris, storm mess, old materials, neglected yard areas, or rental and cabin cleanup work that needs a trailer and steady labor.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get A Cleanup Quote",
    overviewEyebrow: "Whole-Property Cleanup",
    overviewTitle: "Not every cleanup job fits one simple category.",
    overviewText: [
      "A lot of Hot Springs property cleanup jobs are mixed. There may be brush along the fence line, junk by an outbuilding, storm limbs in the yard, old materials under a deck, and a pile that has been there too long.",
      "That is where Red Dirt fits better than a curbside pickup. We can look at the whole property, quote the labor and hauling, and figure out what needs cleaned up first.",
      "We work with homeowners, landlords, cabin owners, families handling property, and folks trying to get a place ready to use, rent, list, or enjoy again."
    ],
    cards: [
      "Brush piles and yard debris",
      "Old junk and mixed materials",
      "Cabin and lake property cleanup",
      "Rental and move-out messes",
      "Storm debris and limbs",
      "Outbuilding and fence-line cleanup"
    ],
    detailImage: "/images/work-3.jpg",
    detailAlt: "Rough property cleanup and debris removal near Hot Springs Arkansas",
    detailEyebrow: "Property Details Matter",
    detailTitle: "Access, distance, and load size change the price fast.",
    detailText: [
      "A cleanup near the driveway is different than a pile behind a shed, down a hill, or across soft ground. Hot Springs area properties can have narrow drives, steep lots, trees, and lake-area access issues.",
      "Photos help show what is junk, what is brush, what needs cut, what needs hauled, and what may need looked at in person before quoting firm.",
      "If the job includes dirt work, stump grinding, shed removal, or brush hogging, we can quote those parts separately so the price makes sense."
    ],
    areaTitle: "Property cleanup around Hot Springs, Lake Hamilton, Royal, Pearcy, Bismarck, Mountain Pine, and nearby properties.",
    areaText:
      "Red Dirt can quote Hot Springs property cleanup, brush cleanup, junk hauling, storm debris, rental cleanup, cabin cleanup, and light demo cleanup when the work fits the route and equipment.",
    schemaName: "Property Cleanup Services in Hot Springs AR",
    schemaDescription:
      "Property cleanup, brush cleanup, junk hauling, debris removal, cabin cleanup, rental cleanup, storm cleanup, and rough property cleanup around Hot Springs, Arkansas.",
    areaServed: ["Hot Springs AR", "Lake Hamilton AR", "Royal AR", "Pearcy AR", "Bismarck AR", "Mountain Pine AR"],
    serviceType: ["Property cleanup", "Brush cleanup", "Junk removal", "Debris hauling", "Storm cleanup", "Cabin cleanup", "Rental cleanup"],
    related: [
      { label: "Hot Springs Junk Removal", href: "/hot-springs-junk-removal", text: "Furniture, appliances, garage junk, rental junk, and trailer load hauling." },
      { label: "Hot Springs Brush Hogging", href: "/hot-springs-brush-hogging", text: "Bush hogging, brush cutting, rough mowing, trails, and overgrown areas." },
      { label: "Hot Springs Storm Cleanup", href: "/hot-springs-storm-cleanup", text: "Downed limbs, storm debris, scattered brush, and yard cleanup after bad weather." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/royal-ar")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
    ],
  },

  "hot-springs-brush-hogging": {
    slug: "hot-springs-brush-hogging",
    title: "Brush Hogging in Hot Springs AR | Bush Hogging & Rough Mowing",
    description:
      "Brush hogging and bush hogging in Hot Springs AR for overgrown lots, field edges, trails, fence lines, rough mowing, brush cutting, and rural property cleanup around Royal, Pearcy, Bismarck, and Lake Hamilton.",
    ogTitle: "Hot Springs Brush Hogging & Bush Hogging | Red Dirt",
    ogDescription:
      "Brush hogging, bush hogging, rough mowing, field edges, trails, fence lines, and overgrown property cleanup around Hot Springs and nearby rural areas.",
    heroImage: "/images/tractor-bush-hog.jpg",
    heroAlt: "Brush hogging and rough mowing around Hot Springs Arkansas",
    eyebrow: "Hot Springs Brush Hogging • Bush Hogging • Rough Mowing",
    h1: "Brush Hogging Around Hot Springs For Overgrown Lots, Trails, And Rough Areas.",
    intro:
      "Red Dirt quotes brush hogging and bush hogging around Hot Springs for rural properties, field edges, trails, fence lines, cabin land, and overgrown spots that need cut back before they get worse.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get A Brush Hogging Quote",
    overviewEyebrow: "Brush Cutting Around Hot Springs",
    overviewTitle: "Rough mowing is not the same as a lawn service.",
    overviewText: [
      "Brush hogging is for areas that are too rough, tall, uneven, or grown up for regular mowing. Around Hot Springs, that often means lots outside town, lake property edges, trails, fence lines, old yards, and acreage that has been left alone for a while.",
      "We need to know what is hiding in the growth before we quote too tight. Rocks, stumps, scrap metal, holes, steep slopes, wet ground, and hidden debris can change what is safe and what equipment fits.",
      "Send wide photos, a rough size, and where the property is located. If it is hard to tell from photos, we may want to look first."
    ],
    cards: [
      "Overgrown lots and fields",
      "Fence lines and edges",
      "Trails and access paths",
      "Rough mowing outside town",
      "Cabin and lake property brush",
      "Before-cleanup cutting"
    ],
    detailImage: "/images/tractor-pov.jpg",
    detailAlt: "Tractor view during bush hogging near Hot Springs Arkansas",
    detailEyebrow: "Before We Cut",
    detailTitle: "The safer the area is to inspect, the better the quote will be.",
    detailText: [
      "Brush hogging prices depend on acreage, thickness, slope, access, travel, and what the area looks like before cutting. A clean field edge is not the same as a grown-up spot full of hidden debris.",
      "If there are known hazards like old wire, metal, holes, stumps, or wet areas, tell us before we get there. That helps keep the equipment and property safe.",
      "For larger Hot Springs area brush jobs, it may make sense to combine cutting with hauling, limb cleanup, or property cleanup."
    ],
    areaTitle: "Brush hogging around Hot Springs, Royal, Pearcy, Bismarck, Lake Hamilton, Mountain Pine, and rural nearby properties.",
    areaText:
      "Red Dirt can quote Hot Springs brush hogging, bush hogging, rough mowing, trail cutting, fence-line cutting, and overgrown property cleanup when access and terrain fit the equipment.",
    schemaName: "Brush Hogging Services in Hot Springs AR",
    schemaDescription:
      "Brush hogging, bush hogging, rough mowing, brush cutting, fence-line cutting, trail cutting, and overgrown property cleanup around Hot Springs, Arkansas.",
    areaServed: ["Hot Springs AR", "Royal AR", "Pearcy AR", "Bismarck AR", "Lake Hamilton AR", "Mountain Pine AR"],
    serviceType: ["Brush hogging", "Bush hogging", "Rough mowing", "Brush cutting", "Fence-line cutting", "Trail cutting", "Property cleanup"],
    related: [
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Cleanup help for junk, brush, storm debris, rough yards, and property messes." },
      { label: "Hot Springs Storm Cleanup", href: "/hot-springs-storm-cleanup", text: "Downed limbs, brush piles, storm mess, and hauling after Arkansas weather." },
      { label: "Hot Springs Dirt Work", href: "/hot-springs-dirt-work", text: "Driveway touch-ups, ditches, culverts, washouts, and rough grading help." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/bismarck-ar")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
    ],
  },

  "hot-springs-cleanouts": {
    slug: "hot-springs-cleanouts",
    title: "Cleanouts in Hot Springs AR | Rental, Estate, Garage & Cabin Cleanouts",
    description:
      "Cleanout help in Hot Springs AR for rentals, estates, garages, cabins, sheds, outbuildings, storage spaces, and junk left behind around Lake Hamilton, Royal, Pearcy, Mountain Pine, and nearby areas.",
    ogTitle: "Hot Springs Cleanouts | Rentals, Estates, Garages & Cabins",
    ogDescription:
      "Rental cleanouts, estate cleanouts, garage cleanouts, cabin cleanouts, shed cleanouts, and hauling around Hot Springs and nearby Arkansas communities.",
    heroImage: "/images/flatbed.jpg",
    heroAlt: "Trailer used for rental and garage cleanouts around Hot Springs Arkansas",
    eyebrow: "Hot Springs Cleanouts • Rentals • Estates • Garages",
    h1: "Cleanouts Around Hot Springs When A Place Needs Cleared Out And Moved Forward.",
    intro:
      "Red Dirt helps with rental cleanouts, estate cleanouts, garage cleanouts, cabin cleanouts, outbuilding cleanouts, and shed cleanouts around Hot Springs when there is too much junk for a simple pickup.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get A Cleanout Quote",
    overviewEyebrow: "Cleanout Work",
    overviewTitle: "Some cleanouts are emotional. Some are just plain heavy.",
    overviewText: [
      "Hot Springs cleanouts can come from a tenant move-out, family property, a garage that has filled up, a cabin that needs reset, or an outbuilding that has been catching everything for years.",
      "We quote cleanouts based on volume, labor, stairs, sorting needs, heavy items, dump fees, access, and how much has to be loaded by hand.",
      "Photos help us know whether the job is one trailer load, several loads, or something that needs a walk-through before a firm price."
    ],
    cards: [
      "Rental cleanouts",
      "Estate cleanouts",
      "Garage cleanouts",
      "Cabin cleanouts",
      "Shed and outbuilding cleanouts",
      "Storage and debris cleanouts"
    ],
    detailImage: "/images/work-2.jpg",
    detailAlt: "Property cleanout and hauling work around Hot Springs Arkansas",
    detailEyebrow: "What To Send",
    detailTitle: "Wide photos are better than close-ups alone.",
    detailText: [
      "For cleanouts, we need to see the amount of stuff, not just a few individual items. Wide photos of each room, garage bay, shed, porch, or pile make the estimate much more useful.",
      "Let us know if there are appliances, mattresses, tires, paint, chemicals, loose trash, stairs, locked gates, or anything that may change disposal or labor.",
      "If the property is around Hot Springs but outside town, include the nearest area so mileage and scheduling are quoted honestly."
    ],
    areaTitle: "Cleanouts around Hot Springs, Lake Hamilton, Royal, Pearcy, Mountain Pine, Bismarck, and nearby communities.",
    areaText:
      "Red Dirt can quote rental cleanouts, estate cleanouts, garage cleanouts, cabin cleanouts, shed cleanouts, outbuilding cleanouts, and junk hauling around Hot Springs when the job fits.",
    schemaName: "Cleanout Services in Hot Springs AR",
    schemaDescription:
      "Rental cleanouts, estate cleanouts, garage cleanouts, cabin cleanouts, shed cleanouts, outbuilding cleanouts, storage cleanouts, and hauling around Hot Springs, Arkansas.",
    areaServed: ["Hot Springs AR", "Lake Hamilton AR", "Royal AR", "Pearcy AR", "Mountain Pine AR", "Bismarck AR"],
    serviceType: ["Cleanouts", "Rental cleanouts", "Estate cleanouts", "Garage cleanouts", "Cabin cleanouts", "Shed cleanouts", "Hauling"],
    related: [
      { label: "Hot Springs Junk Removal", href: "/hot-springs-junk-removal", text: "Furniture, appliances, old junk, mixed piles, and trailer load hauling." },
      { label: "Hot Springs Shed Removal", href: "/hot-springs-shed-removal", text: "Old sheds, small structures, teardown debris, and haul-off work." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Brush, junk, debris, storm mess, and larger rough cleanup projects." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/lake-hamilton-ar")!,
      serviceLinks.find((item) => item.href === "/cleanouts")!,
    ],
  },

  "hot-springs-shed-removal": {
    slug: "hot-springs-shed-removal",
    title: "Shed Removal in Hot Springs AR | Small Structure Tear Down & Hauling",
    description:
      "Shed removal in Hot Springs AR for old sheds, small outbuildings, playsets, fence sections, small structures, teardown debris, and hauling around Lake Hamilton, Royal, Pearcy, and nearby areas.",
    ogTitle: "Hot Springs Shed Removal & Light Demo Cleanup | Red Dirt",
    ogDescription:
      "Old shed removal, small structure teardown, outbuilding cleanup, fence removal, playset removal, debris hauling, and light demo cleanup around Hot Springs.",
    heroImage: "/images/work-2.jpg",
    heroAlt: "Shed removal and light demolition cleanup around Hot Springs Arkansas",
    eyebrow: "Hot Springs Shed Removal • Light Demo • Hauling",
    h1: "Shed Removal Around Hot Springs For Old Structures That Need To Go.",
    intro:
      "Red Dirt can look at old sheds, small outbuildings, playsets, fence sections, damaged small structures, and demo debris around Hot Springs when the work fits our equipment, access, and safety limits.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get A Shed Removal Quote",
    overviewEyebrow: "Shed And Small Structure Removal",
    overviewTitle: "Old sheds can be simple, or they can be full of surprises.",
    overviewText: [
      "A small empty shed beside the driveway is not the same as an old outbuilding full of junk, shingles, wire, rotten flooring, or hidden debris. That is why shed removal gets quoted after photos and details.",
      "Around Hot Springs, shed removal often comes with hauling, cleanout work, brush cleanup, or light demolition debris that has to be handled after the structure is down.",
      "We focus on light demolition and small structures, not full house demolition. If a structure looks unsafe or too large, we will be upfront about whether it is a fit."
    ],
    cards: [
      "Old shed removal",
      "Small outbuilding cleanup",
      "Playset removal",
      "Fence section removal",
      "Demo debris hauling",
      "Cleanout work before teardown"
    ],
    detailImage: "/images/dump.jpg",
    detailAlt: "Dump trailer for shed removal debris around Hot Springs Arkansas",
    detailEyebrow: "Safety And Access",
    detailTitle: "We need to see the shed before we price the tear-down.",
    detailText: [
      "Send photos from all sides, inside if possible, and the path from the shed to where a trailer can park. Access changes the labor more than most people expect.",
      "Tell us if the shed has power, glass, shingles, heavy contents, rotten flooring, animals, or anything hazardous. That helps avoid surprises after we arrive.",
      "If the shed is part of a bigger Hot Springs property cleanup, we can quote the teardown and haul-off along with junk, brush, or cleanout work."
    ],
    areaTitle: "Shed removal around Hot Springs, Lake Hamilton, Royal, Pearcy, Bismarck, Mountain Pine, and nearby properties.",
    areaText:
      "Red Dirt can quote Hot Springs shed removal, old outbuilding cleanup, light demolition debris, fence removal, playset removal, and hauling when the job fits safely.",
    schemaName: "Shed Removal Services in Hot Springs AR",
    schemaDescription:
      "Shed removal, small outbuilding removal, playset removal, fence removal, light demolition cleanup, teardown debris, and hauling around Hot Springs, Arkansas.",
    areaServed: ["Hot Springs AR", "Lake Hamilton AR", "Royal AR", "Pearcy AR", "Bismarck AR", "Mountain Pine AR"],
    serviceType: ["Shed removal", "Light demolition", "Small structure removal", "Outbuilding removal", "Debris hauling", "Fence removal", "Playset removal"],
    related: [
      { label: "Hot Springs Cleanouts", href: "/hot-springs-cleanouts", text: "Cleanout help before or after old shed and outbuilding removal." },
      { label: "Hot Springs Junk Removal", href: "/hot-springs-junk-removal", text: "Old junk, furniture, appliances, debris piles, and haul-off work." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Wider cleanup for brush, junk, debris, rough yards, and property messes." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      serviceLinks.find((item) => item.href === "/shed-removal")!,
      serviceLinks.find((item) => item.href === "/light-demolition")!,
    ],
  },

  "hot-springs-storm-cleanup": {
    slug: "hot-springs-storm-cleanup",
    title: "Storm Cleanup in Hot Springs AR | Limbs, Brush & Debris Hauling",
    description:
      "Storm cleanup in Hot Springs AR for downed limbs, brush piles, yard debris, scattered storm mess, small tree cleanup, and hauling after Arkansas weather around Lake Hamilton, Royal, Pearcy, and nearby areas.",
    ogTitle: "Hot Springs Storm Cleanup & Debris Hauling | Red Dirt",
    ogDescription:
      "Storm cleanup around Hot Springs for downed limbs, brush piles, small tree cleanup, yard debris, scattered mess, and hauling after rough weather.",
    heroImage: "/images/work-3.jpg",
    heroAlt: "Storm cleanup and limb hauling around Hot Springs Arkansas",
    eyebrow: "Hot Springs Storm Cleanup • Limbs • Brush • Debris",
    h1: "Storm Cleanup Around Hot Springs After The Weather Leaves A Mess Behind.",
    intro:
      "Red Dirt helps Hot Springs area property owners clean up downed limbs, brush piles, scattered debris, small tree mess, and storm cleanup jobs that need loaded, cut up, hauled, or moved out of the way.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get A Storm Cleanup Quote",
    overviewEyebrow: "After-Storm Cleanup",
    overviewTitle: "When the storm is over, the cleanup still has to happen.",
    overviewText: [
      "Storm cleanup around Hot Springs can mean limbs across a yard, brush stacked by the driveway, debris scattered around a rental, or a mess near cabins, lake places, and rural properties outside town.",
      "We can look at small tree cleanup, limb loading, brush hauling, debris pickup, and cleanup work when it is safe and fits our equipment.",
      "We avoid dangerous removals around power lines, houses, overhead hazards, or situations that need a specialized tree crew. If it is not a fit, we will say so."
    ],
    cards: [
      "Downed limb cleanup",
      "Brush pile hauling",
      "Yard debris removal",
      "Small tree cleanup",
      "Storm debris hauling",
      "Property cleanup after weather"
    ],
    detailImage: "/images/work-4.jpg",
    detailAlt: "Brush and storm debris cleanup near Hot Springs Arkansas",
    detailEyebrow: "What We Need To Know",
    detailTitle: "Safety comes first on storm jobs.",
    detailText: [
      "Send photos that show the limbs, where they fell, and what is around them. We need to see nearby structures, fences, wires, driveways, vehicles, and access for the trailer.",
      "If anything is on a roof, against a house, tangled in a power line, or still under tension, say that clearly. Some jobs need a tree specialist before cleanup can happen safely.",
      "For safe jobs, we can quote cutting, dragging, loading, hauling, and cleanup based on the amount of debris and how easy it is to reach."
    ],
    areaTitle: "Storm cleanup around Hot Springs, Lake Hamilton, Royal, Pearcy, Mountain Pine, Bismarck, and nearby Arkansas properties.",
    areaText:
      "Red Dirt can quote Hot Springs storm cleanup, limb cleanup, brush pile hauling, yard debris removal, small tree cleanup, and storm debris hauling when the work is safe and fits.",
    schemaName: "Storm Cleanup Services in Hot Springs AR",
    schemaDescription:
      "Storm cleanup, downed limb cleanup, brush pile hauling, yard debris removal, small tree cleanup, and storm debris hauling around Hot Springs, Arkansas.",
    areaServed: ["Hot Springs AR", "Lake Hamilton AR", "Royal AR", "Pearcy AR", "Mountain Pine AR", "Bismarck AR"],
    serviceType: ["Storm cleanup", "Limb cleanup", "Brush hauling", "Yard debris removal", "Small tree cleanup", "Storm debris hauling"],
    related: [
      { label: "Hot Springs Tree Work", href: "/tree-work", text: "Small tree work, limb cleanup, brush removal, and light clearing when the job fits." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Larger cleanup help for brush, debris, junk, and rough property areas." },
      { label: "Hot Springs Brush Hogging", href: "/hot-springs-brush-hogging", text: "Brush cutting, rough mowing, field edges, and overgrown areas after cleanup." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/mountain-pine-ar")!,
      serviceLinks.find((item) => item.href === "/storm-cleanup")!,
    ],
  },

  "hot-springs-dirt-work": {
    slug: "hot-springs-dirt-work",
    title: "Dirt Work in Hot Springs AR | Driveways, Ditches, Culverts & Washouts",
    description:
      "Small dirt work in Hot Springs AR for driveway touch-ups, washouts, drainage ditches, culvert help, rough grading, gravel areas, and rural property access around Lake Hamilton, Royal, Pearcy, and Bismarck.",
    ogTitle: "Hot Springs Dirt Work, Driveway Work & Drainage Help | Red Dirt",
    ogDescription:
      "Small dirt work around Hot Springs for driveways, washouts, ditches, culverts, drainage issues, rough grading, and rural property access.",
    heroImage: "/images/equipment-1.jpg",
    heroAlt: "Equipment for small dirt work around Hot Springs Arkansas",
    eyebrow: "Hot Springs Dirt Work • Driveways • Ditches • Culverts",
    h1: "Small Dirt Work Around Hot Springs For Driveways, Ditches, Culverts, And Washouts.",
    intro:
      "Red Dirt can look at small dirt work around Hot Springs including driveway touch-ups, drainage ditches, culvert help, washouts, rough grading, gravel areas, and property access issues when the job fits our equipment.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get A Dirt Work Quote",
    overviewEyebrow: "Small Dirt Work",
    overviewTitle: "Dirt work needs looked at with the property, slope, and water in mind.",
    overviewText: [
      "Hot Springs area properties can have steep drives, washed-out spots, drainage issues, ditches that need cleaned up, culverts that need attention, or rough areas that need shaped enough to use again.",
      "We are not trying to be a heavy civil crew. We focus on smaller property-level dirt work, driveway help, drainage fixes, culvert-related work, and rough grading when it fits the equipment and access.",
      "Photos are helpful, but water and slope are hard to judge from one picture. Bigger or more complicated dirt work may need an in-person look before a firm quote."
    ],
    cards: [
      "Driveway touch-ups",
      "Washout repair help",
      "Drainage ditches",
      "Culvert help",
      "Rough grading",
      "Gravel and access areas"
    ],
    detailImage: "/images/tractor-pov.jpg",
    detailAlt: "Tractor and property access work near Hot Springs Arkansas",
    detailEyebrow: "Quote Details",
    detailTitle: "Tell us what the water is doing, not just where the dirt is.",
    detailText: [
      "For ditches, culverts, and washouts, the quote depends on what caused the issue, where water needs to go, what material is there now, and how equipment can reach it.",
      "For driveway work, include photos from the road looking in, from the top or bottom of the problem area, and close-ups of ruts, holes, gravel, or washout spots.",
      "If the job also needs brush cleared, junk hauled, or limbs moved before dirt work can happen, we can look at those pieces together."
    ],
    areaTitle: "Dirt work around Hot Springs, Royal, Pearcy, Bismarck, Lake Hamilton, Mountain Pine, and nearby rural properties.",
    areaText:
      "Red Dirt can quote Hot Springs driveway work, drainage help, ditches, culverts, washouts, rough grading, and small dirt work when the access and scope fit.",
    schemaName: "Dirt Work Services in Hot Springs AR",
    schemaDescription:
      "Small dirt work, driveway work, drainage help, ditches, culverts, washouts, rough grading, gravel areas, and property access help around Hot Springs, Arkansas.",
    areaServed: ["Hot Springs AR", "Royal AR", "Pearcy AR", "Bismarck AR", "Lake Hamilton AR", "Mountain Pine AR"],
    serviceType: ["Dirt work", "Driveway work", "Drainage ditches", "Culvert help", "Washout repair", "Rough grading", "Gravel work"],
    related: [
      { label: "Hot Springs Brush Hogging", href: "/hot-springs-brush-hogging", text: "Brush cutting and rough mowing when a dirt work area needs opened up first." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Cleanup work for debris, junk, brush, and rough areas around the property." },
      { label: "Hot Springs Stump Grinding", href: "/hot-springs-stump-grinding", text: "Stump grinding when stumps are in the way of mowing, cleanup, or access." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/pearcy-ar")!,
      serviceLinks.find((item) => item.href === "/dirt-work")!,
    ],
  },

  "hot-springs-stump-grinding": {
    slug: "hot-springs-stump-grinding",
    title: "Stump Grinding in Hot Springs AR | Yard, Driveway & Cleanup Areas",
    description:
      "Stump grinding in Hot Springs AR for yards, driveway edges, fence lines, lake places, cleanup areas, rental properties, and rural properties around Lake Hamilton, Royal, Pearcy, and nearby areas.",
    ogTitle: "Hot Springs Stump Grinding | Red Dirt Property Services",
    ogDescription:
      "Stump grinding around Hot Springs for yards, driveway edges, fence lines, rental properties, lake places, cleanup areas, and rural properties.",
    heroImage: "/images/work-4.jpg",
    heroAlt: "Stump grinding and yard cleanup around Hot Springs Arkansas",
    eyebrow: "Hot Springs Stump Grinding • Yards • Fence Lines • Cleanup Areas",
    h1: "Stump Grinding Around Hot Springs When A Stump Is In The Way.",
    intro:
      "Red Dirt can quote stump grinding around Hot Springs for yards, fence lines, driveway edges, lake properties, rental properties, and cleanup areas when the stump, access, and surrounding ground are a fit.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get A Stump Grinding Quote",
    overviewEyebrow: "Stumps And Access",
    overviewTitle: "Stump grinding depends on more than the stump size.",
    overviewText: [
      "A stump in an open yard is different than one against a fence, near rocks, on a slope, beside a driveway, or surrounded by roots and debris. Access around Hot Springs properties can change the job quickly.",
      "We quote stump grinding by size, location, access, cleanup expectations, and what is around the stump. Photos from several angles help more than one close-up picture.",
      "If the stump is part of a bigger cleanup, brush job, or storm cleanup, we can look at it with the rest of the property work."
    ],
    cards: [
      "Yard stump grinding",
      "Driveway edge stumps",
      "Fence-line stumps",
      "Lake property stumps",
      "Rental property cleanup",
      "Storm cleanup stumps"
    ],
    detailImage: "/images/work-1.jpg",
    detailAlt: "Property cleanup area with stump and debris around Hot Springs Arkansas",
    detailEyebrow: "What To Send",
    detailTitle: "Measure the stump if you can, then show the area around it.",
    detailText: [
      "A tape measure across the widest part of the stump helps. Photos should also show the path to the stump, fences, rocks, roots, structures, slopes, and anything else nearby.",
      "Tell us whether you want chips left in place, spread out, or cleaned up as part of the job. Cleanup affects labor and price.",
      "If the property is outside Hot Springs, include the nearest town or area so travel can be figured into the quote."
    ],
    areaTitle: "Stump grinding around Hot Springs, Lake Hamilton, Royal, Pearcy, Bismarck, Mountain Pine, and nearby properties.",
    areaText:
      "Red Dirt can quote Hot Springs stump grinding for yards, driveways, fence lines, lake properties, cleanup areas, storm cleanup jobs, and rural properties when access fits.",
    schemaName: "Stump Grinding Services in Hot Springs AR",
    schemaDescription:
      "Stump grinding for yards, driveways, fence lines, lake properties, rental properties, cleanup areas, storm cleanup work, and rural properties around Hot Springs, Arkansas.",
    areaServed: ["Hot Springs AR", "Lake Hamilton AR", "Royal AR", "Pearcy AR", "Bismarck AR", "Mountain Pine AR"],
    serviceType: ["Stump grinding", "Yard stump grinding", "Fence-line stump grinding", "Driveway edge stump grinding", "Cleanup area stump grinding"],
    related: [
      { label: "Hot Springs Tree Work", href: "/tree-work", text: "Small tree work, limb cleanup, brush removal, and light clearing when the job fits." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Cleanup help for rough yards, brush, debris, junk, and property messes." },
      { label: "Hot Springs Dirt Work", href: "/hot-springs-dirt-work", text: "Driveway touch-ups, rough grading, ditches, culverts, and washout help." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/lake-hamilton-ar")!,
      serviceLinks.find((item) => item.href === "/stump-grinding")!,
    ],
  },

};

export const locationPages: Record<string, LocationPageData> = {
  "amity-ar": {
    slug: "amity-ar",
    title: "Property Cleanup, Junk Removal & Brush Hogging in Amity AR",
    description:
      "Red Dirt Property Services is local to the Amity, Arkansas area and handles property cleanup, junk removal, hauling, bush hogging, cleanouts, storm cleanup, and light demolition for nearby rural properties.",
    ogTitle: "Property Cleanup & Brush Hogging in Amity AR | Red Dirt",
    ogDescription:
      "Local Amity property cleanup, junk removal, hauling, bush hogging, cleanouts, storm cleanup, and light demolition from Red Dirt Property Services.",
    heroImage: "/images/hero.jpg",
    heroAlt: "Red Dirt Property Services work around Amity Arkansas",
    eyebrow: "Amity AR • Local Crew • Rural Property Work",
    h1: "Property Cleanup And Hauling Help Right Here Around Amity.",
    intro:
      "Red Dirt is based around the Amity and Glenwood area, so Amity jobs are right in our home territory. If you have brush getting out of hand, junk that needs hauled, a shed that needs to come down, or a rural place that needs cleaned up, you are not calling some far-off franchise.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get an Amity Quote",
    overviewEyebrow: "Local To Amity",
    overviewTitle: "Country properties need practical help, not a fancy runaround.",
    overviewText: [
      "Around Amity, cleanup jobs are not always sitting neatly by a curb. They might be behind a shop, out by a fence line, down a rough driveway, in an old shed, or scattered around a piece of land that has not been touched in a while.",
      "We help with the real stuff: property cleanup, junk hauling, bush hogging, cleanouts, storm debris, shed removal, and light demolition jobs that fit our truck, trailers, tools, and equipment.",
      "Because Amity is home ground, it is one of the easiest places for us to look at photos, quote fairly, and get something on the schedule."
    ],
    cards: [
      "Brush hogging and rough mowing",
      "Junk removal and hauling",
      "Rental and garage cleanouts",
      "Shed and fence removal",
      "Storm debris cleanup",
      "Rural property cleanup"
    ],
    detailImage: "/images/truck-trailers.jpg",
    detailAlt: "Truck and trailers for Amity Arkansas cleanup and hauling",
    detailEyebrow: "How To Start",
    detailTitle: "Send photos, the Amity location, and what needs gone.",
    detailText: [
      "Photos help us see load size, access, brush thickness, material type, and whether the job is hauling, cutting, demo, or a mix of all three.",
      "If it is simple, we can usually get close from pictures. If it is bigger or hard to judge, we may need to come lay eyes on it before giving a firm price.",
      "Either way, you will get a straight answer from local people who understand the area."
    ],
    localTitle: "Serving Amity, Glenwood, Alpine, Rosboro, Kirby, and nearby rural properties.",
    localText:
      "Red Dirt handles local property work around Amity and nearby communities, including brush, junk, cleanouts, storm debris, and small demolition cleanup.",
    schemaName: "Property Cleanup Services in Amity AR",
    schemaDescription:
      "Property cleanup, junk removal, hauling, bush hogging, cleanouts, storm cleanup, and light demolition around Amity, Arkansas.",
    areaServed: ["Amity AR", "Glenwood AR", "Alpine AR", "Rosboro AR", "Kirby AR"],
    serviceType: ["Property cleanup", "Junk removal", "Bush hogging", "Hauling", "Cleanouts", "Light demolition", "Dirt work", "Tree work", "Stump grinding"],
    related: [
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      serviceLinks.find((item) => item.href === "/junk-removal")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/kirby-ar")!,
      areaLinks.find((item) => item.href === "/norman-ar")!,
    ],
  },

  "mount-ida-ar": {
    slug: "mount-ida-ar",
    title: "Property Cleanup, Brush Hogging & Hauling in Mount Ida AR",
    description:
      "Property cleanup, cabin cleanouts, brush hogging, junk removal, hauling, storm cleanup, and light demolition around Mount Ida, Lake Ouachita, Norman, Story, and nearby rural Arkansas properties.",
    ogTitle: "Property Cleanup & Brush Hogging in Mount Ida AR | Red Dirt",
    ogDescription:
      "Rural property cleanup, cabin cleanouts, brush hogging, junk hauling, and storm cleanup around Mount Ida and Lake Ouachita area properties.",
    heroImage: "/images/tractor-pov.jpg",
    heroAlt: "Brush hogging and rural cleanup work near Mount Ida Arkansas",
    eyebrow: "Mount Ida • Lake Area • Rural Cleanup",
    h1: "Mount Ida Property Cleanup For Cabins, Land, And Country Places.",
    intro:
      "Mount Ida area properties can be beautiful and still come with plenty of cleanup work. Cabins, lake-area places, hunting land, driveways, trails, and older properties all need help when brush, junk, limbs, and debris start piling up.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Mount Ida Quote",
    overviewEyebrow: "Mount Ida Area Work",
    overviewTitle: "Cleanup help for landowners, cabin owners, and rural properties.",
    overviewText: [
      "The Mount Ida and Lake Ouachita area has a mix of cabins, family land, weekend places, and rural homes where cleanup jobs can sit longer than they should because they are out of the way or too much for one person.",
      "We handle property cleanup, brush hogging, junk removal, cleanouts, storm debris, and light demolition when the job fits our crew and equipment.",
      "Send photos and the nearest town or road area so we can factor in travel, access, and disposal before giving you a quote."
    ],
    cards: [
      "Cabin and rental cleanouts",
      "Brush hogging and trail cleanup",
      "Junk removal and hauling",
      "Storm limb cleanup",
      "Shed and small demo cleanup",
      "Rural property cleanup"
    ],
    detailImage: "/images/work-2.jpg",
    detailAlt: "Property cleanup and hauling for Mount Ida Arkansas properties",
    detailEyebrow: "Lake And Rural Access",
    detailTitle: "Access matters on Mount Ida area jobs.",
    detailText: [
      "Some jobs are easy driveway access. Others are down a rough road, behind a cabin, across a sloped yard, or mixed into brush where a trailer cannot get close.",
      "That changes the labor and the quote, so photos from the road, driveway, and work area help us price the job without guessing too low or too high.",
      "If you are cleaning up a cabin, getting land ready to use, or trying to clear a place before guests or family show up, we can take a look."
    ],
    localTitle: "Serving Mount Ida, Norman, Story, Lake Ouachita area properties, and nearby rural communities.",
    localText:
      "Red Dirt quotes Mount Ida area jobs with travel and access in mind, especially cabin cleanouts, brush work, storm cleanup, and rural hauling jobs.",
    schemaName: "Property Cleanup Services in Mount Ida AR",
    schemaDescription:
      "Property cleanup, cabin cleanouts, brush hogging, junk removal, hauling, storm cleanup, and light demolition around Mount Ida, Arkansas.",
    areaServed: ["Mount Ida AR", "Norman AR", "Story AR", "Lake Ouachita AR", "Oden AR"],
    serviceType: ["Property cleanup", "Cabin cleanouts", "Brush hogging", "Junk removal", "Hauling", "Storm cleanup", "Dirt work", "Tree work", "Stump grinding"],
    related: [
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      serviceLinks.find((item) => item.href === "/cleanouts")!,
      areaLinks.find((item) => item.href === "/norman-ar")!,
      areaLinks.find((item) => item.href === "/amity-ar")!,
      areaLinks.find((item) => item.href === "/murfreesboro-ar")!,
    ],
  },

  "kirby-ar": {
    slug: "kirby-ar",
    title: "Brush Hogging, Property Cleanup & Hauling in Kirby AR",
    description:
      "Brush hogging, bush hogging, property cleanup, junk hauling, cleanouts, storm cleanup, and light demolition around Kirby, Daisy, Amity, Glenwood, and nearby rural Arkansas properties.",
    ogTitle: "Brush Hogging & Property Cleanup in Kirby AR | Red Dirt",
    ogDescription:
      "Local brush hogging, hauling, cleanouts, junk removal, and rural property cleanup around Kirby and nearby Lake Greeson area properties.",
    heroImage: "/images/tractor-bush-hog.jpg",
    heroAlt: "Brush hogging service around Kirby Arkansas rural property",
    eyebrow: "Kirby • Daisy • Rural Property Work",
    h1: "Brush Hogging And Cleanup Help Around Kirby.",
    intro:
      "Kirby area properties are exactly the kind of work Red Dirt was built around. Brush gets tall, trails close in, junk piles get ignored, and lake or hunting places need cleaned up before they can be used the way they should.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Kirby Quote",
    overviewEyebrow: "Kirby Area Cleanup",
    overviewTitle: "Rural jobs need a crew that understands rural access.",
    overviewText: [
      "Around Kirby and Daisy, cleanup work might be on a driveway, behind a cabin, around a shop, along a fence line, or down a path a normal service company does not want to fool with.",
      "We help with bush hogging, brush cutting, junk removal, property cleanup, cleanouts, hauling, storm debris, and light demo cleanup.",
      "If the job is rough, send the best photos you can. We will tell you whether we can quote from pictures or need to see the property first."
    ],
    cards: [
      "Bush hogging and rough mowing",
      "Lake place cleanup",
      "Junk and debris hauling",
      "Fence-line brush cleanup",
      "Shed removal and light demo",
      "Cabin and outbuilding cleanouts"
    ],
    detailImage: "/images/work-3.jpg",
    detailAlt: "Rural cleanup and brush work around Kirby Arkansas",
    detailEyebrow: "For Land And Lake Places",
    detailTitle: "Keep the place usable before it gets out of hand.",
    detailText: [
      "A little overgrowth turns into a mess fast in Arkansas. Fence lines, trails, open areas, and old piles can become harder and more expensive the longer they sit.",
      "We are a good fit for property owners who need practical cleanup, not a full land-clearing contractor or a national junk company that does not understand rural work.",
      "Tell us what you are trying to get done and where the property sits near Kirby, Daisy, or Glenwood."
    ],
    localTitle: "Serving Kirby, Daisy, Amity, Glenwood, and nearby Lake Greeson area properties.",
    localText:
      "Red Dirt can quote Kirby area work for brush, hauling, junk removal, cleanouts, storm cleanup, and small demolition cleanup.",
    schemaName: "Property Cleanup Services in Kirby AR",
    schemaDescription:
      "Brush hogging, property cleanup, junk removal, hauling, cleanouts, storm cleanup, and light demolition around Kirby, Arkansas.",
    areaServed: ["Kirby AR", "Daisy AR", "Amity AR", "Glenwood AR", "Murfreesboro AR"],
    serviceType: ["Brush hogging", "Property cleanup", "Junk removal", "Hauling", "Cleanouts", "Light demolition", "Dirt work", "Tree work", "Stump grinding"],
    related: [
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/shed-removal")!,
      areaLinks.find((item) => item.href === "/amity-ar")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/murfreesboro-ar")!,
    ],
  },

  "norman-ar": {
    slug: "norman-ar",
    title: "Property Cleanup, Cleanouts & Brush Hogging in Norman AR",
    description:
      "Property cleanup, cabin cleanouts, brush hogging, junk removal, hauling, storm cleanup, and light demolition around Norman, Caddo Gap, Mount Ida, Glenwood, and nearby rural Arkansas properties.",
    ogTitle: "Property Cleanup & Cleanouts in Norman AR | Red Dirt",
    ogDescription:
      "Rural cleanup, cabin cleanouts, brush cutting, hauling, junk removal, and storm cleanup around Norman and nearby Arkansas properties.",
    heroImage: "/images/truck-2.png",
    heroAlt: "Truck for property cleanup and hauling around Norman Arkansas",
    eyebrow: "Norman • Caddo River Area • Rural Cleanup",
    h1: "Cleanup And Hauling Help For Norman Area Properties.",
    intro:
      "Norman area jobs often involve cabins, family land, river places, old sheds, rough driveways, brush, and cleanouts that need more than a quick trash run. Red Dirt helps get the heavy, awkward, and messy work handled.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Norman Quote",
    overviewEyebrow: "Norman Area Work",
    overviewTitle: "For cabins, river places, family land, and rural homes.",
    overviewText: [
      "A place around Norman can need cleanup for a lot of reasons: getting ready for guests, clearing an old pile, cleaning out a cabin, knocking brush back, or dealing with storm limbs and debris.",
      "We handle practical property cleanup, junk hauling, cleanouts, bush hogging, light demolition cleanup, and storm debris when the job fits our setup.",
      "Because rural access can change everything, photos and location details help us quote honestly from the start."
    ],
    cards: [
      "Cabin and river-place cleanouts",
      "Junk hauling and debris removal",
      "Brush hogging and rough mowing",
      "Storm limb cleanup",
      "Shed and fence debris",
      "Rural property cleanup"
    ],
    detailImage: "/images/flatbed.jpg",
    detailAlt: "Flatbed trailer for Norman Arkansas cleanouts and hauling",
    detailEyebrow: "What Helps The Quote",
    detailTitle: "Show us the pile, the access, and the nearest town.",
    detailText: [
      "A job near Norman might be simple, or it might involve a rough drive, limited turnaround space, steep access, or debris spread around a property.",
      "Send pictures of the work itself and the access if you can. That lets us think through trailer placement, labor, travel, and disposal before giving you a number.",
      "We would rather quote it right than surprise you later."
    ],
    localTitle: "Serving Norman, Caddo Gap, Mount Ida, Glenwood, and nearby river-area properties.",
    localText:
      "Red Dirt quotes Norman area cleanup, hauling, cleanouts, bush hogging, storm cleanup, and light demo based on photos, access, and travel.",
    schemaName: "Property Cleanup Services in Norman AR",
    schemaDescription:
      "Property cleanup, cabin cleanouts, brush hogging, junk removal, hauling, storm cleanup, and light demolition around Norman, Arkansas.",
    areaServed: ["Norman AR", "Caddo Gap AR", "Mount Ida AR", "Glenwood AR", "Black Springs AR"],
    serviceType: ["Property cleanup", "Cleanouts", "Brush hogging", "Junk removal", "Hauling", "Storm cleanup", "Dirt work", "Tree work", "Stump grinding"],
    related: [
      serviceLinks.find((item) => item.href === "/cleanouts")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/storm-cleanup")!,
      areaLinks.find((item) => item.href === "/mount-ida-ar")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/amity-ar")!,
    ],
  },

  "mountain-pine-ar": {
    slug: "mountain-pine-ar",
    title: "Property Cleanup & Junk Hauling in Mountain Pine AR",
    description:
      "Property cleanup, junk hauling, brush cleanup, cleanouts, storm debris cleanup, and light demolition around Mountain Pine, Hot Springs, Lake Ouachita area, and nearby Arkansas properties.",
    ogTitle: "Property Cleanup in Mountain Pine AR | Red Dirt",
    ogDescription:
      "Local cleanup help for brush, junk, debris, cleanouts, storm mess, and rural property work around Mountain Pine and Hot Springs.",
    heroImage: "/beforeafter/after-1.jpeg",
    heroAlt: "Opened up yard space after property cleanup around Mountain Pine Arkansas",
    eyebrow: "Mountain Pine • Property Cleanup • Hauling",
    h1: "Mountain Pine Property Cleanup For Brush, Junk, And Rough Spots.",
    intro:
      "Red Dirt has handled cleanup work out around Mountain Pine, and it is the kind of area where brush, storm mess, old junk, and neglected corners can build up quick. We help homeowners and property owners get those places opened back up and usable again.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Mountain Pine Quote",
    overviewEyebrow: "Mountain Pine Cleanup",
    overviewTitle: "A cleanup job does not need to sit there all season.",
    overviewText: [
      "Mountain Pine properties can be tucked into woods, older neighborhoods, rural roads, and lake-area spots where cleanup is not always simple. Brush grows fast, junk piles get hidden, and storm debris can turn into a bigger job after every rain.",
      "We can quote property cleanup, junk hauling, brush cleanup, cleanouts, storm debris, and small demolition cleanup depending on the job and access.",
      "If you already have photos, that is the best place to start. Send the pictures, tell us the location, and we will look it over."
    ],
    cards: [
      "Brush and overgrowth cleanup",
      "Junk removal and hauling",
      "Storm debris cleanup",
      "Yard and lot cleanup",
      "Shed and fence debris",
      "Rental and property cleanouts"
    ],
    detailImage: "/beforeafter/before-1.jpeg",
    detailAlt: "Overgrown property before cleanup near Mountain Pine Arkansas",
    detailEyebrow: "Before It Gets Worse",
    detailTitle: "Brush and junk are easier to handle before they spread.",
    detailText: [
      "Once brush and debris start taking over a yard edge, fence line, or side access, it can get harder to mow, walk, or work around the property.",
      "We focus on practical cleanup: cutting back what needs cut, loading what needs hauled, and leaving the area better than when we got there.",
      "Mountain Pine jobs are quoted by load size, labor, disposal, travel, and whether the work is cleanup, hauling, brush cutting, or a mix."
    ],
    localTitle: "Serving Mountain Pine, Hot Springs, Lake Ouachita area properties, and nearby rural places.",
    localText:
      "Red Dirt can quote Mountain Pine cleanup work from photos and location details, especially brush cleanup, haul-offs, storm debris, and rural property jobs.",
    schemaName: "Property Cleanup Services in Mountain Pine AR",
    schemaDescription:
      "Property cleanup, junk hauling, brush cleanup, cleanouts, storm debris cleanup, and light demolition around Mountain Pine, Arkansas.",
    areaServed: ["Mountain Pine AR", "Hot Springs AR", "Lake Ouachita AR", "Royal AR", "Pearcy AR"],
    serviceType: ["Property cleanup", "Junk hauling", "Brush cleanup", "Cleanouts", "Storm cleanup", "Light demolition", "Dirt work", "Tree work", "Stump grinding"],
    related: [
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/junk-removal")!,
      serviceLinks.find((item) => item.href === "/storm-cleanup")!,
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/mount-ida-ar")!,
      areaLinks.find((item) => item.href === "/malvern-ar")!,
    ],
  },

  "malvern-ar": {
    slug: "malvern-ar",
    title: "Junk Removal, Cleanouts & Property Cleanup in Malvern AR",
    description:
      "Junk removal, property cleanouts, hauling, storm cleanup, brush cleanup, shed removal, and light demolition around Malvern, Rockport, Donaldson, Hot Spring County, and nearby Arkansas communities.",
    ogTitle: "Junk Removal & Property Cleanup in Malvern AR | Red Dirt",
    ogDescription:
      "Local junk removal, cleanouts, hauling, storm cleanup, brush cleanup, shed removal, and property cleanup around Malvern and Hot Spring County.",
    heroImage: "/images/dump.jpg",
    heroAlt: "Cleanup and debris hauling for Malvern Arkansas properties",
    eyebrow: "Malvern • Hot Spring County • Hauling",
    h1: "Malvern Cleanouts, Junk Hauling, And Property Cleanup Help.",
    intro:
      "Malvern area jobs can range from a simple haul-off to a rental cleanout, storm debris pile, shed removal, or rough property cleanup. Red Dirt quotes the work by what needs loaded, hauled, cut, removed, and disposed of.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Malvern Quote",
    overviewEyebrow: "Malvern Area Jobs",
    overviewTitle: "Cleanouts and hauling for homes, rentals, shops, and rural spots.",
    overviewText: [
      "Some cleanup jobs around Malvern are in town. Others are outside city limits, down rural roads, or on properties where access and disposal matter just as much as the pile itself.",
      "We help with junk removal, property cleanup, rental cleanouts, garage cleanouts, storm debris, brush cleanup, shed removal, and light demolition cleanup.",
      "Send photos, tell us whether the material is inside, outside, upstairs, in a shed, or spread across the property, and we can quote from there."
    ],
    cards: [
      "Rental cleanouts",
      "Garage and shop junk",
      "Appliance and furniture hauling",
      "Storm debris cleanup",
      "Shed removal",
      "Brush and property cleanup"
    ],
    detailImage: "/images/truck-1.png",
    detailAlt: "Truck and hauling setup for Malvern Arkansas cleanup jobs",
    detailEyebrow: "Fair Quotes",
    detailTitle: "A haul-off in Malvern is quoted by the actual load and labor.",
    detailText: [
      "A light pile by the driveway is not the same as a full property cleanout or demo debris that has to be carried out piece by piece.",
      "We factor in dump fees, weight, labor, access, travel, and how many trailer loads the job may take.",
      "That keeps the price tied to the work instead of a generic number that does not match the job."
    ],
    localTitle: "Serving Malvern, Rockport, Donaldson, Hot Springs, Bismarck, and nearby Hot Spring County properties.",
    localText:
      "Red Dirt quotes Malvern area cleanouts, hauling, junk removal, storm cleanup, and light demolition jobs when the scope and travel make sense.",
    schemaName: "Property Cleanup Services in Malvern AR",
    schemaDescription:
      "Junk removal, cleanouts, hauling, property cleanup, storm cleanup, shed removal, and light demolition around Malvern, Arkansas.",
    areaServed: ["Malvern AR", "Rockport AR", "Donaldson AR", "Bismarck AR", "Hot Springs AR"],
    serviceType: ["Junk removal", "Cleanouts", "Hauling", "Property cleanup", "Storm cleanup", "Shed removal", "Dirt work", "Tree work", "Stump grinding"],
    related: [
      serviceLinks.find((item) => item.href === "/junk-removal")!,
      serviceLinks.find((item) => item.href === "/cleanouts")!,
      serviceLinks.find((item) => item.href === "/shed-removal")!,
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/arkadelphia-ar")!,
      areaLinks.find((item) => item.href === "/mountain-pine-ar")!,
    ],
  },

  "murfreesboro-ar": {
    slug: "murfreesboro-ar",
    title: "Property Cleanup, Brush Hogging & Hauling in Murfreesboro AR",
    description:
      "Property cleanup, brush hogging, junk removal, hauling, cleanouts, storm cleanup, shed removal, and rural property work around Murfreesboro, Kirby, Daisy, Delight, and nearby Arkansas communities.",
    ogTitle: "Property Cleanup & Brush Hogging in Murfreesboro AR | Red Dirt",
    ogDescription:
      "Rural cleanup, brush hogging, hauling, junk removal, cleanouts, and shed removal around Murfreesboro and nearby Arkansas properties.",
    heroImage: "/images/work-4.jpg",
    heroAlt: "Rural property cleanup and brush work around Murfreesboro Arkansas",
    eyebrow: "Murfreesboro • Pike County • Rural Cleanup",
    h1: "Murfreesboro Area Cleanup For Land, Cabins, And Country Properties.",
    intro:
      "Murfreesboro area properties can need everything from brush hogging and storm cleanup to junk hauling, shed removal, and cleanouts. Red Dirt helps with the hands-on cleanup work that makes a place usable again.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Murfreesboro Quote",
    overviewEyebrow: "Murfreesboro Area Work",
    overviewTitle: "Practical cleanup for rural properties and weekend places.",
    overviewText: [
      "Around Murfreesboro, Daisy, and Kirby, a lot of properties have brush, old materials, outbuildings, or cleanup needs that do not fit a normal curbside service.",
      "We quote bush hogging, property cleanup, junk removal, cleanouts, storm debris, shed removal, and light demolition cleanup based on photos, access, and travel.",
      "If you are trying to open up land, clean out a place, or get rid of a pile that has been there too long, send us what you have."
    ],
    cards: [
      "Brush hogging and field edges",
      "Cabin and land cleanups",
      "Junk and debris hauling",
      "Garage and shed cleanouts",
      "Storm debris cleanup",
      "Light demo debris removal"
    ],
    detailImage: "/images/tractor-bush-hog.jpg",
    detailAlt: "Bush hogging and rough mowing for Murfreesboro Arkansas properties",
    detailEyebrow: "Rural Work",
    detailTitle: "The farther out the job is, the more details help.",
    detailText: [
      "Murfreesboro area work can make sense when the job has enough scope for the travel. Larger cleanouts, brush hogging, shed removal, or mixed cleanup projects are usually better fits than tiny one-item pickups far out of the way.",
      "Photos let us see whether the work is a trailer load, a cutting job, a cleanout, or something that needs looked at first.",
      "We keep the quote honest by factoring in distance, dump fees, labor, load size, and access."
    ],
    localTitle: "Serving Murfreesboro, Kirby, Daisy, Delight, Glenwood, and nearby Pike County properties.",
    localText:
      "Red Dirt can quote Murfreesboro area cleanup, brush hogging, cleanouts, junk hauling, storm debris, and shed removal when the job fits the route and scope.",
    schemaName: "Property Cleanup Services in Murfreesboro AR",
    schemaDescription:
      "Property cleanup, brush hogging, junk removal, hauling, cleanouts, storm cleanup, and shed removal around Murfreesboro, Arkansas.",
    areaServed: ["Murfreesboro AR", "Kirby AR", "Daisy AR", "Delight AR", "Glenwood AR"],
    serviceType: ["Property cleanup", "Brush hogging", "Junk removal", "Hauling", "Cleanouts", "Shed removal", "Dirt work", "Tree work", "Stump grinding"],
    related: [
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/shed-removal")!,
      areaLinks.find((item) => item.href === "/kirby-ar")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/mount-ida-ar")!,
    ],
  },

  "lake-hamilton-ar": {
    slug: "lake-hamilton-ar",
    title: "Property Cleanup, Junk Removal & Cleanouts in Lake Hamilton AR",
    description:
      "Property cleanup, junk removal, cabin cleanouts, lake house cleanouts, storm cleanup, brush cleanup, shed removal, hauling, and light demolition around Lake Hamilton and Hot Springs AR.",
    ogTitle: "Lake Hamilton Property Cleanup & Junk Removal | Red Dirt",
    ogDescription:
      "Lake-area cleanup, junk hauling, cabin cleanouts, storm cleanup, shed removal, brush cleanup, and property cleanup around Lake Hamilton and Hot Springs.",
    heroImage: "/images/dump.jpg",
    heroAlt: "Junk removal and property cleanup near Lake Hamilton Arkansas",
    eyebrow: "Lake Hamilton • Hot Springs • Lake-Area Cleanup",
    h1: "Lake Hamilton Cleanup Help For Cabins, Homes, Rentals, And Rough Property Messes.",
    intro:
      "Red Dirt helps around Lake Hamilton with junk removal, cabin cleanouts, lake house cleanouts, storm debris, brush cleanup, shed removal, hauling, and property cleanup that needs more than a trash pickup.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Lake Hamilton Quote",
    overviewEyebrow: "Lake-Area Property Work",
    overviewTitle: "Lake properties can collect a little bit of everything.",
    overviewText: [
      "Around Lake Hamilton, cleanup work can mean old furniture from a cabin, storm limbs near the water, junk under a deck, a shed that needs cleaned out, or rental debris after guests and projects pile up.",
      "We quote jobs by looking at photos, location, access, parking, load size, labor, and disposal needs. Lake-area access can matter just as much as the amount of junk.",
      "If the work is more than hauling, we can also look at property cleanup, shed removal, storm cleanup, and light demolition cleanup when the job fits."
    ],
    cards: [
      "Lake house junk removal",
      "Cabin and rental cleanouts",
      "Storm limb cleanup",
      "Shed and outbuilding cleanup",
      "Brush and yard debris",
      "Hauling and property cleanup"
    ],
    detailImage: "/images/flatbed.jpg",
    detailAlt: "Trailer used for Lake Hamilton cleanouts and hauling",
    detailEyebrow: "Access Matters",
    detailTitle: "Tell us how close the trailer can get.",
    detailText: [
      "Lake Hamilton properties can have narrow drives, steep access, decks, stairs, tight parking, and limited room to turn around. Those details affect labor and how the job gets scheduled.",
      "Photos should show the junk or debris and the path from the mess to the trailer. Wide photos usually help more than close-ups alone.",
      "For larger cleanouts or mixed cleanup projects, we may need to look at the property before giving a firm quote."
    ],
    localTitle: "Serving Lake Hamilton, Hot Springs, Royal, Pearcy, Mountain Pine, and nearby lake-area properties.",
    localText:
      "Red Dirt can quote Lake Hamilton junk removal, cabin cleanouts, lake house cleanup, storm cleanup, shed removal, hauling, and property cleanup when the work fits the route and access.",
    schemaName: "Property Cleanup Services in Lake Hamilton AR",
    schemaDescription:
      "Property cleanup, junk removal, cabin cleanouts, lake house cleanouts, storm cleanup, brush cleanup, shed removal, hauling, and light demolition cleanup around Lake Hamilton, Arkansas.",
    areaServed: ["Lake Hamilton AR", "Hot Springs AR", "Royal AR", "Pearcy AR", "Mountain Pine AR"],
    serviceType: ["Property cleanup", "Junk removal", "Cleanouts", "Cabin cleanouts", "Storm cleanup", "Shed removal", "Hauling"],
    related: [
      { label: "Hot Springs Junk Removal", href: "/hot-springs-junk-removal", text: "Furniture, appliances, rental junk, cabin junk, and haul-off work around Hot Springs." },
      { label: "Hot Springs Cleanouts", href: "/hot-springs-cleanouts", text: "Rental, estate, garage, cabin, shed, and outbuilding cleanouts around Hot Springs." },
      { label: "Hot Springs Storm Cleanup", href: "/hot-springs-storm-cleanup", text: "Downed limbs, brush piles, yard debris, and hauling after rough weather." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/royal-ar")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
    ],
  },

  "hot-springs-village-ar": {
    slug: "hot-springs-village-ar",
    title: "Property Cleanup, Junk Removal & Storm Cleanup in Hot Springs Village AR",
    description:
      "Property cleanup, junk removal, cleanouts, hauling, storm cleanup, brush cleanup, shed removal, stump grinding, and light demolition around Hot Springs Village and nearby Garland County areas.",
    ogTitle: "Hot Springs Village Cleanup, Junk Removal & Hauling | Red Dirt",
    ogDescription:
      "Junk removal, cleanouts, storm cleanup, brush cleanup, shed removal, hauling, and property cleanup around Hot Springs Village and nearby areas.",
    heroImage: "/images/work-3.jpg",
    heroAlt: "Storm cleanup and property cleanup around Hot Springs Village Arkansas",
    eyebrow: "Hot Springs Village • Garland County • Property Cleanup",
    h1: "Cleanup And Hauling Around Hot Springs Village When The Job Needs Hands-On Help.",
    intro:
      "Red Dirt can look at Hot Springs Village area jobs for junk removal, property cleanup, cleanouts, storm debris, brush cleanup, shed removal, stump grinding, and light demolition cleanup when the route, access, and scope make sense.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Village Quote",
    overviewEyebrow: "Hot Springs Village Cleanup Work",
    overviewTitle: "Homes, wooded lots, and storm debris can pile up quick.",
    overviewText: [
      "Hot Springs Village area properties can have wooded edges, fallen limbs, old items in garages, debris near sheds, and cleanup needs that are too much for normal trash service.",
      "We quote from photos first when possible and look at load size, labor, dump fees, travel, and access before giving a price.",
      "Some smaller jobs may need to be grouped with route timing, but larger cleanouts, storm cleanup, and mixed property cleanup are often worth looking at."
    ],
    cards: [
      "Storm debris cleanup",
      "Garage and property cleanouts",
      "Junk removal and hauling",
      "Brush and limb cleanup",
      "Shed removal and debris",
      "Stump grinding when access fits"
    ],
    detailImage: "/images/truck-trailers.jpg",
    detailAlt: "Truck and trailers for cleanup work near Hot Springs Village Arkansas",
    detailEyebrow: "Quote Details",
    detailTitle: "Location and scope matter for Village-area work.",
    detailText: [
      "For Hot Springs Village work, send the exact area, photos of the mess, and a note about driveway access, gates, stairs, and where a trailer can park.",
      "If the job includes limbs or tree mess, tell us whether anything is near a roof, power line, fence, or structure. We avoid dangerous tree removals but can quote safe cleanup work.",
      "Cleanouts, junk hauling, shed debris, and storm cleanup are usually easiest to quote with several wide photos."
    ],
    localTitle: "Serving Hot Springs Village, Hot Springs, Mountain Pine, Lake Hamilton, Jessieville, and nearby properties when the job fits.",
    localText:
      "Red Dirt can quote Hot Springs Village cleanup, junk removal, hauling, cleanouts, storm debris, brush cleanup, shed removal, and stump grinding based on photos, access, and route timing.",
    schemaName: "Property Cleanup Services in Hot Springs Village AR",
    schemaDescription:
      "Property cleanup, junk removal, cleanouts, storm cleanup, brush cleanup, shed removal, stump grinding, hauling, and light demolition cleanup around Hot Springs Village, Arkansas.",
    areaServed: ["Hot Springs Village AR", "Hot Springs AR", "Mountain Pine AR", "Lake Hamilton AR", "Jessieville AR"],
    serviceType: ["Property cleanup", "Junk removal", "Cleanouts", "Storm cleanup", "Brush cleanup", "Shed removal", "Stump grinding", "Hauling"],
    related: [
      { label: "Hot Springs Storm Cleanup", href: "/hot-springs-storm-cleanup", text: "Limb cleanup, brush piles, scattered debris, and hauling after storms." },
      { label: "Hot Springs Junk Removal", href: "/hot-springs-junk-removal", text: "Furniture, appliances, garage junk, rental junk, and haul-off work." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Wider cleanup for brush, junk, debris, rough yards, and property messes." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/mountain-pine-ar")!,
      serviceLinks.find((item) => item.href === "/storm-cleanup")!,
    ],
  },

  "royal-ar": {
    slug: "royal-ar",
    title: "Property Cleanup, Brush Hogging & Junk Removal in Royal AR",
    description:
      "Property cleanup, brush hogging, junk removal, hauling, cleanouts, storm cleanup, shed removal, dirt work, and rural cleanup around Royal, Hot Springs, Lake Hamilton, and nearby Arkansas areas.",
    ogTitle: "Royal AR Property Cleanup, Brush Hogging & Hauling | Red Dirt",
    ogDescription:
      "Rural property cleanup, brush hogging, junk removal, hauling, cleanouts, storm cleanup, shed removal, and dirt work around Royal and Hot Springs.",
    heroImage: "/images/tractor-bush-hog.jpg",
    heroAlt: "Brush hogging and rural property cleanup around Royal Arkansas",
    eyebrow: "Royal • Hot Springs • Rural Property Cleanup",
    h1: "Royal Area Cleanup For Brush, Junk, Dirt Work, And Country Property Messes.",
    intro:
      "Red Dirt can quote Royal area property cleanup, brush hogging, junk removal, cleanouts, hauling, storm cleanup, shed removal, dirt work, and small tree cleanup for rural properties near Hot Springs.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Royal Quote",
    overviewEyebrow: "Royal Area Work",
    overviewTitle: "Rural properties usually need more than one kind of cleanup.",
    overviewText: [
      "Around Royal, a job may start as brush hogging but also need limbs moved, junk hauled, a driveway touched up, or an old shed cleaned out.",
      "We look at the whole property and quote based on what needs cut, hauled, cleaned, or shaped up, along with mileage, access, dump fees, and labor.",
      "Photos and a short description are the easiest way to start before we decide if it can be quoted from pictures or needs looked at in person."
    ],
    cards: [
      "Brush hogging and rough mowing",
      "Rural junk hauling",
      "Cleanouts and debris",
      "Storm limb cleanup",
      "Shed removal and hauling",
      "Driveway and drainage help"
    ],
    detailImage: "/images/equipment-1.jpg",
    detailAlt: "Equipment for rural cleanup and dirt work around Royal Arkansas",
    detailEyebrow: "Rural Access",
    detailTitle: "Good directions and wide photos save time.",
    detailText: [
      "Royal area jobs can be outside easy map pins or down drives that are hard to spot. Send the nearest road or landmark, driveway details, and photos of where equipment or a trailer can get in.",
      "For brush hogging, let us know if there are hidden hazards like wire, rocks, holes, stumps, or old debris in the grass.",
      "For dirt work or cleanup jobs, show the problem area and the access path from more than one angle."
    ],
    localTitle: "Serving Royal, Hot Springs, Lake Hamilton, Pearcy, Mountain Pine, and nearby rural properties.",
    localText:
      "Red Dirt can quote Royal area brush hogging, junk removal, property cleanup, cleanouts, hauling, shed removal, storm cleanup, stump grinding, and dirt work when the job fits.",
    schemaName: "Property Cleanup Services in Royal AR",
    schemaDescription:
      "Property cleanup, brush hogging, junk removal, cleanouts, hauling, storm cleanup, shed removal, dirt work, and rural cleanup around Royal, Arkansas.",
    areaServed: ["Royal AR", "Hot Springs AR", "Lake Hamilton AR", "Pearcy AR", "Mountain Pine AR"],
    serviceType: ["Property cleanup", "Brush hogging", "Junk removal", "Cleanouts", "Hauling", "Storm cleanup", "Shed removal", "Dirt work"],
    related: [
      { label: "Hot Springs Brush Hogging", href: "/hot-springs-brush-hogging", text: "Brush hogging, bush hogging, rough mowing, trails, and overgrown areas." },
      { label: "Hot Springs Dirt Work", href: "/hot-springs-dirt-work", text: "Driveways, ditches, culverts, washouts, rough grading, and drainage help." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Junk, brush, debris, storm mess, and whole-property cleanup around Hot Springs." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/lake-hamilton-ar")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
    ],
  },

  "pearcy-ar": {
    slug: "pearcy-ar",
    title: "Property Cleanup, Junk Removal & Dirt Work in Pearcy AR",
    description:
      "Property cleanup, junk removal, cleanouts, hauling, dirt work, driveway help, brush cleanup, storm cleanup, shed removal, and rural cleanup around Pearcy, Hot Springs, Royal, and nearby Arkansas areas.",
    ogTitle: "Pearcy AR Property Cleanup, Junk Removal & Dirt Work | Red Dirt",
    ogDescription:
      "Junk removal, property cleanup, cleanouts, dirt work, driveway help, brush cleanup, storm cleanup, shed removal, and hauling around Pearcy and Hot Springs.",
    heroImage: "/images/equipment-1.jpg",
    heroAlt: "Dirt work and property cleanup around Pearcy Arkansas",
    eyebrow: "Pearcy • Hot Springs • Property Cleanup And Dirt Work",
    h1: "Pearcy Area Cleanup, Hauling, And Small Dirt Work For Rural Properties.",
    intro:
      "Red Dirt can look at Pearcy area junk removal, property cleanup, cleanouts, hauling, driveway help, ditches, culverts, brush cleanup, storm debris, shed removal, and light demolition cleanup.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Pearcy Quote",
    overviewEyebrow: "Pearcy Area Services",
    overviewTitle: "Cleanup and dirt work often go together on country properties.",
    overviewText: [
      "Around Pearcy, a property may need junk hauled off, brush cut back, a ditch cleaned up, a driveway touched up, or storm debris moved before it is usable again.",
      "We quote based on photos, access, distance, load size, labor, disposal, and whether the job needs equipment, trailers, or a closer look in person.",
      "If the work includes dirt, drainage, or a driveway problem, send photos that show where the water goes and how equipment can reach the area."
    ],
    cards: [
      "Driveway touch-ups",
      "Ditches and culvert help",
      "Junk removal and hauling",
      "Garage and property cleanouts",
      "Brush and storm cleanup",
      "Shed and light demo debris"
    ],
    detailImage: "/images/truck-1.png",
    detailAlt: "Truck and trailer for cleanup and hauling around Pearcy Arkansas",
    detailEyebrow: "Photos First",
    detailTitle: "The more angles you send, the better the quote gets.",
    detailText: [
      "For cleanups and hauling, show the pile, room, shed, or property area from a wide view. For dirt work, show the drive, ditch, washout, and nearby access.",
      "Tell us what town or road area the property is near so travel and scheduling are figured in before the quote is given.",
      "Bigger Pearcy area jobs may need an in-person look, especially if they involve drainage, equipment access, or mixed debris."
    ],
    localTitle: "Serving Pearcy, Hot Springs, Royal, Lake Hamilton, Bismarck, and nearby rural properties.",
    localText:
      "Red Dirt can quote Pearcy area cleanup, junk removal, hauling, cleanouts, small dirt work, driveway help, brush cleanup, storm cleanup, shed removal, and stump grinding when the job fits.",
    schemaName: "Property Cleanup and Dirt Work Services in Pearcy AR",
    schemaDescription:
      "Property cleanup, junk removal, cleanouts, hauling, dirt work, driveway help, ditches, culverts, brush cleanup, storm cleanup, and shed removal around Pearcy, Arkansas.",
    areaServed: ["Pearcy AR", "Hot Springs AR", "Royal AR", "Lake Hamilton AR", "Bismarck AR"],
    serviceType: ["Property cleanup", "Junk removal", "Cleanouts", "Hauling", "Dirt work", "Driveway work", "Brush cleanup", "Storm cleanup"],
    related: [
      { label: "Hot Springs Dirt Work", href: "/hot-springs-dirt-work", text: "Driveway touch-ups, ditches, culverts, washouts, rough grading, and drainage help." },
      { label: "Hot Springs Junk Removal", href: "/hot-springs-junk-removal", text: "Furniture, appliances, rental junk, garage junk, and debris hauling." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Wider cleanup help for junk, brush, debris, storm mess, and rough areas." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/royal-ar")!,
      serviceLinks.find((item) => item.href === "/dirt-work")!,
    ],
  },

  "bismarck-ar": {
    slug: "bismarck-ar",
    title: "Property Cleanup, Brush Hogging & Dirt Work in Bismarck AR",
    description:
      "Property cleanup, brush hogging, bush hogging, junk removal, cleanouts, hauling, dirt work, driveway help, storm cleanup, and rural property cleanup around Bismarck, Hot Springs, DeGray, and nearby Arkansas areas.",
    ogTitle: "Bismarck AR Property Cleanup, Brush Hogging & Dirt Work | Red Dirt",
    ogDescription:
      "Brush hogging, property cleanup, junk removal, cleanouts, hauling, dirt work, driveway help, storm cleanup, and rural cleanup around Bismarck and nearby areas.",
    heroImage: "/images/tractor-pov.jpg",
    heroAlt: "Bush hogging and dirt work around Bismarck Arkansas",
    eyebrow: "Bismarck • DeGray Area • Rural Cleanup",
    h1: "Bismarck Area Brush Hogging, Cleanup, Hauling, And Dirt Work.",
    intro:
      "Red Dirt can quote Bismarck area brush hogging, bush hogging, property cleanup, junk removal, cleanouts, hauling, dirt work, driveway help, storm cleanup, shed removal, and stump grinding for rural properties.",
    primaryCta: "Call or Text Photos",
    secondaryCta: "Get a Bismarck Quote",
    overviewEyebrow: "Bismarck Area Work",
    overviewTitle: "Acreage, drives, brush, and cleanup jobs need practical help.",
    overviewText: [
      "Around Bismarck and the DeGray area, cleanup work often means more than one trailer load. It can include brush hogging, old junk, a washed-out drive, storm limbs, an outbuilding, or a rough area that needs opened back up.",
      "We price jobs by scope, distance, access, equipment needs, labor, dump fees, and whether it can be quoted from photos or needs a site look.",
      "Bigger rural jobs usually make the most sense, especially when brush hogging, hauling, and property cleanup can be handled together."
    ],
    cards: [
      "Brush hogging and rough mowing",
      "Driveway and drainage help",
      "Property cleanup and hauling",
      "Junk and debris removal",
      "Storm limb cleanup",
      "Shed removal and stump grinding"
    ],
    detailImage: "/images/work-4.jpg",
    detailAlt: "Rural property cleanup and brush work near Bismarck Arkansas",
    detailEyebrow: "Rural Quotes",
    detailTitle: "Send photos that show distance, terrain, and access.",
    detailText: [
      "A brush job in an open field is different than a sloped, wet, or debris-filled area. A driveway touch-up is different than a drainage problem that keeps washing out.",
      "For Bismarck jobs, send the nearest location, a rough idea of acreage or load size, and wide photos of the work area and access path.",
      "If the job includes both cutting and hauling, tell us what needs cut, what needs loaded, and what can stay on site."
    ],
    localTitle: "Serving Bismarck, Hot Springs, Arkadelphia, DeGray, Pearcy, and nearby rural properties.",
    localText:
      "Red Dirt can quote Bismarck area brush hogging, junk removal, property cleanup, dirt work, driveway help, cleanouts, shed removal, storm cleanup, and stump grinding when the job fits.",
    schemaName: "Property Cleanup and Brush Hogging Services in Bismarck AR",
    schemaDescription:
      "Property cleanup, brush hogging, bush hogging, junk removal, cleanouts, hauling, dirt work, driveway help, storm cleanup, shed removal, and stump grinding around Bismarck, Arkansas.",
    areaServed: ["Bismarck AR", "Hot Springs AR", "Arkadelphia AR", "Pearcy AR", "DeGray AR"],
    serviceType: ["Property cleanup", "Brush hogging", "Bush hogging", "Junk removal", "Cleanouts", "Hauling", "Dirt work", "Driveway work", "Storm cleanup"],
    related: [
      { label: "Hot Springs Brush Hogging", href: "/hot-springs-brush-hogging", text: "Brush hogging, bush hogging, rough mowing, trails, and overgrown areas." },
      { label: "Hot Springs Dirt Work", href: "/hot-springs-dirt-work", text: "Driveway touch-ups, ditches, culverts, washouts, rough grading, and drainage help." },
      { label: "Hot Springs Property Cleanup", href: "/hot-springs-property-cleanup", text: "Junk, brush, debris, storm mess, and whole-property cleanup around Hot Springs." },
      areaLinks.find((item) => item.href === "/hot-springs-ar")!,
      areaLinks.find((item) => item.href === "/arkadelphia-ar")!,
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
    ],
  },

};

export const allSeoPageSlugs = [
  ...Object.keys(servicePages),
  ...Object.keys(locationPages),
  "bush-hogging",
  "cleanouts",
  "light-demolition",
  "glenwood-ar",
  "hot-springs-ar",
  "arkadelphia-ar",
];

export const organizationSchemaBase = {
  "@type": "LocalBusiness",
  "@id": `${siteData.siteUrl}/#localbusiness`,
  name: siteData.name,
  telephone: siteData.phone,
  email: siteData.email,
  url: siteData.siteUrl,
};
