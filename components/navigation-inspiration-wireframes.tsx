import Image from "next/image";

const wireframes = [
  { file: "02", height: 1357, x: 1038, y: 94, width: 1427, cropHeight: 1225, alt: "Original personalization-focused desktop navigation, mega menu, and inspiration-focused mobile navigation, including numbered callouts." },
  { file: "03", height: 1404, x: 982, y: 137, width: 1478, cropHeight: 1178, alt: "Original inspiration-focused desktop navigation, produce mega menu, and personalized mobile navigation, including numbered callouts." },
  { file: "04", height: 1405, x: 1180, y: 225, width: 1015, cropHeight: 928, alt: "Original mega menu and tab approach wireframes showing shopping, savings, and category hierarchy, including numbered callouts." },
];

export function NavigationInspirationWireframes({ goal = 0 }: { goal?: number }) {
  const frame = wireframes[goal];
  return (
    <figure aria-label="Original navigation wireframes" className="bg-white p-5 lg:p-8">
      <div className="relative overflow-hidden" style={{ aspectRatio: `${frame.width}/${frame.cropHeight}` }}>
        {/* Display the original wireframes without the slide's prose or footer. */}
        <Image
          src={`/images/projects/navigation-redesign/exploration-${frame.file}.png`}
          alt={frame.alt}
          width={2500}
          height={frame.height}
          sizes="(max-width: 767px) 220vw, 110vw"
          className="absolute h-auto max-w-none"
          style={{ left: `${-frame.x / frame.width * 100}%`, top: `${-frame.y / frame.cropHeight * 100}%`, width: `${2500 / frame.width * 100}%` }}
        />
      </div>
    </figure>
  );
}
