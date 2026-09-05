import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  variant: Project["visual"];
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

export function ProjectVisual({ variant }: ProjectVisualProps) {
  return (
    <div
      className={`aspect-[4/3] overflow-hidden border border-border bg-bg ${variantStyles[variant]}`}
      aria-hidden="true"
    >
      <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,transparent_0_30%,rgba(250,250,249,0.72)_72%)]" />
    </div>
  );
}
