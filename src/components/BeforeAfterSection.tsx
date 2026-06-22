import Image from "next/image";

const cleanupPhotos = [
  {
    label: "Before",
    title: "Heavy Overgrowth Around the Home",
    text: "Tall weeds, brush, and junk starting to take over the usable yard space.",
    image: "/beforeafter/before-1.jpeg",
  },
  {
    label: "Progress",
    title: "Opened Up Yard Space",
    text: "Brush knocked down and the area opened back up for access around the property.",
    image: "/beforeafter/after-1.jpeg",
  },
  {
    label: "Before",
    title: "Overgrown Side Access",
    text: "Growth along the home made it harder to walk, work, or maintain the property.",
    image: "/beforeafter/before-2.jpeg",
  },
  {
    label: "Progress",
    title: "Cut Back Brush Line",
    text: "The back edge was cut down and cleaned up so the property could be managed again.",
    image: "/beforeafter/after-2.jpeg",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="section before-after-section" id="before-after">
      <div className="container">
        <div className="before-after-head">
          <div>
            <p className="eyebrow">Recent Cleanup Work</p>
            <h2>Before & After Property Cleanup</h2>
          </div>

          <p className="text-muted">
            Overgrown yards, brush, junk, and neglected areas can get out of
            hand fast. Red Dirt Property Services helps cut it back, clean it
            up, and make the property usable again.
          </p>
        </div>

        <div className="before-after-grid">
          {cleanupPhotos.map((photo) => (
            <article className="before-after-card" key={photo.image}>
              <div className="before-after-image">
                <Image
                  src={photo.image}
                  alt={`${photo.label}: ${photo.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <span
                  className={
                    photo.label === "Before"
                      ? "photo-badge badge-before"
                      : "photo-badge badge-after"
                  }
                >
                  {photo.label}
                </span>
              </div>

              <div className="before-after-content">
                <h3>{photo.title}</h3>
                <p>{photo.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="before-after-cta">
          <div>
            <p className="eyebrow">Need a place cleaned up?</p>
            <h3>Send a few photos and we can take a look.</h3>
            <p>
              Brush cutting, junk removal, cleanouts, light demolition, and
              rough property cleanup for homes, lots, rentals, and rural
              properties.
            </p>
          </div>

          <div className="before-after-actions">
            <a className="btn btn-primary" href="tel:8702604536">
              Call for a Quote
            </a>
            <a className="btn btn-secondary" href="#contact">
              Send Photos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}