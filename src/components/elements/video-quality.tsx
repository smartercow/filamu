import cn from "clsx";

type VideoQualityProps = {
  value: string;
  colored?: boolean;
  className?: string;
};

export function VideoQuality({ value, colored, className }: VideoQualityProps) {
  return (
    <span
      className={cn(
        "video-quality whitespace-nowrap",
        colored ? "bg-main-yellow text-black" : "bg-black/80 text-white",
        className
      )}
    >
      {value}
    </span>
  );
}
