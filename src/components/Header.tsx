import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

const serviceLinks = [
  {
    label: "Services Overview",
    href: "/#services",
    description: "Property cleanup, hauling, cleanouts, and light demo",
  },
  {
    label: "Bush Hogging",
    href: "/bush-hogging",
    description: "Brush cutting, rough mowing, and rural property cleanup",
  },
  {
    label: "Cleanouts",
    href: "/cleanouts",
    description: "Rental cleanouts, estate cleanouts, junk removal, and hauling",
  },
  {
    label: "Light Demolition",
    href: "/light-demolition",
    description: "Shed removal, fence removal, small structures, and debris hauling",
  },
];

const areaLinks = [
  {
    label: "Glenwood Area",
    href: "/glenwood-ar",
    description: "Property cleanup, bush hogging, hauling, and rural cleanup",
  },
  {
    label: "Hot Springs Area",
    href: "/hot-springs-ar",
    description: "Junk removal, cleanouts, hauling, and property cleanup",
  },
  {
    label: "Arkadelphia Area",
    href: "/arkadelphia-ar",
    description: "Cleanouts, hauling, junk removal, and storm cleanup",
  },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#171717]/86 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo2.png"
            alt="Red Dirt Property Services logo"
            width={85}
            height={85}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-white/78 md:flex">
          <div className="group relative">
            <Link
              href="/#services"
              className="flex items-center gap-1 py-7 transition hover:text-white"
            >
              Services
              <span className="text-xs text-[#d8c2a5] transition group-hover:rotate-180">
                ▾
              </span>
            </Link>

            <div className="invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 translate-y-3 rounded-2xl border border-white/10 bg-[#171717]/96 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 transition hover:bg-white/[0.06]"
                >
                  <span className="block text-sm font-black uppercase tracking-wide text-white">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs font-medium leading-5 text-white/52">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/#area"
              className="flex items-center gap-1 py-7 transition hover:text-white"
            >
              Areas
              <span className="text-xs text-[#d8c2a5] transition group-hover:rotate-180">
                ▾
              </span>
            </Link>

            <div className="invisible absolute left-1/2 top-full w-[320px] -translate-x-1/2 translate-y-3 rounded-2xl border border-white/10 bg-[#171717]/96 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {areaLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 transition hover:bg-white/[0.06]"
                >
                  <span className="block text-sm font-black uppercase tracking-wide text-white">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs font-medium leading-5 text-white/52">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#quote" className="transition hover:text-white">
            Pricing
          </Link>

          <Link href="/#about" className="transition hover:text-white">
            About
          </Link>
        </nav>

        <Link
          href={`tel:${siteData.phone}`}
          className="btn btn-primary hidden sm:inline-flex"
        >
          Call / Text
        </Link>
      </div>
    </header>
  );
}