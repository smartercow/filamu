import InternalLink from "../ui/link";

export type OverviewHeadingProps = {
  title: string;
  href?: string;
  noLink?: boolean;
};

export function OverviewHeading({ title, href, noLink }: OverviewHeadingProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <h3 className="whitespace-nowrap text-xl font-semibold uppercase text-white md:text-2xl">
        {title}
      </h3>

      {!noLink && <InternalLink href={href} title="View all" />}
    </div>
  );
}
