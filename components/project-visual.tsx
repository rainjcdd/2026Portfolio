import Image from "next/image";

import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  variant: Project["visual"];
  image?: string;
  alt?: string;
  device?: Project["device"];
  size?: "default" | "large";
};

const variantStyles: Record<Project["visual"], string> = {
  grid: "bg-[linear-gradient(#3B5BFF_1px,transparent_1px),linear-gradient(90deg,#3B5BFF_1px,transparent_1px)] bg-[size:32px_32px]",
  system:
    "bg-[linear-gradient(135deg,#111_0_20%,transparent_20%_40%,#3B5BFF_40%_60%,transparent_60%_80%,#111_80%)]",
  orbit:
    "bg-[radial-gradient(circle_at_center,transparent_0_18%,#3B5BFF_18%_19%,transparent_19%_34%,#111_34%_35%,transparent_35%)]",
  path: "bg-[linear-gradient(120deg,transparent_0_34%,#3B5BFF_34%_36%,transparent_36%_62%,#111_62%_64%,transparent_64%)]",
  video: "bg-[linear-gradient(90deg,#111_0_31%,transparent_31%_34%,#3B5BFF_34%_66%,transparent_66%_69%,#111_69%)]",
  archive: "bg-[repeating-linear-gradient(0deg,#111_0_1px,transparent_1px_24px)]",
};

export function ProjectVisual({
  variant,
  image,
  alt = "",
  device,
  size = "default",
}: ProjectVisualProps) {
  const screen = (
    <div className={`relative h-full w-full overflow-hidden bg-white ${variantStyles[variant]}`}>
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 48vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,transparent_0_30%,rgba(250,250,249,0.72)_72%)]" />
      )}
    </div>
  );

  return (
    <div
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
      aria-hidden={image ? undefined : "true"}
    >
      {device === "phone" ? (
        <div
          className={`relative aspect-[9/19] rounded-[2rem] bg-[#111] p-[5px] shadow-[0_24px_55px_rgba(17,17,17,0.24)] sm:rounded-[2.5rem] sm:p-[7px] ${
            size === "large" ? "h-[96%]" : "h-[88%]"
          }`}
        >
          <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-white sm:rounded-[2.15rem]">
            <div className="absolute left-1/2 top-2 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-[#111] sm:h-4 sm:w-16" />
            {screen}
          </div>
        </div>
      ) : device === "desktop" ? (
        <div
          className={`overflow-hidden rounded-lg border-[5px] border-[#222] bg-[#222] shadow-[0_24px_55px_rgba(17,17,17,0.2)] sm:rounded-xl sm:border-[7px] ${
            size === "large" ? "w-[96%]" : "w-[88%]"
          }`}
        >
          <div className="flex h-5 items-center gap-1.5 bg-[#222] px-2 sm:h-7 sm:px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          </div>
          <div className="aspect-[16/9]">{screen}</div>
        </div>
      ) : (
        screen
      )}
    </div>
  );
}
