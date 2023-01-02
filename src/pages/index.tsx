import { TopContainer, Overview } from "@/components/container/container";
import HomeSlider from "@/components/home/home-slider";
import {
  OverviewSliderLayout,
  OverviewNewsLayout,
} from "@/components/layout/common-layout";
import { OverviewMedia } from "@/components/overview/media/media";
import NewsOverview from "@/components/overview/news/news";
import { OverviewSlider } from "@/components/overview/slider/overview-slider";
import Search from "@/components/search/search";

export default function HomePage(): JSX.Element {
  return (
    <main>
      <TopContainer>
        <Search />
        <HomeSlider />
      </TopContainer>

      <OverviewSliderLayout>
        <Overview>
          <OverviewSlider
            title="Latest movies"
            href="/movies"
            category="movies"
            from={0}
            to={7}
          />
          <OverviewSlider
            title="TV Programmes"
            href="/programmes"
            category="programmes"
            from={3}
            to={8}
          />
        </Overview>
      </OverviewSliderLayout>

      <OverviewMedia />

      <OverviewNewsLayout>
        <Overview>
          <NewsOverview />
        </Overview>
      </OverviewNewsLayout>
    </main>
  );
}
