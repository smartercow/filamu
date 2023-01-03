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
            title="Recommended"
            href="/recommended"
            category="recommended"
          />
          <OverviewSlider title="Latest" href="/latest" category="latest" />
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
