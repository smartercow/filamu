import dynamic from "next/dynamic";
import ContentHero from "./hero-content";
import type { ContentsPageProps } from "../shared/page-contents";
const ContentPageMore = dynamic(() => import("./more-content"), {
  ssr: false,
});

export default function ContentPage({
  contentType,
}: ContentsPageProps): JSX.Element {
  return (
    <main className="bg-main-darkblue pb-10 text-white md:pb-14 lg:pb-16">
      <ContentHero />
      <ContentPageMore contentType={contentType} />
    </main>
  );
}
