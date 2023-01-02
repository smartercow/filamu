/* eslint-disable @next/next/no-img-element */
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import cn from "clsx";
import { useSetRecoilState } from "recoil";
import { HeaderLogo } from "./header-logo";
import RightContent from "./header-right";
import HeaderNavigation from "./header-navigation";
import { AuthModalState } from "@/lib/states/auth-state";
import { HeroIcon } from "../ui/hero-icon";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Movies",
    href: "/movies",
  },
  {
    name: "Series",
    href: "/series",
  },
  {
    name: "TV Shows",
    href: "/tv-shows",
  },
  {
    name: "Celebrities",
    href: "/celebrities",
  },
];

export default function Header(): JSX.Element {
  const path = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const setAuthState = useSetRecoilState(AuthModalState);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    if (scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [scrollY]);

  return (
    <header
      className={cn(
        "dosis fixed z-40 w-full",
        scrolled &&
          // 'bg-opacity-60 bg-clip-padding backdrop-blur-xl backdrop-filter'
          "bg-main-blue-sec py-2.5 transition-all duration-150 md:py-0"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4",
          scrolled ? "py-1" : "py-4 sm:py-6"
        )}
      >
        <div className="inline-flex sm:hidden">
          <HeroIcon iconName="Bars3BottomLeftIcon" />
        </div>
        <HeaderLogo />
        <div className="mx-auto hidden w-full sm:inline-flex">
          <div className="flex w-full justify-between">
            <HeaderNavigation />
          </div>
        </div>
        <RightContent />
      </nav>
    </header>
  );
}
