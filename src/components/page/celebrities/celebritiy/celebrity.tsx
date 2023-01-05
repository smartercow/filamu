import { useEffect, useState } from "react";
import Aside from "@/components/aside/aside";
import { Container, TopContainer } from "@/components/container/container";
import Search from "@/components/search/search";
import { HeroIcon } from "@/components/ui/hero-icon";
import InternalLink from "@/components/ui/link";
import { Celebrities } from "@/lib/data/celebs";
import { useRouter } from "next/router";
import { AppHead } from "@/components/common/app-head";
import { useSetRecoilState } from "recoil";
import { ImageModalState, YoutubeModalState } from "@/lib/states/common-state";
import type { Celeb } from "@/lib/data/celebs";

export default function CelebrityPage(): JSX.Element {
  const router = useRouter();
  const setYoutubeModalState = useSetRecoilState(YoutubeModalState);
  const setImageModalState = useSetRecoilState(ImageModalState);
  const [celeb, setCeleb] = useState<Celeb | null>(null);

  useEffect(() => {
    if (router.query.id) {
      const filteredCeleb = Celebrities?.filter(
        (c) => c.celebId.toString() === router?.query.id
      );
      setCeleb(filteredCeleb[0]);
    }
  }, [router.query.id]);

  return (
    <>
      {router.query.id && celeb && (
        <>
          <AppHead title={celeb.name} />
          <main>
            <TopContainer className="h-44 md:h-56">
              <Search />
            </TopContainer>
            <Container
              className="-mt-24 flex h-full flex-col items-center justify-center pb-8 md:-mt-36 md:flex-row 
                md:items-start md:justify-start md:gap-8 lg:gap-12"
            >
              <div className="">
                <div className="w-40 md:w-48 lg:w-60">
                  <img
                    src={celeb.image}
                    alt={celeb.name}
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="mt-5 h-full w-full md:mt-0">
                <div className="space-y-1 text-center md:space-y-3 md:text-left">
                  <h2 className="dosis text-xl font-bold uppercase text-white xs:text-2xl sm:text-3xl md:text-4xl">
                    {celeb.name}
                  </h2>
                  <p className="inline text-main-gray lg:hidden">
                    {celeb.dateOfBirth}
                  </p>
                  <p className="uppercase text-main-gray">
                    {celeb.category}
                    <span className="inline lg:hidden">, {celeb.country}</span>
                  </p>
                </div>
                <div className="mt-6 flex gap-4 md:mt-24 lg:gap-2 xl:gap-8">
                  <div className="flex h-full max-w-2xl flex-col gap-6 lg:max-w-lg xl:max-w-2xl">
                    <div className="space-y-6">
                      <p className="text-main-gray">{celeb.biography}</p>
                      <InternalLink
                        href="#"
                        customStyle
                        title="See full bio"
                        className="font-normal text-main-blue-light"
                      />
                    </div>
                    <div>
                      <div className="flex w-full justify-between gap-2 border-b border-main-blue/80 pb-2">
                        <div>
                          <h5 className="dosis font-bold uppercase">
                            Photos & Videos
                          </h5>
                        </div>
                        <div>
                          <InternalLink
                            customStyle
                            href="#"
                            title="See all videos & photos"
                            className="font-normal text-main-blue-light"
                          />
                        </div>
                      </div>
                      <div className="mt-6 flex flex-wrap justify-center gap-x-14 gap-y-5 md:flex-nowrap md:justify-between md:gap-1 md:gap-y-0">
                        {celeb.photos.map((c, i) => (
                          <div
                            key={i}
                            className="hover-animation h-32 w-32 cursor-pointer hover:scale-105"
                            onClick={() =>
                              setImageModalState({
                                open: true,
                                name: celeb.name,
                                source: c,
                              })
                            }
                          >
                            <img
                              src={c}
                              alt={celeb.name}
                              className="h-32 w-32 rounded-md object-cover object-top"
                            />
                          </div>
                        ))}
                        <div
                          className="hover-animation relative h-32 w-32 cursor-pointer hover:scale-105"
                          onClick={() =>
                            setYoutubeModalState({
                              open: true,
                              title: celeb.name,
                              embedId: celeb.video,
                            })
                          }
                        >
                          <img
                            src={celeb.video_thumbnail}
                            alt={celeb.name}
                            className="h-32 w-32 rounded-md object-cover object-top"
                          />
                          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                            <div className="h-5 w-5 bg-white"></div>
                          </div>
                          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                            <div className="">
                              <HeroIcon
                                iconName="PlayCircleIcon"
                                solid
                                className="h-12 w-12 text-primary"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <InternalLink
                        customStyle
                        href="#"
                        title="See filmography"
                        className="dosis font-semibold uppercase"
                      />
                    </div>
                  </div>
                  <Aside className="w-full max-w-[14rem] px-10">
                    <div className="space-y-5">
                      <ul className="list-none space-y-1">
                        <li className="whitespace-nowrap text-sm font-bold text-main-gray">
                          Full name:
                        </li>
                        <li className="whitespace-nowrap text-main-gray">
                          {celeb.name}
                        </li>
                      </ul>
                      <ul className="list-none space-y-1">
                        <li className="whitespace-nowrap text-sm font-bold text-main-gray">
                          Date of birth:
                        </li>
                        <li className="whitespace-nowrap text-main-gray">
                          {celeb.dateOfBirth}
                        </li>
                      </ul>
                      <ul className="list-none space-y-1">
                        <li className="whitespace-nowrap text-sm font-bold text-main-gray">
                          Roles:
                        </li>
                        <li className="whitespace-nowrap text-main-gray">
                          {celeb.roles}
                        </li>
                      </ul>
                      <ul className="list-none space-y-1">
                        <li className="whitespace-nowrap text-sm font-bold text-main-gray">
                          Country:
                        </li>
                        <li className="whitespace-nowrap text-main-gray">
                          {celeb.country}
                        </li>
                      </ul>
                    </div>
                  </Aside>
                </div>
              </div>
            </Container>
          </main>
        </>
      )}
    </>
  );
}
