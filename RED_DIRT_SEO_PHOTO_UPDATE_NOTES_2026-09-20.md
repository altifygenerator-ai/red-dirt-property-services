# Red Dirt SEO + dirt-work photo pass — 2026-09-20

Drop-in overlay for `altifygenerator-ai/red-dirt-property-services` (`master`).

## Photo check
The user supplied nine JPEG files. Two are byte-for-byte identical, leaving eight unique job photos.

Current Git already contains optimized WebP versions of those dirt-work / mini-excavator shots under:

- `public/images/dirt-work/excavator-digging-1.webp`
- `public/images/dirt-work/excavator-digging-2.webp`
- `public/images/dirt-work/excavator-loading-trailer.webp`
- `public/images/dirt-work/excavation-hole-1.webp`
- `public/images/dirt-work/excavation-hole-2.webp`
- `public/images/dirt-work/stump-root-excavation-1.webp`
- `public/images/dirt-work/stump-root-excavation-2.webp`
- `public/images/dirt-work/mini-excavator-transport.webp`

The current live `/dirt-work` page is rendering all eight with descriptive alt text through Next Image, so the overlay intentionally does not duplicate the image binaries.

## SEO changes
- Strengthen the generic `/dirt-work` page around:
  - mini excavator work
  - small excavation
  - driveway grading / touch-ups
  - drainage ditches
  - culvert work
  - washout repair
  - root excavation
- Keep the existing eight-photo recent-work section and two job videos.
- Add `/amity-dirt-work` with unique local copy and existing real-job images.
- Add `/glenwood-dirt-work` with unique local copy and existing real-job images.
- Link Amity area -> Amity dirt work.
- Expand the Glenwood area page to include mini excavator / dirt work and link to the new Glenwood dirt-work page.
- Update homepage metadata to include mini excavator / driveway / dirt-work intent.
- Expand LocalBusiness structured data offers for mini excavator, driveway grading, and drainage/culvert work.
- Update sitemap maintenance date to September 20, 2026.
- Add the two new dirt-work URLs to the sitemap.
- Rebalance sitemap priorities so Amity/Glenwood and core services are not treated as less important than every Hot Springs service page.

## Images
No second copies of the uploaded originals are included because the current repo already has the optimized versions in production. This avoids unnecessary repo weight and duplicate assets.
