import { Container, TopContainer } from "@/components/container/container";
import Search from "@/components/search/search";
import ProfileAside from "./profile/aside-profile";
import { ReactNode } from "react";
import useUserProfile from "@/utils/api/use-user-profile";
import { HeroIcon } from "@/components/ui/hero-icon";

type AccountProps = {
  children: ReactNode;
};

export default function Account({ children }: AccountProps): JSX.Element {
  return (
    <section className="dosis">
      <TopContainer className="h-44 md:h-56">
        <Search />
      </TopContainer>
      <Container
        className="-mt-24 flex flex-col items-center justify-center md:-mt-36 md:flex-row md:items-start 
                   md:justify-start md:gap-10 lg:gap-12"
      >
        <div className="inline-flex md:hidden">
          <AccountHeading />
        </div>
        <ProfileAside />
        <div className="h-full w-full">
          <div className="hidden md:inline-flex">
            <AccountHeading />
          </div>
          <div className="mt-10 rounded-sm border-[3px] border-main-blue bg-main-blue-for p-6 md:mt-28 md:mb-12">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AccountHeading(): JSX.Element {
  const { data: profile } = useUserProfile();

  return (
    <div className="space-y-4 text-center md:text-left">
      <h2 className=" text-xl font-bold uppercase text-white xs:text-2xl sm:text-3xl md:text-4xl">
        {profile?.full_name}’S PROFILE
      </h2>
      <div>
        <ul className="flex items-center gap-3 text-sm font-medium">
          <li className="text-main-blue-light">HOME</li>
          <li>
            <HeroIcon iconName="ChevronRightIcon" className="h3- w-3" />
          </li>
          <li>PROFILE</li>
        </ul>
      </div>
    </div>
  );
}
