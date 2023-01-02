/* eslint-disable @next/next/no-img-element */
import { MediaOverviewProps } from "@/lib/datat";
import { SwiperSlide } from "swiper/react";

export default function MediaSwiperSlide({
  title,
  embedId,
  duration,
  thumbnail,
}: MediaOverviewProps): JSX.Element {
  return (
    <div className="flex gap-5 px-8 py-4 sm:px-12 md:px-5">
      <div className="min-w-[95px]">
        <img src={thumbnail} height={40} width={95} alt={title} />
      </div>
      <div className="w-full">
        <h4 className="min-w-[250px] truncate font-semibold">{title}</h4>
        <p className="text-sm text-main-gray">{duration}</p>
      </div>
    </div>
  );
}
