import MovieHero from "../page/movie/hero";
import MoviePageMore from "../page/movie/more";

export default function MoviePage(): JSX.Element {
  return (
    <main className="bg-main-darkblue pb-10 text-white md:pb-14 lg:pb-16">
      <MovieHero />
      <MoviePageMore />
    </main>
  );
}
