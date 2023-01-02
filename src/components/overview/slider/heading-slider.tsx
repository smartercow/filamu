import { useState } from "react";
import { OverviewHeading } from "../overview";
import type { OverviewHeadingProps } from "../overview";

const trends = [
  { name: "#Popular", trend: "popular" },
  { name: "#Coming Soon", trend: "coming-soon" },
  { name: "#Top Rated", trend: "top-rated" },
  { name: "#Most Reviewed", trend: "most-reviewed" },
];

export default function HeadingSlider({
  title,
  href,
}: OverviewHeadingProps): JSX.Element {
  const [trend, setTrend] = useState("popular");
  return (
    <div className="absolute top-0 left-0 w-full space-y-4 text-main-gray">
      <OverviewHeading title={title} href={href} />

      <div className="flex justify-between gap-1 whitespace-nowrap text-xs font-semibold xs:text-sm sm:justify-start sm:gap-5">
        {trends.map((t) => {
          if (trend === t.trend)
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
                onClick={() => setTrend(t.trend)}
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
