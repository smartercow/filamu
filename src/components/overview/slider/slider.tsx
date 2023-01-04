import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { useWindow } from "@/lib/context/window-context";
import { SlideContent } from "./swiperslide-slider";
import { contentData } from "@/lib/data/content";
import { useState } from "react";
import { Trends } from "@/lib/data/genres";
import HeadingSlider from "./heading-slider";

type OverviewProps = {
  title: string;
  href: string;
  category: string;
};

export type TrendProps = {
  title: string;
  href: string;
  noLink?: boolean;
  trend: string;
  setTrend: (trend: {}) => void;
};

export function OverviewSlider({
  title,
  href,
  category,
}: OverviewProps): JSX.Element {
  const { width } = useWindow();
  const [trend, setTrend] = useState(Trends[0].href);

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
    <>
      <div className="w-full">
        <Swiper
          slidesPerView={width < 560 ? 2 : width < 768 ? 3 : 4}
          spaceBetween={20}
          autoplay={{
            delay:
              category === "recommended"
                ? 4000
                : category === "recommended"
                ? 6300
                : 7000,
            // disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          {...customPagination}
          className="overview-slider relative"
        >
          {contentData
            .filter(
              (content) =>
                (content.highlight === category &&
                  content.trends[0].href === trend) ||
                content.trends[1]?.href === trend ||
                content.trends[2]?.href === trend ||
                content.trends[3]?.href === trend
            )
            .map(({ ...slide }) => (
              <SwiperSlide key={slide.id}>
                <SlideContent {...slide} />
              </SwiperSlide>
            ))}

          <HeadingSlider
            title={title}
            href={href}
            trend={trend}
            setTrend={setTrend}
          />

          <div className="absolute bottom-0 h-7 w-full sm:top-12 sm:right-0 sm:w-40">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
