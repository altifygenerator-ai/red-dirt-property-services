# Red Dirt Property Services — Recent Job Photo Update

For `altifygenerator-ai/red-dirt-property-services` on `master`.

## Included
- Nine optimized WebP photos from the newly supplied cleanout/haul-off and property-clearing work.
- Replaces only `src/components/GalleryPreview.tsx` and adds the nine images under `public/images/recent/`.
- New category filters, big-photo viewer, scrollable thumbnails, before / after descriptions, and accessible controls.
- Keeps existing logo, site colors, routes, quote flow, and other gallery photos.
- Photos are original user submissions resized and encoded for fast delivery; no generated imagery.

## Apply
1. Extract this ZIP in the ROOT of the local `red-dirt-property-services` repository, allowing the included component to overwrite the existing component.
2. Review the diff; commit and push to `master` to start your normal Vercel production build.
3. Check the homepage gallery on desktop and mobile when Vercel says READY.

IMPORTANT: The three new reviews and the 9-review score were already committed directly to GitHub in this conversation. This ZIP is for the photo binary assets and the corresponding gallery presentation.

There are multiple photographic angles of the job; the before/after views are not represented as perfectly aligned shots.

## Rollback
Revert only the commit containing the new GalleryPreview component and images. No database migrations or environment variables are involved.
