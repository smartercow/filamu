/* eslint-disable react/display-name */
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";
import cn from "clsx";
import { DropdownData } from "./header-data";
import type { ReactNode, ComponentPropsWithRef } from "react";

type ListItemProps = ComponentPropsWithRef<"a"> & {
  children: ReactNode;
  className?: string;
  title: string;
  category?: string;
  hasCategoryName?: boolean;
};

type NavigationLinkMainProps = {
  title: string;
  href: string;
};

const NavLinksDropdown = [
  {
    title: "Movies",
    href: "/movies",
  },
  {
    title: "Series",
    href: "/series",
  },
  {
    title: "TV Shows",
    href: "/tv-shows",
  },
];

const NavLinks = [
  {
    title: "Celebrities",
    href: "/celebrities",
  },
  {
    title: "Support",
    href: "/support",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];

const HeaderNavigation = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot min-w-full">
      <NavigationMenu.List className="NavigationMenuList flex gap-4">
        <NavigationLinkMain title="Home" href="/" />

        {NavLinksDropdown.map((item, i) => (
          <NavigationMenu.Item key={i}>
            <NavigationMenu.Trigger
              className="NavigationMenuTrigger group whitespace-nowrap font-semibold uppercase 
                                             text-main-gray hover:text-secondary focus:text-secondary"
            >
              {item.title}{" "}
              <CaretDownIcon
                className="CaretDown text-main-gray group-hover:text-secondary"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <li style={{ gridRow: "span 3" }}>
                  <NavigationMenu.Link asChild>
                    <a className="Callout" href={item.href}>
                      {/*                       <svg
                        aria-hidden
                        width='38'
                        height='38'
                        viewBox='0 0 25 25'
                        fill='white'
                      >
                        <path d='M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z'></path>
                        <path d='M12 0H4V8H12V0Z'></path>
                        <path d='M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z'></path>
                      </svg> */}
                      <img
                        src="/assets/images/posters/bladerunner.jpg"
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="CalloutHeading uppercase">
                        {item.title}
                      </div>
                      <p className="CalloutText inter text-xs">
                        {item.title === "Movies"
                          ? "Kenyan and International movies all in one place."
                          : item.title === "Series"
                          ? "Watch Kenyan and international TV series."
                          : item.title === "TV Shows" &&
                            "Get all Kenyan TV shows and dramas right here."}
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>

                {DropdownData.map((category, i) => (
                  <ListItem
                    key={i}
                    title={category.title}
                    href={`${item.href}${category.href}`}
                    category={item.title}
                    hasCategoryName={category.hasCategoryName}
                  >
                    {category.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}

        <div className="hidden lg:inline-flex">
          <div className="flex gap-4">
            {NavLinks.map((item, i) => (
              <NavigationLinkMain key={i} title={item.title} href={item.href} />
            ))}
          </div>
        </div>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export function NavigationLinkMain({
  title,
  href,
}: NavigationLinkMainProps): JSX.Element {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        className="font-semibold uppercase text-main-gray"
        href={href}
      >
        {title}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
  (
    { className, children, title, category, hasCategoryName, ...props },
    forwardedRef
  ) => (
    <li className="inter">
      <NavigationMenu.Link asChild>
        <a
          className={cn("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">
            {title}
            {hasCategoryName && <span className="lowercase"> {category}</span>}
          </div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default HeaderNavigation;
