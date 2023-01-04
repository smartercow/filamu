import { HeroIcon } from "@/components/ui/hero-icon";
import { ContentsPageProps } from "./page-contents";

export function ContentsHeading({
  contentType,
}: ContentsPageProps): JSX.Element {
  return (
    <div className="my-10 h-full space-y-5">
      <div className="text-center">
        <h1 className="dosis text-4xl font-bold uppercase">
          {contentType === "movie"
            ? "Movies list"
            : contentType === "tv-serie"
            ? "TV series list"
            : contentType === "tv-show"
            ? "TV shows list"
            : contentType === "celebrities" && "Celebrities listing"}
        </h1>
      </div>
      <div className="flex justify-center">
        <ul className="flex items-center gap-2 md:gap-3">
          <li className="uppercase text-main-blue-light">Home</li>
          <li>
            <HeroIcon
              iconName="ChevronRightIcon"
              solid
              className="h-3.5 w-3.5"
            />
          </li>
          <li className="uppercase">
            {contentType === "movie"
              ? "Movies"
              : contentType === "tv-serie"
              ? "TV series"
              : contentType === "tv-show"
              ? "TV shows"
              : contentType === "celebrities" && "Celebrities"}
          </li>
        </ul>
      </div>
    </div>
  );
}
