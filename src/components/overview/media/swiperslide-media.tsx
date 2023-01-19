/* eslint-disable @next/next/no-img-element */
import { MediaOverviewProps } from "@/lib/data/datat";

export default function MediaSwiperSlide({
  title,
  embedId,
  duration,
  thumbnail,
}: MediaOverviewProps): JSX.Element {
  return (
    <div className="cursor-pointer px-8 py-4 sm:px-12 md:px-5">
      <div className="flex gap-5">
        <div className="min-w-[95px]">
          <img
            src={thumbnail}
            alt={title}
            className="h-14 w-full object-cover"
          />
        </div>
        <div className="">
          <h4 className="truncate font-semibold md:max-w-[200px]">{title}</h4>
          <p className="text-sm text-main-gray">{duration}</p>
        </div>
      </div>
    </div>
  );
}
