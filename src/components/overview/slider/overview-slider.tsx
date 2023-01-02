import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { slides } from "@/lib/data";
import { useWindow } from "@/lib/context/window-context";
import { SlideContent } from "./highlight-slider";
import HeadingSlider from "./heading-slider";

type OverviewProps = {
  title: string;
  href: string;
  category: string;
  from: number;
  to: number;
};

export function OverviewSlider({
  title,
  href,
  category,
  from,
  to,
}: OverviewProps): JSX.Element {
  const { width } = useWindow();

  const customPagination = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index: number, className: string) => {
        return `<span class="${className}"></span>`;
      },
    },
  };

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={width < 560 ? 2 : width < 768 ? 3 : 4}
        spaceBetween={20}
        autoplay={{
          delay: 10000,
          // disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        {...customPagination}
        className="overview-slider relative"
      >
        {slides
          .slice(from, to)
          .reverse()
          .map(({ ...slide }) => (
            <SwiperSlide key={slide.id}>
              <SlideContent {...slide} />
            </SwiperSlide>
          ))}

        <HeadingSlider title={title} href={href} />

        <div className="absolute bottom-0 h-7 w-full sm:top-12 sm:right-0 sm:w-40">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
