"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

type Category = "Tree Work" | "Junk Hauling" | "Property Cleanup" | "Brush Hogging" | "Dirt Work";
type Filter = "All Work" | Category;
type GalleryImage = { src: string; alt: string; label: string; category: Category };

const galleryImages: GalleryImage[] = [
  { src: "/images/real-work/tree-cut-logs-loaded.webp", alt: "Freshly cut logs loaded on the work trailer after a tree cleanup job", label: "Logs Loaded For Hauling", category: "Tree Work" },
  { src: "/images/real-work/tree-limb-cutting-work.webp", alt: "Tree limbs being cut and cleared at an Arkansas property", label: "Limb Cleanup In Progress", category: "Tree Work" },
  { src: "/images/real-work/tree-debris-flatbed-loaded.webp", alt: "Work trailer loaded with branches and wood from tree cleanup", label: "Tree Debris On Trailer", category: "Tree Work" },
  { src: "/images/real-work/tree-cutting-trunk-site.webp", alt: "Cut trunk and chainsaw at a recent tree removal project", label: "Tree Cutting Job", category: "Tree Work" },
  { src: "/images/real-work/tree-trunk-after-cutting.webp", alt: "Felled tree trunk on the ground at a recent job site", label: "Tree Taken Down", category: "Tree Work" },
  { src: "/images/real-work/tree-limbs-gathered.webp", alt: "Branches and limbs gathered after tree work", label: "Limbs Ready For Cleanup", category: "Tree Work" },
  { src: "/images/real-work/tree-limbs-property-site.webp", alt: "Downed limbs on a wooded Arkansas property before hauling", label: "Clearing Fallen Limbs", category: "Tree Work" },
  { src: "/images/real-work/tree-cleanup-trailer-loaded.webp", alt: "Trailer loaded with limbs and debris from property tree work", label: "Loaded Tree Cleanup Trailer", category: "Tree Work" },
  { src: "/images/real-work/tree-brush-trailer-loaded.webp", alt: "Dump trailer full of cut brush and branches", label: "Brush Haul-Off", category: "Tree Work" },
  { src: "/images/real-work/tree-work-wooded-yard.webp", alt: "Wooded residential property after tree work and cleanup", label: "Wooded Yard After Work", category: "Tree Work" },
  { src: "/images/real-work/tree-work-opened-yard.webp", alt: "Yard and treeline after cleanup and tree work", label: "Property Opened Up", category: "Tree Work" },
  { src: "/images/real-work/tree-work-limbs-before.webp", alt: "Trees and overhead branches at a tree work property", label: "Limbs And Tree Canopy", category: "Tree Work" },
  { src: "/images/real-work/red-dirt-work-truck.webp", alt: "Red Dirt Property Services branded truck at a job site", label: "Our Work Truck", category: "Tree Work" },
  { src: "/images/recent/red-dirt-tree-work-cleared-yard.webp", alt: "Open yard and treeline after an Arkansas tree cleanup job", label: "Cleared Yard Area", category: "Tree Work" },
  { src: "/images/recent/red-dirt-tree-debris-trailer.webp", alt: "Trailer loaded with branches and tree debris for haul off", label: "Tree Debris Loaded", category: "Tree Work" },
  { src: "/images/recent/red-dirt-tree-trunk-job-site.webp", alt: "Large tree trunk at a recent Arkansas tree work site", label: "Tree at Job Site", category: "Tree Work" },
  { src: "/images/recent/red-dirt-small-tree-yard.webp", alt: "Smaller tree in an Arkansas residential yard", label: "Small Yard Tree", category: "Tree Work" },
  { src: "/images/recent/red-dirt-tree-limbs-overhead.webp", alt: "Tree limbs and canopy at a recent property work site", label: "Tree Limbs on Site", category: "Tree Work" },
  { src: "/images/recent/red-dirt-tree-work-wooded-property.webp", alt: "Wooded property during tree and brush cleanup work", label: "Wooded Work Area", category: "Tree Work" },
  { src: "/images/recent/red-dirt-tree-cleanup-ground.webp", alt: "Tree-lined property with ground debris during cleanup", label: "Job Site Cleanup", category: "Tree Work" },
  { src: "/images/real-work/junk-appliances-dump-trailer.webp", alt: "Dump trailer carrying a refrigerator and mixed junk for haul-off", label: "Appliances Loaded Up", category: "Junk Hauling" },
  { src: "/images/real-work/junk-hauling-full-trailer.webp", alt: "Truck and trailer loaded with bulky items and scrap for hauling", label: "Another Trailer Load", category: "Junk Hauling" },
  { src: "/images/real-work/junk-mixed-items-outbuilding.webp", alt: "Old door, boards, chairs and household junk gathered by an outbuilding", label: "Mixed Items To Clear", category: "Junk Hauling" },
  { src: "/images/real-work/junk-barrels-outbuilding.webp", alt: "Old blue barrels and loose material beside an outbuilding", label: "Barrels And Yard Junk", category: "Junk Hauling" },
  { src: "/images/real-work/junk-furniture-debris-before.webp", alt: "Household furniture and debris beside a rural outbuilding", label: "Furniture And Debris", category: "Junk Hauling" },
  { src: "/images/real-work/junk-scattered-rural-debris.webp", alt: "Discarded blocks and material at a rural property", label: "Scattered Property Debris", category: "Junk Hauling" },
  { src: "/images/real-work/junk-brush-hauloff-trailer.webp", alt: "Tree and yard debris loaded onto a flat trailer for hauling", label: "Brush On The Trailer", category: "Junk Hauling" },
  { src: "/images/real-work/junk-full-load-truck-trailer.webp", alt: "Work truck with trailer loaded with discarded furniture and appliances", label: "Hauling A Full Load", category: "Junk Hauling" },
  { src: "/images/recent/cleanup-before-mattress.webp", alt: "Old mattresses, discarded furniture and household junk piled near a rural property", label: "Furniture To Haul Away", category: "Junk Hauling" },
  { src: "/images/recent/cleanup-before-debris.webp", alt: "Pile of old furniture, boards, bags and household debris awaiting haul-off", label: "Mixed Debris", category: "Junk Hauling" },
  { src: "/images/recent/cleanup-before-furniture.webp", alt: "Discarded bed frames and chairs among debris before property haul-off", label: "Furniture Pile", category: "Junk Hauling" },
  { src: "/images/recent/cleanup-before-boat.webp", alt: "Discarded boat and bulky items beside dense brush awaiting cleanup", label: "Bulky Items", category: "Junk Hauling" },
  { src: "/images/real-work/cleanup-gravel-driveway-clear.webp", alt: "Gravel access area and wooded residential property after cleanup", label: "Driveway Opened Back Up", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-drive-access-after.webp", alt: "Wooded gravel driveway after large debris was cleared", label: "Cleaned Drive Access", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-wooded-property-after.webp", alt: "Previously cluttered wooded area with large debris removed", label: "Yard Area Cleared", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-outbuilding-open-area.webp", alt: "Cleared ground next to a rural outbuilding", label: "Around The Outbuilding", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-shed-cleared-ground.webp", alt: "Open ground near a rural outbuilding after property work", label: "Ground Cleared", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-cleared-woodland-access.webp", alt: "Open path and property access area after brush and debris work", label: "Property Access Cleared", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-cleared-rural-access.webp", alt: "Cleared property area with room for vehicle access", label: "Open Woodland Access", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-residential-yard-finished.webp", alt: "Yard with stumps and brush cleaned up", label: "Yard Work Completed", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-yard-open-after.webp", alt: "Open grassy area after tree and debris removal", label: "After Tree Cleanup", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-gravel-rural-drive.webp", alt: "Rural driveway and land after a cleanup project", label: "Cleared Driveway Area", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-treeline-access.webp", alt: "Open treeline area with debris removed", label: "Treeline Cleanup", category: "Property Cleanup" },
  { src: "/images/real-work/cleanup-yard-tree-original.webp", alt: "Tree at a residential yard before work was performed", label: "Yard Tree Before Work", category: "Property Cleanup" },
  { src: "/images/recent/red-dirt-service-truck-decal.webp", alt: "Red Dirt Property Services branded work truck and door decal", label: "Branded Work Truck", category: "Property Cleanup" },
  { src: "/images/recent/cleanup-after-front-drive.webp", alt: "View of the property yard and gravel driveway following cleanup", label: "Opened-Up Property", category: "Property Cleanup" },
  { src: "/images/recent/cleanup-after-driveway.webp", alt: "Gravel driveway and yard area with larger discarded items cleared out", label: "Cleared Driveway Area", category: "Property Cleanup" },
  { src: "/images/recent/cleanup-after-open-drive.webp", alt: "Longer view through driveway with the large piles removed", label: "Drive Access After Work", category: "Property Cleanup" },
  { src: "/images/recent/cleanup-after-side-yard.webp", alt: "Wooded side yard with discarded larger objects removed from the open space", label: "Yard Access", category: "Property Cleanup" },
  { src: "/images/recent/cleanup-after-treeline.webp", alt: "Cleared side area looking toward a dense stand of bamboo and trees", label: "Treeline Area", category: "Property Cleanup" },
  { src: "/images/real-work/brush-hog-tractor-field.webp", alt: "View from tractor working an Arkansas rural field", label: "Tractor In The Field", category: "Brush Hogging" },
  { src: "/images/real-work/brush-hog-field-cut.webp", alt: "Wide Arkansas pasture after brush hogging", label: "Field After Cutting", category: "Brush Hogging" },
  { src: "/images/real-work/brush-hog-mowed-acreage.webp", alt: "Open pasture with grass recently cut", label: "Recently Mowed Acreage", category: "Brush Hogging" },
  { src: "/images/real-work/brush-hog-open-pasture.webp", alt: "Field and treeline after acreage mowing", label: "Open Rural Field", category: "Brush Hogging" },
  { src: "/images/real-work/brush-hog-field-evening.webp", alt: "Field and tree line after rural acreage work", label: "Evening Across The Field", category: "Brush Hogging" },
  { src: "/images/dirt-work/excavator-digging-1.webp", alt: "Mini excavator doing dirt work on a local Arkansas property", label: "Mini Excavator Work", category: "Dirt Work" },
  { src: "/images/dirt-work/stump-root-excavation-1.webp", alt: "Root and stump excavation carried out with a mini excavator", label: "Root Excavation", category: "Dirt Work" },
  { src: "/images/dirt-work/excavation-hole-1.webp", alt: "Excavation project at an Arkansas property", label: "Excavation Job", category: "Dirt Work" },
  { src: "/images/dirt-work/excavator-loading-trailer.webp", alt: "Mini excavator being loaded for hauling", label: "Equipment Loading", category: "Dirt Work" },
];
const filters: Filter[] = ["All Work", "Tree Work", "Junk Hauling", "Property Cleanup", "Brush Hogging", "Dirt Work"];

export default function GalleryPreview() {
  const [filter, setFilter] = useState<Filter>("All Work");
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleImages = filter === "All Work" ? galleryImages : galleryImages.filter((image) => image.category === filter);
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
            Actual work photos from tree cleanup, junk hauling, brush hogging, dirt work and property cleanouts. No stock photos.
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
            Photos are from real jobs. Similar before-and-after views may be taken from different spots on the same property.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
