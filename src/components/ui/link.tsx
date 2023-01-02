import Link from "next/link";
import { HeroIcon } from "./hero-icon";
import cn from "clsx";

type LinkProps = {
  title: string;
  href: string;
  className?: string;
};

export default function InternalLink({
  title,
  href,
  className,
}: LinkProps): JSX.Element {
  return (
    <div>
      <Link
        href={href}
        className={cn(
          "flex w-full items-center gap-1 whitespace-nowrap text-sm font-bold uppercase text-main-gray transition-all duration-300 hover:text-secondary",
          className
        )}
      >
        {title}
        <HeroIcon iconName="ChevronRightIcon" className="h-3 w-3" />
      </Link>
    </div>
  );
}
