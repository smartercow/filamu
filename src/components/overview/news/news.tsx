/* eslint-disable @next/next/no-img-element */
import { useWindow } from "@/lib/context/window-context";
import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { MainContainer } from "../../container/container";
import InternalLink from "../../ui/link";
import { OverviewHeading } from "../overview";

const categories = [
  { name: "#Movies", category: "movies" },
  { name: "#Series", category: "series" },
  { name: "#TV Shows", category: "tv-shows" },
  { name: "#Celebs", category: "celebs" },
];

const some = [
  { network: "facebook", url: "https://facebook.com/netflix" },
  { network: "twitter", url: "https://twitter.com/netflix" },
  { network: "youtube", url: "https://youtube.com/netflix" },
];

export default function NewsOverview(): JSX.Element {
  const [category, setCategory] = useState("movies");
  const { width } = useWindow();
  return (
    <MainContainer className="space-y-6 md:space-y-14">
      <div className="space-y-4 lg:space-y-8">
        <div className="flex gap-2">
          <OverviewHeading noLink title="Latest News" href="news" />

          <div className="inline-block lg:hidden">
            <div className="flex items-center gap-2">
              <h3 className="whitespace-nowrap text-sm font-semibold uppercase text-white">
                Follow us:
              </h3>
              {some.map((s) => (
                <SocialIcon
                  key={s.url}
                  network={s.network}
                  bgColor="transparent"
                  fgColor="white"
                  style={{ height: 30, width: 30 }}
                  href={s.url}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-8 sm:flex-row">
          <div className="flex gap-8">
            <div className="flex-inline space-y-4 text-sm font-semibold sm:hidden">
              {categories.map((c) => {
                if (category === c.category)
                  return (
                    <div
                      key={c.category}
                      className="flex items-center gap-1 whitespace-nowrap uppercase text-secondary"
                    >
                      {c.name}
                    </div>
                  );
                else
                  return (
                    <div
                      key={c.category}
                      onClick={() => setCategory(c.category)}
                      className="flex cursor-pointer items-center gap-1 whitespace-nowrap uppercase text-main-gray 
                               transition-all duration-300 hover:text-secondary"
                    >
                      {c.name}
                    </div>
                  );
              })}
            </div>

            <div className="flex w-full justify-center">
              <div className="min-w-[170px] overflow-hidden rounded-md">
                <img src={newsData[0].image} alt="News" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <Link
                href="/"
                className="text-lg font-bold text-link-blue line-clamp-2"
              >
                {newsData[0].title}
              </Link>
            </div>
            <div>
              <small className="text-main-gray">{newsData[0].timestamp}</small>
            </div>
            <div>
              <p className="text-main-gray line-clamp-2 md:line-clamp-4">
                {newsData[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h4 className="text-lg font-bold">More news on Filamu</h4>
          </div>
          <div className="hidden sm:inline-flex">
            <InternalLink title="See all news" href="/news" />
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-3 md:gap-5 lg:gap-7">
          {newsData.slice(1, width < 640 ? 3 : 5).map((news) => (
            <div key={news.id} className="space-y-1 md:space-y-2">
              <div>
                <Link
                  className="text-sm font-bold text-link-blue line-clamp-2"
                  href="/"
                >
                  {news.title}
                </Link>
              </div>
              <div>
                <small className="text-main-gray">{news.timestamp}</small>
              </div>
            </div>
          ))}

          <div className="mt-2 inline-flex sm:hidden">
            <InternalLink title="See all news" href="/news" />
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

const newsData = [
  {
    id: 1,
    title:
      "African cinema is more exciting than ever. Where’s its wider recognition?",
    image: "/assets/news/news1.png",
    timestamp: "12 hours ago",
    description:
      "Two years ago, “Parasite” director Bong Joon Ho called out American audiences. His charge? Americans don’t know enough about movies outside their own borders. Once you overcome the 1-inch tall barrier of subtitles,” he said, while accepting a Golden Globe award for his film, “you will be introduced to so many more amazing films.",
    link: "/",
  },
  {
    id: 2,
    title:
      "Brie Larson to play first female white house candidate Victoria Woodull in Amazon film",
    image: "/assets/images/news/blog-it1.jpg",
    timestamp: "14 hours ago",
    description:
      "Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar winning Room star Brie Larson polsed to produce, and play the",
    link: "/",
  },
  {
    id: 3,
    title: "Hollywood puts Africa in a box",
    image: "/assets/images/news/blog-it1.jpg",
    timestamp: "18 hours ago",
    description:
      "The issue, in part, is one of perceptions. Many Hollywood executives thought, and continue to think, that no one is interested in seeing films focused on Black and African people, said Moradewun Adejunmobi, a professor at the University of California, Davis, who studies African literature and pop culture.",
    link: "/",
  },
  {
    id: 4,
    title:
      "The award-winning African documentary project that goes inside the lives of migrants",
    image: "/assets/images/news/blog-it1.jpg",
    timestamp: "20 hours ago",
    description:
      "For far too long the west has been telling stories about and talking on behalf of Africa. However, a new slate of 25 documentary films by African filmmakers called Generation Africa is currently making waves at international film festivals and is set to shift perspectives about migration in and from the continent.",
    link: "/",
  },
  {
    id: 5,
    title:
      "Brie Larson to play first female white house candidate Victoria Woodull in Amazon film",
    image: "/assets/images/news/blog-it1.jpg",
    timestamp: "1 day ago",
    description:
      "Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar winning Room star Brie Larson polsed to produce, and play the",
    link: "/",
  },
];
