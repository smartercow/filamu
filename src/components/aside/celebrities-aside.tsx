/* eslint-disable @next/next/no-img-element */

import { Celebrities } from "@/lib/data/celebs";
import Link from "next/link";
import InternalLink from "../ui/link";
import { AsideHeading } from "./aside";

export function CelebritiesSpotligt(): JSX.Element {
  return (
    <div className="flex w-full flex-col gap-5">
      <AsideHeading title="Celebrities spotlight" />

      <div className="space-y-5">
        {Celebrities.slice(0, 4).map((celeb) => (
          <div key={celeb.id}>
            <Link href={`/celebrities/${celeb.category}/${celeb.celebId}`}>
              <div className="group flex items-center gap-4">
                <div className="">
                  <img
                    src={celeb.image}
                    alt={celeb.name}
                    className="h-20 w-[70px] rounded-sm object-cover object-top"
                  />
                </div>
                <div>
                  <h6 className="font-semibold group-hover:text-secondary">
                    {celeb.name}
                  </h6>
                  <p className="text-sm uppercase text-main-gray">
                    {celeb.category}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <InternalLink href="/celebrities" title="See all celebrities" />
      </div>
    </div>
  );
}
