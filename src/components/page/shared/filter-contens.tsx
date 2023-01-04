import { ContentsPageProps } from "./page-contents";

export default function FilterContents({
  contentType,
}: ContentsPageProps): JSX.Element {
  return (
    <div className="border-y border-main-gray/60 py-3">
      <div>
        <p>
          Found{" "}
          <span className="text-main-blue-light">
            1,409{" "}
            {contentType === "movie"
              ? "movies"
              : contentType === "tv-serie"
              ? "TV series"
              : contentType === "tv-show"
              ? "TV shows"
              : contentType === "celebrities" && "celebrities"}{" "}
          </span>
          in total
        </p>
      </div>
      <div></div>
    </div>
  );
}
