"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const galleryImages = [
  {
    src: "/images/work-1.jpg",
    alt: "Red Dirt property cleanup work with equipment",
    label: "Property Cleanup",
  },
  {
    src: "/images/dump.jpg",
    alt: "Dump trailer used for hauling and cleanup work",
    label: "Dump Trailer",
  },
  {
    src: "/images/equipment-1.jpg",
    alt: "Equipment used for rural Arkansas cleanup work",
    label: "Equipment On Site",
  },
  {
    src: "/images/flatbed.jpg",
    alt: "Flatbed trailer for hauling and property work",
    label: "Flatbed Hauling",
  },
  {
    src: "/images/truck-1.png",
    alt: "Red Dirt truck and trailer setup",
    label: "Truck & Trailer",
  },
  {
    src: "/images/truck-2.png",
    alt: "Truck and trailer ready for property hauling",
    label: "Hauling Setup",
  },
  {
    src: "/images/tractor-bush-hog.jpg",
    alt: "Tractor and bush hog for rural property cleanup",
    label: "Brush Work",
  },
  {
    src: "/images/work-2.jpg",
    alt: "Rural Arkansas property cleanup with equipment",
    label: "Rural Cleanup",
  },
  {
    src: "/images/work-3.jpg",
    alt: "Equipment clearing brush and property debris",
    label: "Cleanup Work",
  },
  {
    src: "/images/work-4.jpg",
    alt: "Finished property cleanup area",
    label: "Work In Progress",
  },
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
            Real trucks, real equipment, and real property work from around our
            area. As Red Dirt grows, this gallery will keep showing the kind of
            jobs we handle.
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
                    Red Dirt Property Services
                  </p>
                  <h3 className="mt-1 font-[var(--font-heading)] text-3xl font-bold uppercase text-white">
                    {activeImage.label}
                  </h3>
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

          <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
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