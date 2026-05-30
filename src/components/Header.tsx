import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

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
          <Link href="#services">Services</Link>
          <Link href="#quote">Pricing</Link>
          <Link href="#area">Service Area</Link>
          <Link href="#about">About</Link>
        </nav>

        <Link href={`tel:${siteData.phone}`} className="btn btn-primary hidden sm:inline-flex">
          Call / Text
        </Link>
      </div>
    </header>
  );
}