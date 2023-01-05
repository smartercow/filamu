import Aside from "@/components/aside/aside";
import { newsData } from "@/lib/data/news";
import { useEffect, useState } from "react";
import { ContentsContainer } from "../shared/page-contents";
import type { News } from "@/lib/data/news";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";

const some = [
  { network: "facebook", url: "https://facebook.com/netflix" },
  { network: "twitter", url: "https://twitter.com/netflix" },
  { network: "youtube", url: "https://youtube.com/netflix" },
];

export default function NewsArticle(): JSX.Element {
  const router = useRouter();
  const [article, setArticle] = useState<News | null>(null);

  useEffect(() => {
    if (router.query.slug) {
      const filteredNews = newsData?.filter(
        (n) => n.link === router?.query.slug
      );
      setArticle(filteredNews[0]);
    }
  }, [router.query]);

  console.log("article", article);
  console.log("router", router.query.slug);

  return (
    <>
      {router.query.slug && article && (
        <main>
          <ContentsContainer noFilter noLoadMore contentType="news">
            <div className="space-y-6 pb-4">
              <div className="space-y-2">
                <h1 className="dosis text-3xl font-bold line-clamp-2">
                  {article.title}
                </h1>
                <p className="text-main-gray">
                  {new Date().toISOString().slice(0, 10)}
                </p>
              </div>
              <div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="max-h-[450px] w-full rounded-md object-cover"
                />
              </div>
              <div className="space-y-4 text-main-gray">
                <p>{article.description}</p>
                <p>{article.column_one}</p>
                <p>{article.column_two}</p>
              </div>
              <div className="flex justify-between gap-2">
                <div>
                  <p className="text-main-gray">
                    By{" "}
                    <span className="font-semibold text-white">
                      Filamu Staff
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <h6 className="text-lg font-bold">Share it:</h6>
                  </div>
                  <div className="flex gap-1 text-main-gray">
                    {some.map((s) => (
                      <SocialIcon
                        key={s.url}
                        network={s.network}
                        bgColor="transparent"
                        fgColor="#abb7c4"
                        style={{ height: 30, width: 30, cursor: "pointer" }}
                        href={s.url}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ContentsContainer>
        </main>
      )}
    </>
  );
}
