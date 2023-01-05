import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper as SwiperType, FreeMode, Navigation, Thumbs } from "swiper";
import { MainContainer } from "@/components/container/container";
import { mediaData } from "@/lib/datat";
import MediaSwiperSlide from "./swiperslide-media";
import YoutubeEmbed from "@/lib/helpers/youtube-embed";
import { HeroIcon } from "@/components/ui/hero-icon";
import { OverviewHeading } from "../overview";

export default function OverviewMedia() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef<SwiperType>();

  return (
    <MainContainer
      mcn="bg-main-blue-tet py-6 sm:py-8 md:py-14 dosis"
      className="space-y-6"
    >
      <OverviewHeading title="Trailers" href="trailers" />
      <div className="flex flex-col md:flex-row">
        <Swiper
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2 h-80 w-full flex-grow md:h-[420px]"
        >
          {mediaData.map((data) => (
            <SwiperSlide
              key={data.embedId}
              style={{ maxHeight: "85px", zIndex: 1 }}
            >
              <YoutubeEmbed
                title={data.title}
                embedId={data.embedId}
                height="100%"
                width="100%"
                className="h-80 w-full flex-grow md:h-[420px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="cursor-pointer">
          <div className="group z-20 h-8 w-full cursor-pointer bg-main-blue-for">
            <div
              className="flex items-center justify-center"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <HeroIcon
                iconName="ChevronUpIcon"
                className="h-8 w-8 group-hover:text-secondary"
              />
            </div>
          </div>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSwiper={setThumbsSwiper}
            direction={"vertical"}
            spaceBetween={1}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="media-slider relative max-h-[356px] w-full bg-main-blue-sec py-7 md:max-w-[370px]"
          >
            {mediaData.map(({ ...data }) => (
              <SwiperSlide key={data.embedId}>
                <MediaSwiperSlide {...data} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="group z-20 h-8 w-full cursor-pointer bg-main-blue-for">
            <div
              className="flex items-center justify-center"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <HeroIcon
                iconName="ChevronDownIcon"
                className="h-8 w-8 group-hover:text-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
