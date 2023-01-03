import { ReactNode } from "react";
import Aside from "../aside/aside";
import { CelebritiesSpotligt } from "../aside/celebrities-aside";
import DownloadAside from "../aside/download-aside";
import NewsletterAside from "../aside/newsletter-aside";
import { FacebookAside, TwitterAside } from "../aside/social-aside";
import { Placeholder } from "../common/placeholder";
import { MainContainer, TopContainer } from "../container/container";

export type LayoutProps = {
  children: ReactNode;
};

export function ProtectedLayout({ children }: LayoutProps): JSX.Element {
  const user = "";

  if (!user) return <Placeholder />;

  return <>{children}</>;
}

export function OverviewSliderLayout({ children }: LayoutProps): JSX.Element {
  return (
    <MainContainer className="dosis flex justify-center gap-5 py-10 md:py-12 lg:justify-between">
      {children}
      <Aside>
        {/* <NewsletterAside /> */}
        <DownloadAside />
        <CelebritiesSpotligt />
      </Aside>
    </MainContainer>
  );
}

export function OverviewNewsLayout({ children }: LayoutProps): JSX.Element {
  return (
    <MainContainer className="dosis flex justify-center gap-5 py-10 md:py-12 lg:justify-between">
      {children}
      <Aside>
        <FacebookAside />
        <TwitterAside />
      </Aside>
    </MainContainer>
  );
}

export function AdminLayout({ children }: LayoutProps): JSX.Element {
  return (
    <TopContainer>
      {/* <AdminHeader /> */}
      {children}
    </TopContainer>
  );
}

export function TrendsLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      {/*       <Aside>
        <Suggestions />
      </Aside> */}
    </>
  );
}

export function PeopleLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      {/*       <Aside>
        <AsideTrends />
      </Aside> */}
    </>
  );
}
