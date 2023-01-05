import Link from "next/link";
import { HeroIcon } from "./hero-icon";
import cn from "clsx";

type LinkProps = {
  title: string;
  href: string;
  customStyle?: boolean;
  className?: string;
};

export default function InternalLink({
  title,
  href,
  customStyle,
  className,
}: LinkProps): JSX.Element {
  return (
    <div>
      <Link
        href={href}
        className={cn(
          "flex w-full items-center gap-1 whitespace-nowrap transition-all duration-300 hover:text-secondary",
          !customStyle && "text-sm font-bold uppercase text-main-gray",
          className
        )}
      >
        {title}
        <HeroIcon iconName="ChevronRightIcon" className="h-3 w-3" />
      </Link>
    </div>
  );
}
