import { useState } from "react";
import { OverviewHeading } from "../overview";
import type { OverviewHeadingProps } from "../overview";
import { TrendProps } from "./overview-slider";
import { Trends } from "@/lib/data/genres";

const trends = [
  { name: "#Trending", trend: Trends[0].href },
  { name: "#Popular", trend: Trends[1].href },
  { name: "#Recent", trend: Trends[2].href },
  { name: "#Top Rated", trend: Trends[3].href },
];

console.log("trends", trends[2].trend);

export default function HeadingSlider(props: TrendProps): JSX.Element {
  return (
    <div className="absolute top-0 left-0 w-full space-y-4 text-main-gray">
      <OverviewHeading title={props.title} href={props.href} />

      <div className="flex justify-between gap-1 whitespace-nowrap text-xs font-semibold xs:text-sm sm:justify-start sm:gap-5">
        {trends.map((t) => {
          if (props.trend[0] === t.trend)
            return (
              <div
                key={t.trend}
                className="flex items-center gap-1 uppercase text-secondary"
              >
                {t.name}
              </div>
            );
          else
            return (
              <div
                key={t.trend}
                onClick={() => props.setTrend(t.trend)}
                className="flex cursor-pointer items-center gap-1 uppercase text-main-gray transition-all 
                           duration-300 hover:text-secondary "
              >
                {t.name}
              </div>
            );
        })}
      </div>
    </div>
  );
}
