"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const galleryImages = [
  {
    src: "/images/dirt-work/excavator-digging-1.webp",
    alt: "Red Dirt mini excavator doing dirt work on a local Arkansas property",
    label: "Mini Excavator Work"
  },
  {
    src: "/images/dirt-work/stump-root-excavation-1.webp",
    alt: "Roots and stump material exposed during a Red Dirt excavation job",
    label: "Root & Stump Cleanup"
  },
  {
    src: "/images/dirt-work/excavation-hole-1.webp",
    alt: "Excavation work on an Arkansas property",
    label: "Excavation Work"
  },
  {
    src: "/images/work-1.jpg",
    alt: "Red Dirt property cleanup with equipment on site",
    label: "Property Cleanup"
  },
  {
    src: "/images/tractor-bush-hog.jpg",
    alt: "Tractor and brush hog on a rural property",
    label: "Brush Hogging"
  },
  {
    src: "/images/dirt-work/excavator-digging-2.webp",
    alt: "Mini excavator working a second angle of a real dirt work job",
    label: "Dirt Work On Site"
  },
  {
    src: "/images/dirt-work/excavation-hole-2.webp",
    alt: "Deep excavation and root removal during a property project",
    label: "Digging & Root Removal"
  },
  {
    src: "/images/dump.jpg",
    alt: "Red Dirt dump trailer for junk and debris hauling",
    label: "Dump Trailer & Hauling"
  },
  {
    src: "/images/work-3.jpg",
    alt: "Property debris and brush cleanup work",
    label: "Brush & Debris Cleanup"
  },
  {
    src: "/images/dirt-work/stump-root-excavation-2.webp",
    alt: "Additional view of stump and root excavation work",
    label: "Root Removal"
  },
  {
    src: "/images/dirt-work/excavator-loading-trailer.webp",
    alt: "Mini excavator being loaded onto the trailer after a job",
    label: "Equipment Loading"
  },
  {
    src: "/images/truck-trailers.jpg",
    alt: "Red Dirt truck and trailers ready for rural property work",
    label: "Truck & Trailers"
  },
  {
    src: "/images/dirt-work/mini-excavator-transport.webp",
    alt: "Red Dirt mini excavator being hauled to a local job",
    label: "Equipment Transport"
  }
];

export default function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  }

  function goNext() {
    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <section id="gallery" className="section bg-[#f4f1ec] text-[#171717]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#9f3a2a]">
            Recent Work
          </p>

          <h2 className="font-[var(--font-heading)] text-5xl font-bold uppercase leading-[0.9] text-[#171717] md:text-6xl">
            See The Work For Yourself.
          </h2>

          <p className="mt-5 text-lg leading-8 text-black/62">
            Dirt work, excavation, brush cutting, hauling, and cleanup from real
            jobs around our area. Here is a closer look at the work we do.
          </p>
        </div>

        <FadeIn className="mt-12">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-black shadow-2xl">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1200}
                height={800}
                className="aspect-[16/10] h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/85 to-transparent p-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d8c2a5]">
                    Red Dirt Property Services LLC
                  </p>
                  <h3 className="mt-1 font-[var(--font-heading)] text-3xl font-bold uppercase text-white">
                    {activeImage.label}
                  </h3>
                  <p className="mt-1 text-xs text-white/80" aria-live="polite">
                    Photo {activeIndex + 1} of {galleryImages.length}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goPrevious}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-xl font-black text-white transition hover:bg-[#9f3a2a]"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-xl font-black text-white transition hover:bg-[#9f3a2a]"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {galleryImages.slice(0, 5).map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-xl border text-left transition ${
                    activeIndex === index
                      ? "border-[#9f3a2a] ring-2 ring-[#9f3a2a]/30"
                      : "border-black/10"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={320}
                    className="aspect-[16/9] h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 text-xs font-black uppercase tracking-wide text-white">
                    {image.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {galleryImages.slice(5).map((image, index) => {
              const realIndex = index + 5;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(realIndex)}
                  className={`group relative overflow-hidden rounded-xl border text-left transition ${
                    activeIndex === realIndex
                      ? "border-[#9f3a2a] ring-2 ring-[#9f3a2a]/30"
                      : "border-black/10"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={320}
                    className="aspect-[4/3] h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 text-xs font-black uppercase tracking-wide text-white">
                    {image.label}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}