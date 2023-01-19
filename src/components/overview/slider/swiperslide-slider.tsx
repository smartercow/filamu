/* eslint-disable @next/next/no-img-element */
import cn from "clsx";
import { Button } from "../../ui/button";
import { CustomIcon } from "../../ui/custom-icon";
import { Content } from "@/lib/data/content";
import { useRouter } from "next/router";

export function SlideContent(props: Content): JSX.Element {
  const router = useRouter();

  const handleRef = () => {
    router.push(`/${props.type}/title/${props.video_id}`);
  };

  return (
    <div className="group relative h-full">
      <div className="w-full">
        <img
          src={props.poster}
          alt={props.title}
          width="185"
          height="284"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black p-3 text-left">
        <h5 className="truncate whitespace-nowrap text-sm font-semibold uppercase md:text-base">
          {props.title}
        </h5>

        <div className="category-badge flex items-center gap-1">
          <CustomIcon
            className="h-5 w-5 text-star-yellow"
            iconName="StarIcon"
          />
          <p className="text-sm font-semibold">
            <span className="text-lg">{props.rating}</span>/10
          </p>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black 
                   bg-opacity-70 opacity-0 transition-all duration-500 group-hover:opacity-100"
      >
        <span>
          <Button
            hasIcon
            btnIcon="ChevronRightIcon"
            className={cn("py-2 px-3 md:px-4")}
            textStyle="text-xs"
            onClick={handleRef}
          >
            Watch now
          </Button>
        </span>
      </div>
    </div>
  );
}
