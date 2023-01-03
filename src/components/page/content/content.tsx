import ContentHero from "./hero-content";
import ContentPageMore from "./more-content";

export type ContentPageProps = {
  contentType: string;
};
export default function ContentPage({
  contentType,
}: ContentPageProps): JSX.Element {
  return (
    <main className="bg-main-darkblue pb-10 text-white md:pb-14 lg:pb-16">
      <ContentHero />
      <ContentPageMore contentType={contentType} />
    </main>
  );
}
