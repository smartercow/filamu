import Link from "next/link";
import { useEffect, useState } from "react";
import { AppHead } from "@/components/common/app-head";
import { Content, contentData } from "@/lib/data/content";
import { useRouter } from "next/router";
import { Container } from "../../container/container";
import { Button } from "../../ui/button";
import { HeroIcon } from "../../ui/hero-icon";
import { ContentInfo } from "./info-content";
import { RateContent } from "./rate-content";
import { useSetRecoilState } from "recoil";
import { TrailerModalState } from "@/lib/states/common-state";
import { Favorites } from "@/types/sb-types";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import useFavorites from "@/utils/api/use-favorites";
import { Database } from "@/types/supabase-types";
import { toast } from "react-toastify";

type FAVORITE_DATA = {
  id: Favorites["id"];
  content_type: Favorites["content_type"];
  content_id: Favorites["content_id"];
};

// const testurl =
//   "https://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg";

export default function ContentHero(): JSX.Element {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient<Database>();
  const { data: favorite } = useFavorites();
  const setTrailerModalState = useSetRecoilState(TrailerModalState);
  const [content, setContent] = useState<Content | null>(null);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState("Add to Favorites");
  /*   const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FORM_DATA>(); */

  const handleSubmit = (props: FAVORITE_DATA) => {
    if (!user) return toast.error("You must be logged in to add to favorites!");
    setLoading(true);
    if (
      favorite &&
      favorite.content_id === props.content_id &&
      favorite.content_type === props.content_type
    ) {
      onDelete(props);
    } else {
      onSubmit(props);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
      favorite &&
      favorite?.id === user?.id &&
      favorite?.content_id === content?.video_id &&
      favorite?.content_type === content?.type
    ) {
      setAdded(true);
    } else {
      setAdded(false);
    }
    setLoading(false);
  }, [favorite, loading]);

  useEffect(() => {
    if (router.query.id) {
      const filteredData = contentData?.filter(
        (c) => c.video_id === router?.query.id
      );
      setContent(filteredData[0]);
    }
  }, [router.query.id]);

  async function onDelete(props: FAVORITE_DATA) {
    if (!user) return;

    const response = await supabaseClient.from("favorites").delete().match({
      id: props.id,
      content_type: props.content_type,
      content_id: props.content_id,
    });

    if (response.error) {
      toast.error(response.error.message);
    }
    console.log("response", response);
    setFav("Add to Favorites");
    toast.success("Your changes have been saved!");
  }

  async function onSubmit(props: FAVORITE_DATA) {
    if (!user) return;
    const updates = {
      id: props.id,
      content_type: props.content_type,
      content_id: props.content_id,
      added_at: new Date().toISOString(),
    };

    const response = await supabaseClient
      .from("favorites")
      .upsert(updates)
      .eq("id", user.id);

    if (response.error) {
      toast.error(response.error.message);
    }
    console.log("response", response);

    setFav("Remove from Favorites");
    toast.success("Your changes have been saved!");
  }

  console.log(favorite);

  return (
    <>
      {router.query && content && (
        <>
          <AppHead title={content.title} />
          <section
            className="relative bg-cover bg-fixed bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${content.splash})` }}
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
                          onClick={() =>
                            setTrailerModalState({
                              open: true,
                              title: content.title,
                              embedId: content.trailer,
                            })
                          }
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
                        <h2 className="dosis text-2xl font-bold line-clamp-2 md:text-3xl lg:text-4xl">
                          {content.title}
                        </h2>
                        <p className="mt-2 italic text-main-gray line-clamp-3 md:line-clamp-2">
                          {content.description}
                        </p>
                      </div>
                      {content.episodes && (
                        <div className="mt-2">
                          <p className="hover-animation cursor-pointer text-lg font-bold hover:opacity-90">
                            {content.episodes}{" "}
                            <span className="font-medium text-main-gray">
                              episodes
                            </span>
                          </p>
                        </div>
                      )}
                      <div className="mt-4 flex gap-2">
                        <div className="group flex w-full items-center gap-3">
                          <span className="rounded-full border border-primary p-2">
                            <HeroIcon
                              solid
                              iconName="HeartIcon"
                              className="hover-animation h-4 w-4 text-primary group-hover:opacity-80"
                            />
                          </span>
                          <button
                            type="button"
                            className="hover-animation text-sm font-semibold uppercase text-primary group-hover:opacity-80"
                            onClick={() =>
                              handleSubmit({
                                id: user?.id,
                                content_type: content.type,
                                content_id: content.video_id,
                              })
                            }
                          >
                            {fav}
                          </button>
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
                      <RateContent stars={content.rating} />
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
                  <ContentInfo {...content} />
                </Container>
              </div>
            </div>
            {/* <div className="movie-page-top-gradient absolute top-0 left-0 h-24 w-full "></div> */}
          </section>
        </>
      )}
    </>
  );
}
