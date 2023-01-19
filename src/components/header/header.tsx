import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "./header-logo";
import { HeroIcon } from "../ui/hero-icon";
import cn from "clsx";
import RightContent from "./header-right";
import HeaderNavigation from "./header-navigation";
import { useRecoilState } from "recoil";
import { MenuState } from "@/lib/states/menu-state";

export default function Header(): JSX.Element {
  const path = usePathname();
  const [menuState, setMenuState] = useRecoilState(MenuState);
  const toggle = menuState.open;

  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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
        "dosis hover-animation fixed z-40 w-full py-1 md:py-0",
        scrolled &&
          // 'bg-opacity-60 bg-clip-padding backdrop-blur-xl backdrop-filter'
          "bg-main-blue-sec"
      )}
    >
      <nav className="">
        <div
          className={cn(
            "app-width-handler flex items-center justify-between gap-4 rounded-md pt-2 pb-2 md:pb-1",
            path?.startsWith("/movie/title") &&
              "bg-main-darkblue bg-opacity-25",
            path?.startsWith("/tv-serie/title") &&
              "bg-main-darkblue bg-opacity-25",
            path?.startsWith("/tv-show/title") &&
              "bg-main-darkblue bg-opacity-25",
            scrolled && "bg-transparent"
          )}
        >
          <div className="z-[44] inline-flex sm:hidden">
            <button
              onClick={() => setMenuState({ open: !toggle })}
              className="hover-animation"
            >
              {toggle ? (
                <HeroIcon iconName="XMarkIcon" />
              ) : (
                <HeroIcon iconName="Bars3BottomLeftIcon" />
              )}
            </button>
          </div>
          <HeaderLogo />
          <div className="mx-auto hidden w-full sm:inline-flex">
            <div className="flex w-full justify-between">
              <HeaderNavigation />
            </div>
          </div>
          <RightContent />
        </div>
      </nav>
    </header>
  );
}
