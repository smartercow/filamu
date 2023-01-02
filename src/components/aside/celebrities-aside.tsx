/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import InternalLink from "../ui/link";
import { AsideHeading } from "./aside";

const actorsData = [
  {
    id: 1,
    name: `Lupita Nyong'o`,
    role: "Actor",
    img: "/assets/images/actors/lupita-nyongo.png",
  },
  {
    id: 2,
    name: "Daniel Kaluuya",
    role: "Actor",
    img: "/assets/images/actors/daniel-kaluuya.png",
  },
  {
    id: 3,
    name: "Ryan Coogler",
    role: "Director",
    img: "/assets/images/actors/ryan-coogler.png",
  },
  {
    id: 4,
    name: "Idris Elba",
    role: "Actor",
    img: "/assets/images/actors/idris-elba.png",
  },
];

export function CelebritiesSpotligt(): JSX.Element {
  return (
    <div className="flex w-full flex-col gap-5">
      <AsideHeading title="Spotlight celebrities" />

      <div className="space-y-5">
        {actorsData.map((celeb) => (
          <div key={celeb.id}>
            <Link href={`/celebrities/${celeb.role}/${celeb.id}`}>
              <div className="group flex items-center gap-4">
                <div>
                  <img src={celeb.img} alt={celeb.name} />
                </div>
                <div>
                  <h6 className="font-semibold group-hover:text-secondary">
                    {celeb.name}
                  </h6>
                  <p className="text-sm uppercase text-main-gray">
                    {celeb.role}
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
