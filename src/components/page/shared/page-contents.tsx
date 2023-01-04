import { AppHead } from "@/components/common/app-head";
import { MainContainer, TopContainer } from "@/components/container/container";
import Search from "@/components/search/search";
import FilterContents from "./filter-contens";
import { ContentsHeading } from "./heading-contents";
import Contents from "../contents/contents";
import type { ContainerProps } from "@/components/container/container";

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
            : "TV Shows"
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
