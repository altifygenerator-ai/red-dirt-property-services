import FadeIn from "@/components/FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="section bg-[#211915]">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <FadeIn>
          <p className="eyebrow mb-4">About Red Dirt</p>
          <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
            Local brothers helping local property owners.
          </h2>
        </FadeIn>

        <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
          <p>
            Red Dirt Property Services was built by two brothers who live, work,
            and raise family right here in rural Arkansas.
          </p>

          <p>
            Our family has land around Amity, and most of our people are from
            right here around the Glenwood and Amity area. We understand the
            kinds of projects folks run into out here: old sheds that need to
            come down, brush that piles up, rental properties that need cleared
            out, storm mess, and hauling jobs that take more than a pickup bed.
          </p>

          <p>
            Casey handles the jobsite side with the truck, trailers, tools, and
            hands-on construction knowledge. Jake handles quotes, scheduling,
            communication, hauling know-how, and the tech side of keeping the
            business running, while helping on jobs when needed.
          </p>

          <p>
            We are not a franchise or a call center. When you reach out, you are
            talking with local people who know the area and care about doing the
            work right.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}