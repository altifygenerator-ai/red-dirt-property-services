import Image from "next/image";
import FadeIn from "@/components/FadeIn";

import type { RecentWorkMedia } from "@/types/site";

type RecentWorkMediaSectionProps = {
  media: RecentWorkMedia;
};

export default function RecentWorkMediaSection({
  media,
}: RecentWorkMediaSectionProps) {
  return (
    <section className="section bg-[#f4f1ec] text-[#171717]">
      <div className="container">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#9f3a2a]">
            {media.eyebrow}
          </p>
          <h2 className="font-[var(--font-heading)] text-5xl font-bold uppercase leading-[0.9] md:text-6xl">
            {media.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/62">{media.text}</p>
        </FadeIn>

        {media.videos?.length ? (
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {media.videos.map((video, index) => (
              <FadeIn
                key={video.src}
                delay={index * 0.04}
                className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-black shadow-xl"
              >
                <video
                  className="aspect-[9/16] max-h-[620px] w-full bg-black object-cover"
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="metadata"
                />
                <div className="border-t border-white/10 bg-[#171717] px-5 py-4 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d8c2a5]">
                    Red Dirt Property Services LLC
                  </p>
                  <h3 className="mt-1 text-2xl font-bold uppercase">
                    {video.label}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : null}

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {media.images.map((image, index) => (
            <FadeIn
              key={image.src}
              delay={index * 0.025}
              className="group relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-black shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1067}
                className="aspect-[3/4] h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pb-4 pt-10">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white">
                  {image.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
