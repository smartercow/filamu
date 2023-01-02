/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import cn from "clsx";
import { Container } from "../container/container";
import Newsletter from "../newsletter/newsletter";
import { HeroIcon } from "../ui/hero-icon";
import { FilamuLogoLarge } from "@/utils/filamu/logo";

interface ListProps {
  list: { name: string; href: string }[];
}

interface SectionProps {
  heading: string;
  className?: string;
}

const resourcesLinks = [
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blog", href: "/blog" },
  { name: "Help Center", href: "/help-center" },
];

const legalLinks = [
  { name: "Terms of Use", href: "/legal/terms-of-use" },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Security", href: "/legal/secuirty" },
  { name: "Legal Notices", href: "/legal/legal-notices" },
];

const accountLinks = [
  { name: "My Account", href: "/account/profile" },
  { name: "Gift Cards", href: "/account/gift-cards" },
  { name: "Bookmarks", href: "/account/bookmarks" },
  { name: "User Guide", href: "/account/user-guide" },
];

export default function Footer(): JSX.Element {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="footer-bg">
      <Container className="inter flex w-full flex-col justify-between gap-8 py-6 px-6 font-light sm:py-10 md:py-14 lg:flex-row">
        <div className="min-w-[14rem]">
          <FilamuLogoLarge className="h-8 md:h-9 lg:h-10" />
          <div className="mt-5 text-sm text-main-gray md:mt-10">
            <ul>
              <li>11th Avenue st, </li>
              <li>Nairobi, Kenya</li>
            </ul>

            <p className="mt-4">
              Call us:{" "}
              <span className="text-base text-white">+254 0844 123 4567</span>
            </p>
          </div>
        </div>

        <div className="flex w-full justify-between gap-2">
          <OrderedList
            heading="Resources"
            list={resourcesLinks}
            className="w-full"
          />
          <OrderedList heading="Legal" list={legalLinks} className="w-full" />
          <OrderedList
            heading="Account"
            list={accountLinks}
            className="w-full"
          />
        </div>
        <Newsletter />
      </Container>

      <div className="border-t border-main-gray-sec border-opacity-50 bg-main-blue-sec/10 py-3">
        <Container className="flex justify-between gap-2 text-main-gray">
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-semibold">PG Networks</span>
              <span className="hidden sm:inline-block">
                . All Rights Reversed.
              </span>
            </p>
          </div>
          <div>
            <p
              className="flex cursor-pointer select-none items-center whitespace-nowrap text-sm transition-all duration-300 hover:text-secondary"
              onClick={ScrollToTop}
            >
              Back to top{" "}
              <HeroIcon iconName="ArrowLongUpIcon" className="h-4 w-4" />
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}

function OrderedList(props: SectionProps & ListProps) {
  return (
    <div className={cn("flex flex-col gap-3 md:gap-5", props.className)}>
      <div>
        <h2 className="dosis text-lg font-bold text-white">{props.heading}</h2>
      </div>
      <ul className="flex flex-col gap-2">
        {props.list.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="whitespace-nowrap text-sm text-main-gray"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
