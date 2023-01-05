import { useRouter } from "next/router";
import { contentData } from "@/lib/data/content";
import { Button } from "@/components/ui/button";
import { ContentsContainer, ContentsPageProps } from "../shared/page-contents";
import cn from "clsx";
import { CustomIcon } from "@/components/ui/custom-icon";
import Link from "next/link";

export default function Contents({
  contentType,
  selectedSort,
  selectedView,
  setSelectedSort,
  setSelectedView,
}: ContentsPageProps): JSX.Element {
  const router = useRouter();

  const handleRef = (video_id: string) => {
    router.push(`/${contentType}/title/${video_id}`);
  };

  return (
    <ContentsContainer
      contentType={contentType}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
      selectedView={selectedView}
      setSelectedView={setSelectedView}
    >
      <div
        className={cn(
          "m-auto grid gap-4 md:gap-7 lg:gap-10",
          selectedView === "grid"
            ? " grid-cols-2 md:grid-cols-4"
            : "grid-cols-1"
        )}
      >
        {contentData
          .filter((content) => content.type === contentType)
          .sort((a, b) => {
            if (selectedSort === "pop_desc_content") {
              return b.popularity - a.popularity;
            } else if (selectedSort === "pop_asc_content") {
              return a.popularity - b.popularity;
            } else if (selectedSort === "rat_desc_content") {
              return b.rating - a.rating;
            } else if (selectedSort === "rat_asc_content") {
              return a.rating - b.rating;
            } else if (selectedSort === "rda_desc_content") {
              return b.release - a.release;
            } else if (selectedSort === "rda_asc_content") {
              return a.release - b.release;
            } /* else {
              return;
            } */
          })
          .map((content) => (
            <div
              className={cn(
                "group relative w-full",
                selectedView === "list" ? " flex" : ""
              )}
              key={content.id}
            >
              <div className="min-w-fit">
                <Link href={`/${contentType}/title/${content.video_id}`}>
                  <img
                    src={content.poster}
                    alt={content.title}
                    className={cn(
                      "rounded-sm object-cover object-top",
                      selectedView === "list"
                        ? "max-h-56 w-40"
                        : "h-full w-auto"
                    )}
                  />
                </Link>
              </div>
              {selectedView === "list" && (
                <div className="dosis w-full py-0 pl-8 md:py-4">
                  <div>
                    <Link href={`/${contentType}/title/${content.video_id}`}>
                      <h2 className="text-base font-bold uppercase line-clamp-2 md:text-lg">
                        {content.title}{" "}
                        <span className="text-main-gray">
                          {content.release}
                        </span>
                      </h2>
                    </Link>
                    <div className="flex items-center gap-1">
                      <CustomIcon
                        className="h-5 w-5 text-star-yellow"
                        iconName="StarIcon"
                      />
                      <p className="text-sm font-semibold text-main-gray">
                        <span className="text-lg text-white md:text-xl">
                          {content.rating}
                        </span>
                        /10
                      </p>
                    </div>
                    <p className="text-main-gray line-clamp-2">
                      {content.description}
                    </p>
                  </div>
                  <div className="mt-3 w-full border-t border-main-gray pt-3">
                    <div>
                      <p className="text-main-gray">
                        Duration:{" "}
                        <span className="text-white">
                          {content.duration} min
                        </span>
                      </p>
                      <p className="text-main-gray">
                        Director:{" "}
                        <span className="text-main-blue-light">
                          {content.directors[0]}
                          <span className="hidden md:inline">
                            {content.directors.length > 1 &&
                              `, ${content.directors[1]}`}
                          </span>
                        </span>
                      </p>
                      <p className="text-main-gray">
                        Actors:{" "}
                        <span className="text-main-blue-light">
                          {content.actors[0]}, {content.actors[1]}
                          <span className="hidden md:inline">
                            , {content.actors[2]}
                            {content.actors.length > 3 &&
                              `, ${content.actors[3]}`}
                            {content.genres.length > 4 &&
                              `, ${content.actors[4]}`}
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {selectedView === "grid" && (
                <div className="dosis hover-animation absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/90 opacity-0 group-hover:opacity-100">
                  <div className="space-y-3 p-2 text-center">
                    <h1 className="text-lg font-bold uppercase text-white line-clamp-2">
                      {content.title}
                    </h1>
                    <p className="text-left text-sm text-main-gray line-clamp-2 md:text-base md:line-clamp-3">
                      {content.description}
                    </p>
                    <div>
                      <Button
                        hasIcon
                        btnIcon="ChevronRightIcon"
                        className="py-2 px-3 md:px-4"
                        textStyle="text-xs"
                        onClick={() => handleRef(content.video_id)}
                      >
                        Watch now
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </ContentsContainer>
  );
}
