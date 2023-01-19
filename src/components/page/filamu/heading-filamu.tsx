import { HeroIcon } from "@/components/ui/hero-icon";

type FilamuHeadingProps = {
  title: string;
  subTitle: string;
};
export function FilamuHeading({
  title,
  subTitle,
}: FilamuHeadingProps): JSX.Element {
  return (
    <div className="my-4 h-full space-y-5 md:my-8">
      <div className="text-center">
        <h1 className="dosis text-2xl font-bold uppercase md:text-3xl lg:text-4xl">
          {title}
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
          <li className="uppercase text-main-gray">{subTitle}</li>
        </ul>
      </div>
    </div>
  );
}
