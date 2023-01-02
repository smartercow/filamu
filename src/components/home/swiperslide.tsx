/* eslint-disable @next/next/no-img-element */
import React from "react";
import cn from "clsx";
import { useWindow } from "@/lib/context/window-context";
import { CustomIcon } from "../ui/custom-icon";
import { Content } from "@/lib/data/content";

export function SlideContent(props: Content): JSX.Element {
  const { width } = useWindow();
  return (
    <div className="dosis relative">
      <div className="h-full">
        <img
          src={props.poster}
          alt={props.title}
          className="h-full w-auto object-cover"
        />
      </div>
      <div
        className="absolute bottom-0 flex w-full flex-col justify-start gap-1 bg-gradient-to-t from-black via-black/70 px-2 pb-3 
                      text-left md:px-3 md:pb-5 lg:px-6"
      >
        <div className="flex gap-2">
          {props.genres.slice(0, width < 768 ? 1 : 2).map((genre, i) => (
            <span
              key={i}
              style={{
                backgroundColor: `${genre?.color}`,
                textTransform: "uppercase",
              }}
              className="select-none rounded-[4px] px-1.5 py-0.5 text-[9px] font-semibold text-white shadow-xl xs:text-xs sm:text-xs"
            >
              <>{genre?.title}</>
            </span>
          ))}
        </div>
        <div className="mt-0 h-6 md:mt-2">
          <h5
            className={cn(
              " truncate whitespace-nowrap text-xs font-normal uppercase md:text-base md:font-semibold lg:text-lg"
            )}
          >
            {props.title}
          </h5>
        </div>
        <div className="hidden lg:inline-flex">
          <div className="category-badge flex items-center gap-1">
            <CustomIcon
              className="h-5 w-5 text-star-yellow"
              iconName="StarIcon"
            />
            <p className="text-sm font-semibold">
              <span className="text-lg md:text-xl">{props.rating}</span>/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
