"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

type Category = "Recent Cleanout" | "Dirt Work" | "Brush & Hauling";
type Filter = "All Work" | Category;
type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  category: Category;
};

const galleryImages: GalleryImage[] = [
  { src: "/images/recent/cleanup-before-mattress.webp", alt: "Old mattresses, discarded furniture and household junk piled near a rural property", label: "Before: Mattresses & Junk", category: "Recent Cleanout" },
  { src: "/images/recent/cleanup-before-debris.webp", alt: "Pile of old furniture, boards, bags and household debris awaiting haul-off", label: "Before: Mixed Debris", category: "Recent Cleanout" },
  { src: "/images/recent/cleanup-before-furniture.webp", alt: "Discarded bed frames and chairs among debris before property haul-off", label: "Before: Furniture Pile", category: "Recent Cleanout" },
  { src: "/images/recent/cleanup-before-boat.webp", alt: "Discarded boat and bulky items beside dense brush awaiting cleanup", label: "Before: Bulky Items", category: "Recent Cleanout" },
  { src: "/images/recent/cleanup-after-front-drive.webp", alt: "View of the property yard and gravel driveway following cleanup", label: "After: Opened-Up Property", category: "Recent Cleanout" },
  { src: "/images/recent/cleanup-after-driveway.webp", alt: "Gravel driveway and yard area with larger discarded items cleared out", label: "After: Driveway Area", category: "Recent Cleanout" },
  { src: "/images/recent/cleanup-after-open-drive.webp", alt: "Longer view through driveway with the large piles removed", label: "After: Drive Access", category: "Recent Cleanout" },
  { src: "/images/recent/cleanup-after-side-yard.webp", alt: "Wooded side yard with discarded larger objects removed from the open space", label: "After: Yard Access", category: "Recent Cleanout" },
  { src: "/images/recent/cleanup-after-treeline.webp", alt: "Cleared side area looking toward a dense stand of bamboo and trees", label: "After: Treeline Area", category: "Recent Cleanout" },
  { src: "/images/dirt-work/excavator-digging-1.webp", alt: "Mini excavator doing dirt work on a local Arkansas property", label: "Mini Excavator Work", category: "Dirt Work" },
  { src: "/images/dirt-work/stump-root-excavation-1.webp", alt: "Root and stump excavation carried out with a mini excavator", label: "Root Excavation", category: "Dirt Work" },
  { src: "/images/dirt-work/excavation-hole-1.webp", alt: "Excavation project at an Arkansas property", label: "Excavation Job", category: "Dirt Work" },
  { src: "/images/dirt-work/excavator-loading-trailer.webp", alt: "Mini excavator being loaded for hauling", label: "Equipment Loading", category: "Dirt Work" },
  { src: "/images/work-1.jpg", alt: "Red Dirt property cleanup work with equipment", label: "Property Cleanup", category: "Brush & Hauling" },
  { src: "/images/tractor-bush-hog.jpg", alt: "Tractor with bush hog used for rural brush clearing", label: "Brush Hogging", category: "Brush & Hauling" },
  { src: "/images/dump.jpg", alt: "Dump trailer for debris hauling and property cleanup", label: "Dump Trailer", category: "Brush & Hauling" },
  { src: "/images/truck-trailers.jpg", alt: "Red Dirt truck and trailers used for rural property work", label: "Truck & Trailers", category: "Brush & Hauling" },
];
const filters: Filter[] = ["All Work", "Recent Cleanout", "Dirt Work", "Brush & Hauling"];

export default function GalleryPreview() {
  const [filter, setFilter] = useState<Filter>("All Work");
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleImages = filter === "All Work"
    ? galleryImages
    : galleryImages.filter((image) => image.category === filter);
  const activeImage = visibleImages[activeIndex] ?? visibleImages[0];

  function changeFilter(nextFilter: Filter) {
    setFilter(nextFilter);
    setActiveIndex(0);
  }

  function goPrevious() {
    setActiveIndex((current) => current === 0 ? visibleImages.length - 1 : current - 1);
  }

  function goNext() {
    setActiveIndex((current) => current === visibleImages.length - 1 ? 0 : current + 1);
  }

  return (
    <section id="gallery" className="section bg-[#f4f1ec] text-[#171717]">
      <div className="container">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#9f3a2a]">Recent Work</p>
          <h2 className="font-[var(--font-heading)] text-5xl font-bold uppercase leading-[0.94] md:text-6xl">
            Real Jobs. Real Work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/65">
            Recent cleanouts, before-and-after property pictures, dirt work, and hauling.
            These are our actual job photos from around the area.
          </p>
        </FadeIn>

        <div className="mt-9 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter work photos">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={option === filter}
              onClick={() => changeFilter(option)}
              className={`rounded-full border px-4 py-2.5 text-sm font-bold transition-colors ${
                option === filter
                  ? "border-[#9f3a2a] bg-[#9f3a2a] text-white"
                  : "border-black/15 bg-white text-[#171717] hover:border-[#9f3a2a]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <FadeIn className="mt-8">
          <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#211915] shadow-xl">
            <div className="relative flex h-[280px] items-center justify-center bg-[#211915] sm:h-[440px] lg:h-[540px]">
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
                className="object-contain"
              />
              <button type="button" onClick={goPrevious} aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/65 text-2xl text-white hover:bg-[#9f3a2a]">‹</button>
              <button type="button" onClick={goNext} aria-label="Next photo"
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/65 text-2xl text-white hover:bg-[#9f3a2a]">›</button>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-white" aria-live="polite">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#d8c2a5]">{activeImage.category}</p>
                <h3 className="mt-1 text-xl font-bold">{activeImage.label}</h3>
              </div>
              <p className="text-sm text-white/75">Photo {activeIndex + 1} of {visibleImages.length}</p>
            </div>
          </div>

          <div className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4" aria-label="Choose a work photo">
            {visibleImages.map((photo, index) => (
              <button key={photo.src} type="button" onClick={() => setActiveIndex(index)}
                aria-label={`View ${photo.label}`} aria-current={activeIndex === index ? "true" : undefined}
                className={`relative h-[104px] w-[138px] shrink-0 snap-start overflow-hidden rounded-xl border-2 transition sm:h-[125px] sm:w-[166px] ${
                  activeIndex === index ? "border-[#9f3a2a] ring-2 ring-[#9f3a2a]/30" : "border-transparent hover:border-[#9f3a2a]/60"
                }`}
              >
                <Image src={photo.src} alt="" fill sizes="170px" className="object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-2 pb-2 pt-7 text-left text-[11px] font-extrabold text-white">
                  {photo.label}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-center text-sm leading-6 text-black/60">
            Photos are from real jobs. Before and after views may be taken from different spots on the same property.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
