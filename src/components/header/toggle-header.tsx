import Link from "next/link";
import { MenuState } from "@/lib/states/menu-state";
import { useRecoilState } from "recoil";
import cn from "clsx";

const NavLinks = [
  { title: "Home", href: "/" },
  { title: "Movies", href: "/movies" },
  { title: "TV Series", href: "/tv-series" },
  { title: "TV Shows", href: "/tv-shows" },
  { title: "Celebrities", href: "/celebrities" },
  { title: "Support", href: "/filamu/support" },
  { title: "FAQ", href: "/filamu/faq" },
];
export default function ToggleMenu(): JSX.Element {
  const [menuState, setMenuState] = useRecoilState(MenuState);
  const toggle = menuState.open ? "left-0" : "left-[-100%]";

  return (
    <div
      className={cn(
        "fixed top-0 z-30 h-screen w-full bg-main-blue-sec px-4 transition-all duration-500",
        toggle
      )}
    >
      <div className="py-16 pl-5 text-white">
        <ul className="toggle-menu-list">
          {NavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuState({ open: false })}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="inter mt-2 text-center text-white">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">PG Networks</span>
          <span className="hidden sm:inline-block">. All Rights Reversed.</span>
        </p>
      </div>
    </div>
  );
}
