/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { slides } from "@/lib/data";
import { useWindow } from "@/lib/context/window-context";
import { MainContainer } from "../../container/container";
import { OverviewHeading } from "../../overview/overview";

export default function MoviePageMore(): JSX.Element {
  const { width } = useWindow();
  return (
    <MainContainer>
      <div className="dosis w-full space-y-6 pt-10">
        <OverviewHeading noLink title="Related movies" href="/movies/popular" />

        <div className="flex justify-between gap-2">
          {slides
            .slice(0, width < 600 ? 3 : width < 800 ? 3 : 4)
            .map((movie) => (
              <Link key={movie.id} href={`/movies/title/${movie.id}`}>
                <div className="max-w-[230px]">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="h-full w-auto object-cover"
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </MainContainer>
  );
}
