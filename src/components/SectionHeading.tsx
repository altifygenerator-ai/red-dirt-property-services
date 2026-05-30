type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-lg leading-8 text-white/68">{text}</p> : null}
    </div>
  );
}