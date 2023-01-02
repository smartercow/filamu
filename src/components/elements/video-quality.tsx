import cn from "clsx";

type VideoQualityProps = {
  className?: string;
  colored?: boolean;
};

export function VideoQuality({ className, colored }: VideoQualityProps) {
  return (
    <span
      className={cn(
        "video-quality whitespace-nowrap",
        colored ? "bg-main-yellow text-black" : "bg-black/80 text-white",
        className
      )}
    >
      HD 720
    </span>
  );
}
