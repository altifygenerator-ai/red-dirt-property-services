import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="rd-review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }, (_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  );
}

export default function GoogleReviews() {
  const reviews = siteData.googleReviews;

  return (
    <section className="rd-reviews-section" aria-label="Red Dirt Google reviews">
      <div className="container">
        <FadeIn className="rd-reviews-head">
          <div>
            <p className="eyebrow">Google Reviews</p>
            <h2>Local Folks Back The Work.</h2>
          </div>

          <div className="rd-reviews-score" aria-label="100 percent 5 star Google reviews">
            <span className="rd-reviews-score-stars">★★★★★</span>
            <strong>{siteData.reviewStats.label}</strong>
            <span>
              {siteData.reviewStats.reviewCount} Google reviews with a 5-star average.
            </span>
          </div>
        </FadeIn>
      </div>

      <div className="rd-review-marquee" aria-label="Scrolling customer reviews">
        <div className="rd-review-track">
          {reviews.map((review) => (
            <article className="rd-review-card" key={review.name}>
              <div className="rd-review-card-top">
                <Stars rating={review.rating} />
                <span>{review.source}</span>
              </div>
              <p>“{review.text}”</p>
              <footer>
                <strong>{review.name}</strong>
                <span>Google review</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
