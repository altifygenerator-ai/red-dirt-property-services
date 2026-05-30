import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111] py-10">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/images/logo2.png"
              alt="Red Dirt Property Services logo"
              width={88}
              height={88}
              className="h-20 w-20 rounded-xl object-contain"
            />

            <div>
              <p className="font-[var(--font-heading)] text-3xl font-bold uppercase leading-none text-white">
                Red Dirt
              </p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.22em] text-[#d8c2a5]">
                Property Services
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-white/48">
                {siteData.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/62 md:text-right">
            <Link href={`tel:${siteData.phone}`} className="hover:text-white">
              {siteData.phone}
            </Link>

            <Link href={`mailto:${siteData.email}`} className="hover:text-white">
              {siteData.email}
            </Link>

            <p>Based around Amity & Glenwood, Arkansas</p>

            <Link
              href="https://hometownwebservicesar.cc"
              target="_blank"
              rel="noreferrer"
              className="pt-2 text-white/36 hover:text-white/70"
            >
              Website by Hometown Web Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}