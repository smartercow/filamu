import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Link from "next/link";
import { useWindow } from "@/lib/context/window-context";
import { slides } from "@/lib/data";
import { SlideContent } from "./swiperslide";

export default function HomeSlider(): JSX.Element {
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
    <div className="swiper-container h-full w-full px-4 sm:px-0">
      <Swiper
        slidesPerView={width < 768 ? 3 : 4}
        spaceBetween={20}
        autoplay={{
          delay: 4000,
          // disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="swiper-wrapper home-slider relative h-full"
        {...customPagination}
      >
        {slides.map(({ ...slide }) => (
          <SwiperSlide key={slide.id}>
            <Link href={`/movies/title/${slide.id}`}>
              <SlideContent {...slide} />
            </Link>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-0 h-10 w-full">
          <div className="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </Swiper>
    </div>
  );
}
