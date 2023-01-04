import cn from "clsx";
import type { ContainerProps } from "../container/container";

type AsideHeadingProps = {
  title: string;
  className?: string;
};

export function AsideHeading({
  title,
  className,
}: AsideHeadingProps): JSX.Element {
  return (
    <div
      className={cn("dosis w-full border-b border-main-gray pb-2", className)}
    >
      <h4 className="sub-heading">{title}</h4>
    </div>
  );
}

export default function Aside({
  children,
  className,
}: ContainerProps): JSX.Element {
  return (
    <div className={cn("hidden overflow-hidden lg:inline-flex", className)}>
      <div className="flex flex-col justify-between gap-2">{children}</div>
    </div>
  );
}
