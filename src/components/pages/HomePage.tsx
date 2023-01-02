import React from "react";
import { TopContainer, Overview } from "../container/container";
import HomeSlider from "../home/home-slider";
import {
  OverviewSliderLayout,
  OverviewNewsLayout,
} from "../layout/common-layout";
import { OverviewMedia } from "../overview/media/media";
import NewsOverview from "../overview/news/news";
import { OverviewSlider } from "../overview/slider/overview-slider";
import Search from "../search/search";

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
