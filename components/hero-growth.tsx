import type { CSSProperties } from "react";
import styles from "./hero-growth.module.css";

const leaves = [
  [88, 160, -102, .8], [97, 146, 15, .8], [65, 130, -108, .8],
  [115, 122, 22, .9], [49, 103, -115, .75], [73, 99, -98, .8],
  [105, 91, 20, .75], [131, 97, 29, .75], [83, 75, -96, .75],
  [99, 64, 5, .72], [60, 74, -95, .65], [120, 68, 20, .65],
];
const flowers = [[37, 83, .8], [63, 55, .85], [91, 35, 1], [123, 50, .85], [148, 76, .9], [139, 120, .75]];

const dustSources = [
  [90, 38], [93, 60], [89, 84], [88, 108], [90, 132], [90, 155], [89, 179], [90, 199],
  [43, 91], [53, 108], [63, 128], [77, 147], [96, 140], [113, 131], [131, 123],
  [71, 91], [67, 72], [110, 78], [122, 55], [117, 111], [132, 93], [144, 80],
  ...leaves.map(([x, y]) => [x, y]), ...flowers.map(([x, y]) => [x, y]),
];

/** Decorative seed → sprout → flowering tree → soil loop, drawn as SVG lines. */
export function HeroGrowth() {
  return (
    <div className={styles.position} aria-hidden="true">
      <div className="featured-content mx-auto w-full max-w-content">
        <svg data-hero-growth className={styles.drawing} viewBox="0 0 180 240" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <g id="hero-growth-leaf"><path d="M0 0C2-11 10-19 22-23 20-11 13-2 0 0Z" /><path d="M0 0Q11-12 19-19" strokeWidth="1.35" /></g>
            <g id="hero-growth-flower">
              <path d="M0-2C-9-12-7-21-2-19 3-18 3-9 0-2ZM2-1C7-14 16-16 17-10 17-5 8-1 2-1ZM2 2C16-1 21 5 16 9 11 12 5 7 2 2ZM-1 3C8 14 5 22 0 19-5 17-4 9-1 3ZM-3 1C-16 9-22 4-18-1-15-6-7-3-3 1Z" />
              <circle r="2.6" fill="currentColor" stroke="none" />
            </g>
          </defs>
          <g className={styles.soil} strokeWidth="1.45">
            <path d="M44 215Q65 212 88 214T136 214M53 219Q84 215 127 218M63 222Q91 220 118 222" />
            <path d="M77 213Q82 207 89 209M94 211Q102 209 108 213" />
          </g>
          <g className={styles.plant}>
            <g className={styles.stem}>
              <path pathLength="1" d="M90 211C86 191 91 175 91 155S84 118 88 96 94 62 91 36" />
              <path pathLength="1" d="M88 212C91 188 86 172 88 155S92 120 90 102" strokeWidth="1.35" />
            </g>
            <g className={styles.branches}>
              <path pathLength="1" d="M91 178C84 152 68 141 60 123S48 94 37 83M90 153C104 132 119 127 139 120M89 131C77 113 71 92 68 76S65 63 63 55M91 111C105 94 116 72 123 50M90 160C102 122 129 90 148 76" />
              <path pathLength="1" d="M87 211C79 216 72 215 66 216M92 209C96 215 105 216 114 216M89 158C77 143 66 135 60 123M91 153C104 128 126 98 143 82" strokeWidth="1.35" />
            </g>
            {leaves.map(([x, y, rotation, scale], index) => (
              <g key={index} transform={`translate(${x} ${y}) rotate(${rotation}) scale(${scale})`}>
                <g className={index % 2 ? styles.lateLeaf : styles.leaf}><use href="#hero-growth-leaf" /></g>
              </g>
            ))}
            {flowers.map(([x, y, scale], index) => (
              <g key={index} transform={`translate(${x} ${y}) scale(${scale})`}>
                <g className={index % 2 ? styles.lateFlower : styles.flower}><use href="#hero-growth-flower" /></g>
              </g>
            ))}
          </g>
          <g className={styles.dust}>
            {dustSources.map(([x, y], index) => {
              const landingX = 70 + (index * 17) % 43;
              const drift = (index % 2 ? 1 : -1) * (5 + index % 11);
              return <g key={index} transform={`translate(${x} ${y})`}>
                <g className={styles.grain} style={{
                  "--fall": `${214 - y}px`, "--half-fall": `${(214 - y) * .4}px`,
                  "--landing": `${landingX - x}px`, "--gust": `${drift}px`,
                  "--dust-delay": `${(index % 8) * .045}s`,
                } as CSSProperties}>
                  {index % 3 === 0 ? <path d="M-1.5-.7 1.5.7" strokeWidth="1.7" /> : <circle r={1 + index % 3 * .3} fill="currentColor" stroke="none" />}
                </g>
              </g>;
            })}
          </g>
          <g className={styles.seed}>
            <g transform="translate(90 208) scale(1.5) translate(-90 -208)">
            <path d="M85 212C78 209 80 201 87 200 96 197 103 203 98 208 96 211 93 207 91 210 89 213 87 214 85 212Z" />
            <path d="M83 205Q89 202 95 204" strokeWidth="1.35" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
