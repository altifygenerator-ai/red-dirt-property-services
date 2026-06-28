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
    serviceType: ["Property cleanup", "Junk removal", "Bush hogging", "Hauling", "Cleanouts", "Light demolition"],
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
    serviceType: ["Property cleanup", "Cabin cleanouts", "Brush hogging", "Junk removal", "Hauling", "Storm cleanup"],
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
    serviceType: ["Brush hogging", "Property cleanup", "Junk removal", "Hauling", "Cleanouts", "Light demolition"],
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
    serviceType: ["Property cleanup", "Cleanouts", "Brush hogging", "Junk removal", "Hauling", "Storm cleanup"],
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
    serviceType: ["Property cleanup", "Junk hauling", "Brush cleanup", "Cleanouts", "Storm cleanup", "Light demolition"],
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
    serviceType: ["Junk removal", "Cleanouts", "Hauling", "Property cleanup", "Storm cleanup", "Shed removal"],
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
    serviceType: ["Property cleanup", "Brush hogging", "Junk removal", "Hauling", "Cleanouts", "Shed removal"],
    related: [
      serviceLinks.find((item) => item.href === "/bush-hogging")!,
      serviceLinks.find((item) => item.href === "/property-cleanup")!,
      serviceLinks.find((item) => item.href === "/shed-removal")!,
      areaLinks.find((item) => item.href === "/kirby-ar")!,
      areaLinks.find((item) => item.href === "/glenwood-ar")!,
      areaLinks.find((item) => item.href === "/mount-ida-ar")!,
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
  name: siteData.name,
  telephone: siteData.phone,
  email: siteData.email,
  url: siteData.siteUrl,
};
