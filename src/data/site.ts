import {
  FaDumpster,
  FaHammer,
  FaHouseChimney,
  FaTruckPickup,
  FaTree,
  FaPeopleCarryBox,
} from "react-icons/fa6";
import type { FAQ, Service, Step } from "@/types/site";

export const siteData = {
  name: "Red Dirt Property Services",
  tagline: "Property Cleanup • Hauling • Light Demolition",
  siteUrl: "https://www.reddirtpropertyservicesar.com",
  phone: "870-260-4880",
  phoneHref: "8702604880",
  email: "reddirtpropertyservicesar@gmail.com",

  services: [
    {
      title: "Property Cleanup",
      text: "Old junk, brush piles, storm mess, rental cleanouts, and the kind of cleanup jobs that get pushed off because they are too much for one person and a pickup bed.",
      icon: FaHouseChimney,
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
    {
      title: "Local Help",
      text: "Sometimes you just need a couple local guys with a truck, trailer, tools, and common sense. That is exactly what Red Dirt was built for.",
      icon: FaPeopleCarryBox,
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
    "Murfreesboro",
    "Malvern",
    "Mountain Pine",
  ],

  whoWeHelp: [
    "Homeowners",
    "Landlords",
    "Realtors",
    "Cabin Owners",
    "Property Managers",
    "Families Handling Estates",
    "Folks Cleaning Up Acreage",
    "Small Contractors",
  ],

  faqs: [
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
    description: "Local property cleanup, hauling, brush hogging, and cleanouts",
  },
  {
    label: "Glenwood",
    href: "/glenwood-ar",
    description: "Rural cleanup, junk removal, brush hogging, and light demo",
  },
  {
    label: "Mount Ida",
    href: "/mount-ida-ar",
    description: "Cabin, lake-area, and rural property cleanup work",
  },
  {
    label: "Kirby",
    href: "/kirby-ar",
    description: "Brush hogging, acreage cleanup, hauling, and cleanouts",
  },
  {
    label: "Norman",
    href: "/norman-ar",
    description: "Rural property cleanup, cleanouts, hauling, and brush work",
  },
  {
    label: "Mountain Pine",
    href: "/mountain-pine-ar",
    description: "Property cleanup, brush cutting, junk hauling, and storm cleanup",
  },
  {
    label: "Hot Springs",
    href: "/hot-springs-ar",
    description: "Junk removal, cleanouts, hauling, and property cleanup",
  },
  {
    label: "Arkadelphia",
    href: "/arkadelphia-ar",
    description: "Rental cleanouts, haul-offs, junk removal, and storm debris",
  },
  {
    label: "Malvern",
    href: "/malvern-ar",
    description: "Cleanouts, junk removal, hauling, and property cleanup",
  },
  {
    label: "Murfreesboro",
    href: "/murfreesboro-ar",
    description: "Rural cleanup, cabin cleanouts, hauling, and brush work",
  },
];
