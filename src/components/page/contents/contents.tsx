import { MainContainer, TopContainer } from "@/components/container/container";
import { contentData } from "@/lib/data/content";
import Search from "@/components/search/search";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type ContentsProps = {
  contentType: string;
};

export default function Contents({ contentType }: ContentsProps): JSX.Element {
  const router = useRouter();

  const handleRef = (video_id: string) => {
    router.push(`/${contentType}/title/${video_id}`);
  };

  return (
    <main>
      <TopContainer>
        <Search />
      </TopContainer>
      <MainContainer className="dosis bg-main -mt-10 space-y-5 py-6">
        <>
          <h1 className="text-2xl font-bold uppercase">All {contentType}s</h1>
        </>
        <div className="grid grid-cols-4 gap-8">
          {contentData
            .filter((content) => content.type === contentType)
            .map((content) => (
              <div className=" group relative max-w-[230px]" key={content.id}>
                <div className="w-full">
                  <img
                    src={content.poster}
                    alt={content.title}
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div className="dosis hover-animation absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100">
                  <div className="space-y-3 p-2 text-center">
                    <h1 className="text-lg font-semibold text-white line-clamp-2 md:text-2xl">
                      {content.title}
                    </h1>
                    <p className="text-left text-sm text-main-gray line-clamp-2 md:text-base md:line-clamp-3 lg:line-clamp-4">
                      {content.description}
                    </p>
                    <div>
                      <Button
                        hasIcon
                        btnIcon="ChevronRightIcon"
                        className="py-2 px-3 md:px-4"
                        textStyle="text-xs md:text-sm"
                        onClick={() => handleRef(content.video_id)}
                      >
                        Watch now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex w-full items-center justify-center py-3 md:py-6">
          <>
            <Button
              className="py-1.5 px-3 md:py-2 md:px-6"
              onClick={() =>
                toast.error(
                  `No more ${
                    contentType === "movie"
                      ? "movies"
                      : contentType === "tv-serie"
                      ? "TV series"
                      : "TV shows"
                  }!`
                )
              }
            >
              Load more
            </Button>
          </>
        </div>
      </MainContainer>
    </main>
  );
}
