/* eslint-disable @next/next/no-img-element */
import { useWindow } from "@/lib/context/window-context";
import { MainContainer } from "../../container/container";
import { OverviewHeading } from "../../overview/overview";
import { contentData } from "@/lib/data/content";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import type { ContentsPageProps } from "../shared/page-contents";

export default function ContentPageMore({
  contentType,
}: ContentsPageProps): JSX.Element {
  const { width } = useWindow();
  const router = useRouter();
  const removeThis = router.query.id;

  const handleRef = (video_id: string) => {
    router.push(`/${contentType}/title/${video_id}`);
  };

  return (
    <MainContainer>
      <div className="dosis w-full space-y-6 pt-10">
        <OverviewHeading
          noLink
          title={`More ${
            contentType === "movie"
              ? "movies"
              : contentType === "tv-serie"
              ? "TV series"
              : contentType === "tv-show" && "TV shows"
          }`}
        />

        {contentData && contentData.length > 0 && (
          <div className="flex justify-between gap-2">
            {contentData
              .filter((content) => content.type === contentType)
              .filter(function (content) {
                return content.video_id != removeThis;
              })
              .sort(function (a, b) {
                return Math.random() - 0.5;
              })
              .slice(0, width < 600 ? 3 : width < 800 ? 3 : 4)
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
                      <p className="text-left text-sm text-main-gray line-clamp-2 md:text-base md:line-clamp-3">
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
        )}
      </div>
    </MainContainer>
  );
}
