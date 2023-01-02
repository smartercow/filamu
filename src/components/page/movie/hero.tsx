import Link from "next/link";
import { Container } from "../../container/container";
import { Button } from "../../ui/button";
import { CustomIcon } from "../../ui/custom-icon";
import { HeroIcon } from "../../ui/hero-icon";
import MovieInfo from "./info-movie";
import RateMovie from "./rate-movie";

const hLinks = [
  {
    name: "Overview",
    href: "overview",
  },
  {
    name: "Reviews",
    href: "reviews",
  },
  {
    name: "Cast & crew",
    href: "cast-crews",
  },
  {
    name: "Related shows",
    href: "related-shows",
  },
];
export default function MovieHero(): JSX.Element {
  const testurl =
    "https://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg";
  return (
    <section
      className="bg-cover bg-fixed bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${testurl})` }}
    >
      <div className="top-container relative w-full bg-black/60">
        <div className="info-container">
          <Container className="">
            <div className="flex flex-col-reverse gap-1 pb-10 pt-10 md:flex-row lg:pb-20">
              <div className="flex h-full w-full flex-col gap-2">
                <div>
                  <Button
                    className="flex rounded-full border border-white bg-transparent px-2.5 py-1.5"
                    textStyle="text-xs font-bold"
                  >
                    <HeroIcon
                      iconName="VideoCameraIcon"
                      className="h-4 w-4"
                      solid
                    />{" "}
                    Watch trailer
                  </Button>
                </div>
                <div>
                  <h1 className="dosis text-2xl font-bold line-clamp-2 md:text-3xl lg:text-4xl">
                    Mariah Carey: Merry Christmas to All!
                  </h1>
                  <p className="mt-2 italic text-main-gray line-clamp-3 md:line-clamp-2">
                    The singer-songwriter performs a repertoire of her festive
                    holiday hits, including the chart-topping perennial favorite
                    &quot;All I Want for Christmas Is You&quot;.
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="flex w-full items-center gap-3">
                    <span className="rounded-full border border-primary p-2">
                      <HeroIcon
                        solid
                        iconName="HeartIcon"
                        className="h-4 w-4 text-primary"
                      />
                    </span>
                    <h6 className="text-sm font-semibold uppercase text-primary">
                      Add to favorite
                    </h6>
                  </div>
                  <div className="flex w-full items-center gap-3">
                    <span className="rounded-full border border-primary p-2">
                      <HeroIcon
                        solid
                        iconName="ShareIcon"
                        className="h-4 w-4 text-primary"
                      />
                    </span>
                    <h6 className="text-sm font-semibold uppercase text-primary">
                      share
                    </h6>
                  </div>
                </div>
                <RateMovie />
              </div>
              <div className="flex w-full items-center justify-center pb-8 md:pb-0">
                <Link href="#" className="hover:text-white">
                  <div className="relative h-20 w-20 transition-all duration-300 hover:scale-110 md:h-24 md:w-24">
                    <span className="play-btn h-20 w-20 rounded-full">
                      <HeroIcon
                        iconName="PlayIcon"
                        className="h-8 w-8 md:h-10 md:w-10"
                        solid
                      />
                      <span className="absolute h-20 w-20 animate-ping rounded-full border opacity-20"></span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <MovieInfo />
          </Container>
        </div>
      </div>
    </section>
  );
}