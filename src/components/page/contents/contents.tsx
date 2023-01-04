import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { contentData } from "@/lib/data/content";
import { Button } from "@/components/ui/button";
import { ContentsContainer, ContentsPageProps } from "../shared/page-contents";

export default function Contents({
  contentType,
}: ContentsPageProps): JSX.Element {
  const router = useRouter();

  const handleRef = (video_id: string) => {
    router.push(`/${contentType}/title/${video_id}`);
  };

  return (
    <ContentsContainer contentType={contentType}>
      <div className="m-auto grid grid-cols-4 gap-10">
        {contentData
          .filter((content) => content.type === contentType)
          .map((content) => (
            <div className=" group relative" key={content.id}>
              <div className="w-full">
                <img
                  src={content.poster}
                  alt={content.title}
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="dosis hover-animation absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/90 opacity-0 group-hover:opacity-100">
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
    </ContentsContainer>
  );
}
