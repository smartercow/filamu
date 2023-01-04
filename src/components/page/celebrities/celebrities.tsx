import { Celebrities } from "@/lib/data/celebs";
import { useState } from "react";
import { ContentsContainer, ContentsPageProps } from "../shared/page-contents";
import cn from "clsx";
import Link from "next/link";
import { CustomIcon } from "@/components/ui/custom-icon";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function CelebritiesPage({
  contentType,
}: ContentsPageProps): JSX.Element {
  const [selectedSort, setSelectedSort] = useState("pop_desc_celeb");
  const [selectedView, setSelectedView] = useState("list");

  const router = useRouter();

  const handleRef = (link: string) => {
    router.push(`/celebrities/${link}`);
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
        {Celebrities.sort((a, b) => {
          if (selectedSort === "pop_desc_celeb") {
            return b.popularity - a.popularity;
          } else if (selectedSort === "pop_asc_celeb") {
            return a.popularity - b.popularity;
          } else if (selectedSort === "mostroles_desc") {
            return b.roles - a.roles;
          } else if (selectedSort === "mostroles_asc") {
            return a.roles - b.roles;
          }
        }).map((celeb) => (
          <div
            className={cn(
              "group relative w-full",
              selectedView === "list" ? " flex" : ""
            )}
            key={celeb.id}
          >
            <div className="min-w-fit">
              <Link href={`/celebrities/${celeb.category}/${celeb.celebId}`}>
                <img
                  src={celeb.image}
                  alt={celeb.name}
                  className={cn(
                    "rounded-sm object-cover object-top",
                    selectedView === "list" ? "max-h-40 w-32" : "h-full w-auto"
                  )}
                />
              </Link>
            </div>
            {selectedView === "list" && (
              <div className="dosis w-full bg-main-blue-sec py-0 pl-8 md:py-4">
                <div className="space-y-2">
                  <Link
                    href={`/celebrities/${celeb.category}/${celeb.celebId}`}
                  >
                    <h2 className="text-base font-bold uppercase line-clamp-2 md:text-lg">
                      {celeb.name}
                    </h2>
                  </Link>
                  <div>
                    <p className="text-sm font-semibold uppercase text-main-gray">
                      {celeb.category}, {celeb.country}
                    </p>
                  </div>
                  <p className="text-main-gray line-clamp-2">
                    {celeb.biography}
                  </p>
                </div>
              </div>
            )}
            {selectedView === "grid" && (
              <div className="dosis hover-animation absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/90 opacity-0 group-hover:opacity-100">
                <div className="space-y-3 p-2 text-center">
                  <h1 className="text-lg font-bold uppercase text-white line-clamp-2">
                    {celeb.name}
                  </h1>
                  <p className="text-left text-sm text-main-gray line-clamp-2 md:text-base md:line-clamp-3">
                    {celeb.biography}
                  </p>
                  <div>
                    <Button
                      hasIcon
                      btnIcon="ChevronRightIcon"
                      className="py-2 px-3 md:px-4"
                      textStyle="text-xs"
                      onClick={() =>
                        handleRef(`${celeb.category}/${celeb.celebId}`)
                      }
                    >
                      See more
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
