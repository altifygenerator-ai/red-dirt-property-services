import {
  FaDumpster,
  FaHammer,
  FaHouseChimney,
  FaTruckPickup,
  FaTree,
} from "react-icons/fa6";
import type { FAQ, Service, Step } from "@/types/site";

export const siteData = {
  name: "Red Dirt Property Services LLC",
  tagline: "Property Cleanup • Dirt Work • Hauling",
  credentials: "Licensed & Insured",
  siteUrl: "https://www.reddirtpropertyservicesar.com",
  phone: "870-828-2562",
  phoneHref: "8708282562",
  email: "reddirtpropertyservicesar@gmail.com",

  services: [
    {
      title: "Property Cleanup",
      text: "Old junk, brush piles, storm mess, rental cleanouts, and the kind of cleanup jobs that get pushed off because they are too much for one person and a pickup bed.",
      icon: FaHouseChimney,
    },
    {
      title: "Dirt Work",
      text: "Driveway touch-ups, rough grading, drainage ditches, culvert help, washouts, and small dirt work jobs that need looked at with the property, access, and equipment in mind.",
      icon: FaTruckPickup,
    },
    {
      title: "Tree Work",
      text: "Small tree work, limb cleanup, brush removal, and light clearing when the job fits. We look at tree jobs first and avoid dangerous work around power lines, houses, and tight hazards.",
      icon: FaTree,
    },
    {
      title: "Stump Grinding",
      text: "Stumps in yards, edges, driveways, and cleanup areas can be quoted by size, access, rocks, roots, and what needs cleaned up after the grinding is done.",
      icon: FaHammer,
    },
    {
      title: "Hauling",
      text: "Furniture, appliances, debris, old materials, brush, scrap, and trailer loads that need moved, hauled off, or cleaned up without making it a bigger headache.",
      icon: FaTruckPickup,
    },
    {
      title: "Light Demolition",
      text: "Old sheds, small decks, fences, playsets, damaged structures, and tear-out work that needs the right tools, trailer, and a crew that knows how to work safely.",
      icon: FaHammer,
    },
    {
      title: "Storm Cleanup",
      text: "Downed limbs, scattered debris, brush, and property mess after Arkansas weather rolls through. We help get things back under control.",
      icon: FaTree,
    },
    {
      title: "Cleanouts",
      text: "Garages, outbuildings, storage spaces, inherited properties, rentals, cabins, and places that need cleared out so the owner can move forward.",
      icon: FaDumpster,
    },
  ] satisfies Service[],

  steps: [
    {
      title: "Send Photos",
      text: "Call, text, or email a few pictures of the mess and tell us where the property is located.",
    },
    {
      title: "Get A Quote",
      text: "We look at the load size, labor, access, mileage, and disposal needs before giving you a fair estimate.",
    },
    {
      title: "Schedule The Work",
      text: "Once the price makes sense, we set a time and show up ready to work.",
    },
    {
      title: "We Handle It",
      text: "We clean up, load up, haul off, and leave the property better than we found it.",
    },
  ] satisfies Step[],

  serviceAreas: [
    "Amity",
    "Glenwood",
    "Kirby",
    "Norman",
    "Mount Ida",
    "Bonnerdale",
    "Bismarck",
    "Caddo Valley",
    "Arkadelphia",
    "Hot Springs",
    "Lake Hamilton",
    "Hot Springs Village",
    "Royal",
    "Pearcy",
    "Mountain Pine",
    "Murfreesboro",
    "Malvern",
  ],

  whoWeHelp: [
    "Homeowners",
    "Landlords",
    "Realtors",
    "Cabin Owners",
    "Property Managers",
    "Families Handling Estates",
    "Folks Cleaning Up Acreage",
    "Landowners With Driveway Or Drainage Issues",
    "Small Contractors",
  ],


  reviewStats: {
    label: "100% 5-Star Google Reviews",
    ratingValue: 5,
    reviewCount: 6,
    source: "Google",
  },

  googleReviews: [
    {
      name: "Jamie Goree",
      rating: 5,
      source: "Google Review",
      text: "Outstanding experience with Red Dirt Property Services LLC! It is so refreshing to work with a local business that genuinely cares about its customers and takes immense pride in their work. They put in so much extra effort to make sure I was completely happy with the project. I was honestly shocked by how reasonable and fair their pricing was compared to other quotes I received. They deliver premium results without overcharging. Highly, highly recommend!",
    },
    {
      name: "Custom Crafts by Bruce Slaton",
      rating: 5,
      source: "Google Review",
      text: "Every time I need something done that I either can't do or don't have time to do, I get Casey. He does excellent work, and gets it done in a timely manner, saving me money!",
    },
    {
      name: "Katii Marrow",
      rating: 5,
      source: "Google Review",
      text: "Great guys, honest and great at what y'all do. Will call again and send people to y'all as well.",
    },
    {
      name: "Michael Lynch",
      rating: 5,
      source: "Google Review",
      text: "Great guy showed up on time! I 100% recommend this guy.",
    },
    {
      name: "Deven Porter",
      rating: 5,
      source: "Google Review",
      text: "They are good guys and great to work with.",
    },
  ],

  faqs: [
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. Red Dirt Property Services LLC is licensed and insured for the property services we provide.",
    },
    {
      question: "Do you give exact prices online?",
      answer:
        "Not usually. Cleanup, hauling, and demo jobs depend on load size, weight, labor, mileage, dump fees, and how easy the property is to access.",
    },
    {
      question: "Can I text pictures for a quote?",
      answer:
        "Yes. Photos are the easiest way to start. Send a few pictures, your location, and a short description of what needs done.",
    },
    {
      question: "Do you do full house demolition?",
      answer:
        "We focus on property cleanup, hauling, and light demolition. Old sheds, fences, decks, small structures, and cleanout work are a better fit than full house demolition.",
    },
    {
      question: "Do you take tree jobs?",
      answer:
        "It depends on the tree and where it sits. We can look at small tree work, limb cleanup, brush removal, and light clearing, but we avoid dangerous removals around power lines, houses, and overhead hazards.",
    },
    {
      question: "Can you help with driveways, ditches, culverts, or stump grinding?",
      answer:
        "Yes, when the job fits our equipment and access. Dirt work, drainage work, culverts, driveway touch-ups, and stump grinding are quoted after photos or an in-person look.",
    },
    {
      question: "Do you serve rural properties?",
      answer:
        "Yes. Red Dirt is built for rural Arkansas property work. If you are outside town, reach out and we can quote the job with mileage included.",
    },
  ] satisfies FAQ[],
};

export const serviceNavLinks = [
  {
    label: "Bush Hogging",
    href: "/bush-hogging",
    description: "Brush cutting, rough mowing, trails, and rural acreage cleanup",
  },
  {
    label: "Dirt Work",
    href: "/dirt-work",
    description: "Driveway work, ditches, culverts, washouts, and rough grading",
  },
  {
    label: "Tree Work",
    href: "/tree-work",
    description: "Small tree work, limb cleanup, brush removal, and light clearing",
  },
  {
    label: "Stump Grinding",
    href: "/stump-grinding",
    description: "Stump grinding quoted by size, access, cleanup, and location",
  },
  {
    label: "Property Cleanup",
    href: "/property-cleanup",
    description: "Brush, junk, debris, neglected yards, and rough property cleanup",
  },
  {
    label: "Junk Removal",
    href: "/junk-removal",
    description: "Furniture, appliances, debris, garage junk, and haul-off work",
  },
  {
    label: "Cleanouts",
    href: "/cleanouts",
    description: "Rental, estate, garage, cabin, and outbuilding cleanouts",
  },
  {
    label: "Shed Removal",
    href: "/shed-removal",
    description: "Old sheds, small structures, teardown cleanup, and debris hauling",
  },
  {
    label: "Storm Cleanup",
    href: "/storm-cleanup",
    description: "Downed limbs, scattered debris, brush piles, and storm mess",
  },
  {
    label: "Light Demolition",
    href: "/light-demolition",
    description: "Fences, small decks, damaged structures, and demo debris",
  },
];

export const areaNavLinks = [
  {
    label: "Amity",
    href: "/amity-ar",
    description: "Local cleanup, hauling, brush hogging, dirt work, and cleanouts",
  },
  {
    label: "Glenwood",
    href: "/glenwood-ar",
    description: "Rural cleanup, dirt work, brush hogging, tree work, and light demo",
  },
  {
    label: "Mount Ida",
    href: "/mount-ida-ar",
    description: "Cabin, lake-area, dirt work, and rural property cleanup work",
  },
  {
    label: "Kirby",
    href: "/kirby-ar",
    description: "Brush hogging, acreage cleanup, hauling, dirt work, and cleanouts",
  },
  {
    label: "Norman",
    href: "/norman-ar",
    description: "Rural property cleanup, cleanouts, hauling, dirt work, and brush work",
  },
  {
    label: "Mountain Pine",
    href: "/mountain-pine-ar",
    description: "Property cleanup, brush cutting, tree cleanup, hauling, and storm cleanup",
  },
  {
    label: "Hot Springs",
    href: "/hot-springs-ar",
    description: "Junk removal, cleanouts, hauling, dirt work, and property cleanup",
  },
  {
    label: "Lake Hamilton",
    href: "/lake-hamilton-ar",
    description: "Lake-area cleanouts, junk hauling, storm cleanup, and property cleanup",
  },
  {
    label: "Hot Springs Village",
    href: "/hot-springs-village-ar",
    description: "Cleanouts, hauling, storm debris, brush cleanup, and property cleanup",
  },
  {
    label: "Royal",
    href: "/royal-ar",
    description: "Rural cleanup, hauling, brush hogging, tree cleanup, and cleanouts",
  },
  {
    label: "Pearcy",
    href: "/pearcy-ar",
    description: "Property cleanup, junk hauling, dirt work, brush cleanup, and cleanouts",
  },
  {
    label: "Bismarck",
    href: "/bismarck-ar",
    description: "Rural cleanup, bush hogging, cleanouts, hauling, and dirt work",
  },
  {
    label: "Arkadelphia",
    href: "/arkadelphia-ar",
    description: "Rental cleanouts, haul-offs, dirt work, junk removal, and storm debris",
  },
  {
    label: "Malvern",
    href: "/malvern-ar",
    description: "Cleanouts, junk removal, dirt work, hauling, and property cleanup",
  },
  {
    label: "Murfreesboro",
    href: "/murfreesboro-ar",
    description: "Rural cleanup, cabin cleanouts, dirt work, hauling, and brush work",
  },
];


export const hotSpringsServiceLinks = [
  {
    label: "Hot Springs Junk Removal",
    href: "/hot-springs-junk-removal",
    description: "Furniture, appliances, debris, garage junk, rental junk, and haul-off work around Hot Springs",
  },
  {
    label: "Hot Springs Property Cleanup",
    href: "/hot-springs-property-cleanup",
    description: "Whole-property cleanup for yards, wooded edges, cabins, rentals, and rough spots around Hot Springs",
  },
  {
    label: "Hot Springs Brush Hogging",
    href: "/hot-springs-brush-hogging",
    description: "Brush hogging, bush hogging, rough mowing, field edges, trails, and overgrown areas",
  },
  {
    label: "Hot Springs Cleanouts",
    href: "/hot-springs-cleanouts",
    description: "Rental, estate, garage, cabin, shed, and outbuilding cleanouts around Hot Springs",
  },
  {
    label: "Hot Springs Shed Removal",
    href: "/hot-springs-shed-removal",
    description: "Old shed teardown, small structure removal, debris cleanup, and hauling",
  },
  {
    label: "Hot Springs Storm Cleanup",
    href: "/hot-springs-storm-cleanup",
    description: "Downed limbs, brush piles, storm debris, and cleanup after rough Arkansas weather",
  },
  {
    label: "Hot Springs Dirt Work",
    href: "/hot-springs-dirt-work",
    description: "Driveway touch-ups, drainage help, ditches, culverts, washouts, and small dirt work",
  },
  {
    label: "Hot Springs Stump Grinding",
    href: "/hot-springs-stump-grinding",
    description: "Stump grinding around yards, drives, lake places, fence lines, and cleanup areas",
  },
] as const;
