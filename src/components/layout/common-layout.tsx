import Aside from "../aside/aside";
import { MainContainer, TopContainer } from "../container/container";
import { CelebritiesSpotligt } from "../aside/celebrities-aside";
import { DownloadAside } from "../aside/download-aside";
import { FacebookAside, TwitterAside } from "../aside/social-aside";
import { Placeholder } from "../common/placeholder";
import type { ReactNode } from "react";

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
      <Aside className="w-72">
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
      <Aside className="w-72">
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
