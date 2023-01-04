import { AppHead } from "@/components/common/app-head";
import { MainContainer, TopContainer } from "@/components/container/container";
import Search from "@/components/search/search";
import FilterContents from "./filter-contens";
import { ContentsHeading } from "./heading-contents";
import Contents from "../contents/contents";
import type { ContainerProps } from "@/components/container/container";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export type ContentsPageProps = {
  contentType?: string;
};

export function ContentsContainer(
  props: ContainerProps & ContentsPageProps
): JSX.Element {
  return (
    <div className="">
      <AppHead
        title={
          props.contentType === "movie"
            ? "Movies"
            : props.contentType === "tv-serie"
            ? "TV Series"
            : props.contentType === "tv-show"
            ? "TV Shows"
            : "Celebrities"
        }
      />
      <TopContainer>
        <Search />
        <ContentsHeading contentType={props.contentType} />
      </TopContainer>
      <MainContainer className="flex gap-10 py-10">
        <div className="space-y-8">
          <FilterContents contentType={props.contentType} />
          <>{props.children}</>
          <div className="flex w-full items-center justify-center py-3 md:py-6">
            <>
              <Button
                className="py-1.5 px-3 md:py-2 md:px-6"
                onClick={() =>
                  toast.error(
                    `Can load more ${
                      props.contentType === "movie"
                        ? "movies"
                        : props.contentType === "tv-serie"
                        ? "TV series"
                        : props.contentType === "tv-show"
                        ? "TV shows"
                        : "celebrities"
                    } because this is just a demo!`
                  )
                }
              >
                Load more
              </Button>
            </>
          </div>
        </div>
        <div className="w-72">aside her!</div>
      </MainContainer>
    </div>
  );
}

export default function ContentsPage({
  contentType,
}: ContentsPageProps): JSX.Element {
  return (
    <main>
      <Contents contentType={contentType} />
    </main>
  );
}
