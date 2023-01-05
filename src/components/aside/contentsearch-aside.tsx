import { useState } from "react";
import { ContentsPageProps } from "../page/shared/page-contents";
import RadixSelectData from "../select/data-radixuiselect";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AsideHeading } from "./aside";
import { Genres } from "@/lib/data/genres";
import { CelebType, RatingRange, ReleaseYear } from "@/lib/data/others";

export default function ContentSearchAside({
  contentType,
}: ContentsPageProps): JSX.Element {
  const [contentName, setContentName] = useState("");
  const [gerne, setGerne] = useState("");
  const [ratingRange, setRatingRange] = useState("");
  const [releaseyear, setReleaseYear] = useState("");
  const [celebType, setCelebType] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full min-w-[280px] space-y-5">
      <AsideHeading
        title={`Search for a ${
          contentType === "movie"
            ? "movie"
            : contentType === "tv-serie"
            ? "TV serie"
            : contentType === "tv-show"
            ? "TV show"
            : "celebrity"
        }`}
      />
      <div className="space-y-3 border-2 border-main-blue bg-main-blue-sec p-4">
        <Input
          noColon
          name="contentname_search"
          label="Name"
          type="text"
          placeholder={`Enter ${
            contentType === "movie"
              ? "movie"
              : contentType === "tv-serie"
              ? "TV serie"
              : contentType === "tv-show"
              ? "TV show"
              : "celebrity"
          } name`}
          value={contentName}
          className="dosis w-full rounded-sm border-none bg-main-blue py-2 pl-2 font-normal"
          labelClassName="text-main-gray text-sm font-bold normal-case mb-1"
          handleChange={(e) => setContentName(e.target.value)}
        />
        {contentType !== "celebrities" && (
          <>
            <div className="flex items-center">
              <div className="h-7 w-[86px]">
                <label
                  htmlFor="gernes_search"
                  className="mb-1 text-sm font-bold normal-case text-main-gray"
                >
                  Gernes
                </label>
              </div>
              <div>
                <RadixSelectData
                  name="Genres"
                  data={Genres}
                  value={gerne}
                  onChange={setGerne}
                  clasName="gernes_search"
                  placeholder="Select a gerne"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-7 w-[86px]">
                <label
                  htmlFor="ratingrange_search"
                  className="mb-1 text-sm font-bold normal-case text-main-gray"
                >
                  Rating range
                </label>
              </div>
              <div>
                <RadixSelectData
                  name="Rating range"
                  data={RatingRange}
                  value={ratingRange}
                  onChange={setRatingRange}
                  clasName="ratingrange_search"
                  placeholder="Select the rating range"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <div className="h-7 w-[86px]">
                <label
                  htmlFor="releaseyear_search"
                  className="mb-1 text-sm font-bold normal-case text-main-gray"
                >
                  Release Year
                </label>
              </div>
              <div>
                <RadixSelectData
                  name="Release Year"
                  data={ReleaseYear}
                  value={releaseyear}
                  onChange={setReleaseYear}
                  clasName="releaseyear_search"
                  placeholder="Select the release year"
                />
              </div>
            </div>
          </>
        )}
        {contentType === "celebrities" && (
          <>
            <div className="mb-4 flex items-center">
              <div className="h-7 w-[86px]">
                <label
                  htmlFor="celeb_category_search"
                  className="mb-1 text-sm font-bold normal-case text-main-gray"
                >
                  Type
                </label>
              </div>
              <div>
                <RadixSelectData
                  name="Celebrity type"
                  data={CelebType}
                  value={celebType}
                  onChange={setCelebType}
                  clasName="celeb_type_search"
                  placeholder="Select type"
                />
              </div>
            </div>
          </>
        )}
        <div>
          <div className="mt-6">
            <Button
              loading={loading}
              className="w-full rounded-sm py-3"
              onClick={() => setLoading(true)}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
