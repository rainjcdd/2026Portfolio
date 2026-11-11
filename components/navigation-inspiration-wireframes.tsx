import Image from "next/image";

const wireframes = [
  { file: "02", height: 1357, x: 1038, y: 94, width: 1427, cropHeight: 1225, callouts: [[1760, 177], [1192, 694.5], [2137, 652.5]], alt: "Original personalization-focused desktop navigation, mega menu, and inspiration-focused mobile navigation, including numbered callouts." },
  { file: "03", height: 1404, x: 982, y: 137, width: 1478, cropHeight: 1178, callouts: [[1031, 295], [1219, 855], [1776, 668]], alt: "Original inspiration-focused desktop navigation, produce mega menu, and personalized mobile navigation, including numbered callouts." },
  { file: "04", height: 1405, x: 1180, y: 225, width: 1015, cropHeight: 928, callouts: [[1233, 325.5], [1230, 563], [1804, 679]], alt: "Original mega menu and tab approach wireframes showing shopping, savings, and category hierarchy, including numbered callouts." },
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
        <svg
          viewBox={`0 0 ${frame.width} ${frame.cropHeight}`}
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {frame.callouts.map(([x, y], index) => (
            <g key={index} transform={`translate(${x - frame.x} ${y - frame.y})`}>
              <circle r={44.5} fill="#00c81d" />
              <text textAnchor="middle" dy=".35em" fill="#005653" fontFamily="Arial, sans-serif" fontSize={27} fontWeight={700}>
                {index + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </figure>
  );
}
