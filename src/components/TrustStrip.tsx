const items = [
  "100% 5-Star Google Reviews",
  "Locally Owned",
  "Free Estimates",
  "Truck & Trailer Ready",
  "Serving Rural Arkansas",
  "Straightforward Quotes",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-[#211915]">
      <div className="container grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-white/82"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
