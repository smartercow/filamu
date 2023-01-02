import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { OverviewHeading } from "../overview";
import MediaSwiperSlide from "./swiperslide-media";
import { mediaData } from "@/lib/datat";
import YoutubeEmbed from "@/lib/helpers/youtube-embed";
import { MainContainer } from "../../container/container";
import { HeroIcon } from "../../ui/hero-icon";

export function OverviewMedia(): JSX.Element {
  const nav = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <MainContainer
      mcn="bg-main-blue-tet py-6 sm:py-8 md:py-14 dosis"
      className="flex flex-col gap-6"
    >
      <OverviewHeading title="Trailers" href="trailers" />
      <div className="flex flex-col md:flex-row">
        <YoutubeEmbed
          title="Movie"
          embedId="_Z3QKkl1WyM"
          height="100%"
          width="100%"
          className="h-80 w-full flex-grow md:h-[420px]"
        />

        <Swiper
          direction={"vertical"}
          slidesPerView={4}
          spaceBetween={5}
          watchSlidesProgress={true}
          modules={[Navigation]}
          {...nav}
          className="media-slider relative max-h-[420px] w-full flex-grow-0 bg-main-blue-for md:w-[540px]"
        >
          {mediaData.map(({ ...data }) => (
            <SwiperSlide
              key={data.embedId}
              style={{ maxHeight: "85px", zIndex: 1 }}
            >
              <MediaSwiperSlide {...data} />
            </SwiperSlide>
          ))}

          <div className="group absolute top-0 z-20 h-8 w-full cursor-pointer bg-main-blue-for">
            <div className="swiper-button-prev flex items-center justify-center">
              <HeroIcon
                iconName="ChevronUpIcon"
                className="h-8 w-8 group-hover:text-secondary"
              />
            </div>
          </div>
          <div className="group absolute bottom-0 z-20 h-8 w-full cursor-pointer bg-main-blue-for">
            <div className="swiper-button-next flex items-center justify-center">
              <HeroIcon
                iconName="ChevronDownIcon"
                className="h-8 w-8 group-hover:text-secondary"
              />
            </div>
          </div>
        </Swiper>
      </div>
    </MainContainer>
  );
}
