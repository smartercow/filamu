import Aside from "@/components/aside/aside";
import { newsData } from "@/lib/data/news";
import Link from "next/link";
import { ContentsContainer } from "../shared/page-contents";

export default function NewsPage(): JSX.Element {
  return (
    <main>
      <ContentsContainer noFilter contentType="news">
        <div className="space-y-8">
          {newsData?.map((n) => (
            <div className="flex">
              <Link href={`/news/${n.link}`}>
                <div className="h-44 w-60">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-44 min-w-[15rem] rounded-l-md object-cover"
                  />
                </div>
              </Link>
              <div className="space-y-3 bg-main-blue-fiv py-3 pl-5">
                <Link
                  href={`/news/${n.link}`}
                  className="font-lg md:font-2xl dosis font-bold text-main-blue-light line-clamp-2"
                >
                  {n.title}
                </Link>
                <p className="text-main-gray">
                  {new Date().toISOString().slice(0, 10)}
                </p>
                <p className="text-main-gray line-clamp-2">{n.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentsContainer>
    </main>
  );
}
