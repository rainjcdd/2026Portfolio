import Image from "next/image";

import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  variant: Project["visual"];
  image?: string;
  desktopImage?: string;
  mobileImage?: string;
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
  desktopImage,
  mobileImage,
  alt = "",
  device,
  size = "default",
}: ProjectVisualProps) {
  const renderScreen = (
    imageSizes = "(min-width: 768px) 48vw, 90vw",
    imageOverride?: string,
  ) => {
    const screenImage = imageOverride ?? image;

    return (
    <div
      className={`relative h-full w-full overflow-hidden ${
        screenImage ? "bg-[#edf3fb]" : `bg-white ${variantStyles[variant]}`
      }`}
    >
      {screenImage ? (
        <Image
          src={screenImage}
          alt={alt}
          fill
          sizes={imageSizes}
          className="scale-[1.008] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,transparent_0_30%,rgba(250,250,249,0.72)_72%)]" />
      )}
    </div>
    );
  };

  return (
    <div
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
      aria-hidden={image || desktopImage || mobileImage ? undefined : "true"}
    >
      {device === "phone" ? (
        <div
          className={`relative aspect-[9/19] rounded-[2rem] bg-[#111] p-[5px] shadow-[0_24px_55px_rgba(17,17,17,0.24)] sm:rounded-[2.5rem] sm:p-[7px] ${
            size === "large" ? "h-[96%]" : "h-[88%]"
          }`}
        >
          <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-white sm:rounded-[2.15rem]">
            <div className="absolute left-1/2 top-2 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-[#111] sm:h-4 sm:w-16" />
            {renderScreen()}
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
          <div className="aspect-[16/9]">{renderScreen()}</div>
        </div>
      ) : device === "responsive" ? (
        <div className="relative h-full w-full">
          <div className="absolute left-[3%] top-[12%] w-[84%] overflow-hidden rounded-md border-[4px] border-[#202124] bg-[#202124] shadow-[0_24px_55px_rgba(17,17,17,0.18)] sm:rounded-xl sm:border-[7px]">
            <div className="relative flex h-[33px] items-center gap-1 bg-[#202124] px-2 sm:h-[49px] sm:gap-1.5 sm:px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
              <div className="absolute left-1/2 top-1/2 flex h-4 w-[48%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/15 sm:h-6">
                <span className="hidden text-[8px] text-white/50 sm:inline">trackpoint.app</span>
              </div>
            </div>
            <div className="aspect-[16/10]">
              {renderScreen("(min-width: 768px) 70vw, 80vw", desktopImage)}
            </div>
          </div>

          <div className="absolute bottom-[1%] right-[5%] h-[calc(75%-6px)] aspect-[776/1925] rounded-[1.25rem] bg-[#111] p-[4px] shadow-[0_24px_55px_rgba(17,17,17,0.28)] sm:rounded-[2.5rem] sm:p-[7px]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.05rem] bg-white sm:rounded-[2.15rem]">
              <div className="pointer-events-none relative z-20 flex h-[22px] shrink-0 items-center justify-between bg-[#081f43] px-3 text-[5px] font-semibold text-white sm:h-[34px] sm:px-5 sm:text-[9px]">
                <span>9:41</span>
                <div className="absolute left-1/2 top-1.5 h-2.5 w-10 -translate-x-1/2 rounded-full bg-black sm:top-2 sm:h-5 sm:w-[4.5rem]" />
                <div className="flex items-center gap-1 sm:gap-1.5" aria-hidden="true">
                  <svg viewBox="0 0 16 10" className="h-1.5 w-2.5 fill-current sm:h-2 sm:w-3" aria-hidden="true">
                    <rect x="0" y="7" width="2.2" height="3" rx="0.5" />
                    <rect x="4" y="5" width="2.2" height="5" rx="0.5" />
                    <rect x="8" y="2.5" width="2.2" height="7.5" rx="0.5" />
                    <rect x="12" y="0" width="2.2" height="10" rx="0.5" />
                  </svg>
                  <svg viewBox="0 0 16 12" className="h-1.5 w-2.5 fill-current sm:h-2.5 sm:w-3.5" aria-hidden="true">
                    <path d="M8 11.5 10.2 9a3.2 3.2 0 0 0-4.4 0L8 11.5Zm-4-4.7 1.2 1.3a4.2 4.2 0 0 1 5.6 0L12 6.8a6 6 0 0 0-8 0ZM1.5 4.2l1.2 1.2a7.7 7.7 0 0 1 10.6 0l1.2-1.2a9.4 9.4 0 0 0-13 0Z" />
                  </svg>
                  <span className="relative block h-2 w-4 rounded-[2px] border border-current sm:h-2.5 sm:w-5">
                    <span className="absolute inset-[1px] right-[2px] rounded-[1px] bg-current" />
                    <span className="absolute -right-[2px] top-1/2 h-1 w-[1px] -translate-y-1/2 rounded-r bg-current" />
                  </span>
                </div>
              </div>
              <div className="-mt-5 min-h-0 flex-1">
                {mobileImage ? (
                  renderScreen("(min-width: 768px) 22vw, 30vw", mobileImage)
                ) : (
                  <div className="h-full bg-white" />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        renderScreen()
      )}
    </div>
  );
}
