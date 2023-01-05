import { NewsCategories } from "@/lib/data/news";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { AsideHeading } from "./aside";
import { FacebookAside, TwitterAside } from "./social-aside";

export default function NewsAside(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <AsideHeading title="Search" />
        <div>
          <Input
            name="search_aside"
            noLabel
            placeholder="Enter keywords"
            className="rounded-md border-none bg-main-blue py-3 font-normal text-main-gray"
          />
        </div>
      </div>
      <div className="space-y-4">
        <AsideHeading title="Categories" />
        <div className="space-y-4">
          {NewsCategories.map((category) => (
            <div className="" key={category.id}>
              <Link href="#" className="text-main-gray">
                {category.name} {`(${category.total})`}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <FacebookAside width={288} />
      <TwitterAside width={288} />
    </div>
  );
}
