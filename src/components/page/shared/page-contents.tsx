import { AppHead } from "@/components/common/app-head";
import { MainContainer, TopContainer } from "@/components/container/container";
import Search from "@/components/search/search";
import FilterContents from "./filter-contens";
import { ContentsHeading } from "./heading-contents";
import Contents from "../contents/contents";
import type { ContainerProps } from "@/components/container/container";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useState } from "react";
import Aside from "@/components/aside/aside";
import ContentSearchAside from "@/components/aside/contentsearch-aside";
import { DownloadAside } from "@/components/aside/download-aside";

export type ContentsPageProps = {
  className?: string;
  contentType?: string;
  selectedSort?: string;
  selectedView?: string;
  setSelectedSort?: (value: string) => void;
  setSelectedView?: (value: string) => void;
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
      <MainContainer className="flex justify-between gap-10 py-6 md:py-10">
        <div className="w-full space-y-8 lg:max-w-3xl">
          <FilterContents
            contentType={props.contentType}
            selectedSort={props.selectedSort}
            setSelectedSort={props.setSelectedSort}
            selectedView={props.selectedView}
            setSelectedView={props.setSelectedView}
          />
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
        <Aside>
          <div>
            <ContentSearchAside contentType={props.contentType} />
            <DownloadAside />
          </div>
        </Aside>
      </MainContainer>
    </div>
  );
}

export default function ContentsPage({
  contentType,
}: ContentsPageProps): JSX.Element {
  const [selectedSort, setSelectedSort] = useState("pop_desc");
  const [selectedView, setSelectedView] = useState("grid");

  return (
    <main>
      <Contents
        contentType={contentType}
        setSelectedSort={setSelectedSort}
        selectedSort={selectedSort}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
    </main>
  );
}
