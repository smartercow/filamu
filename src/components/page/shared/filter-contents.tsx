import cn from "clsx";
import RadixSelect from "@/components/select/default-radixuiselect";
import { HeroIcon } from "@/components/ui/hero-icon";
import { ContentsPageProps } from "./page-contents";
import { Icon } from "@iconify/react";

export default function FilterContents({
  contentType,
  selectedSort,
  selectedView,
  setSelectedSort,
  setSelectedView,
}: ContentsPageProps): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-main-gray/60 md:flex-row md:border-y">
      <div>
        <p>
          Found{" "}
          <span className="font-medium text-main-blue-light">
            {contentType === "movie"
              ? "1409 movies"
              : contentType === "tv-serie"
              ? "582 TV series"
              : contentType === "tv-show"
              ? "692 TV shows"
              : contentType === "celebrities" && "1178 celebrities"}{" "}
          </span>
          in total
        </p>
      </div>
      <div className="flex items-center border-y border-main-gray/60 md:border-none">
        <div className="border-r border-main-gray/60 py-2 pr-4">
          <p className="text-main-gray">Sort by:</p>
        </div>
        <RadixSelect
          contentType={contentType}
          setSelectedSort={setSelectedSort}
          selectedSort={selectedSort}
        />
        <div className="h-10 border-x border-main-gray/60 py-2 px-4">
          <button className="" onClick={() => setSelectedView("list")}>
            <HeroIcon
              iconName="ListBulletIcon"
              className={cn(
                "h-[24px] w-[24px] text-main-gray",
                selectedView === "list" ? "text-secondary" : "text-main-gray"
              )}
            />
          </button>
        </div>
        <div className="px-4">
          <button className="h-10" onClick={() => setSelectedView("grid")}>
            <Icon
              icon="ion:apps-sharp"
              className={cn(
                "h-[18px] w-[18px]",
                selectedView === "grid" ? "text-secondary" : "text-main-gray"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
