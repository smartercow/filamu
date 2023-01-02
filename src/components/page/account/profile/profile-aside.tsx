import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileAvatar from "./profile-avatar";

const detailLinks = [
  { name: "My Account", href: "/account/profile" },
  { name: "Favorites", href: "/account/favorites" },
  { name: "Rated Content", href: "/account/bookmarks" },
  { name: "Payment", href: "/account/payment" },
  { name: "Change password", href: "/account/change-password" },
];
export default function ProfileAside(): JSX.Element {
  const pathname = usePathname();
  return (
    <div
      className="dosis mt-14 h-full w-full max-w-sm space-y-4 rounded-md border-4 border-main-blue-sec bg-main-darkblue 
               py-8 md:mt-0 md:max-w-[15rem]"
    >
      <ProfileAvatar />
      <div className="border-y border-main-blue-sec py-4 pl-7">
        <div className="pb-2">
          <p className="inter text-sm font-light text-main-gray">
            Account Details
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {detailLinks.slice(0, 3).map((item) => {
            if (pathname?.startsWith(item.href))
              return (
                <span key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold uppercase text-secondary"
                  >
                    {item.name}
                  </Link>
                </span>
              );
            else
              return (
                <span key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold uppercase"
                  >
                    {item.name}
                  </Link>
                </span>
              );
          })}
        </div>
      </div>
      <div className="pl-7 pb-3">
        <div className="pb-2">
          <p className="inter text-sm font-light text-main-gray">
            Other Details
          </p>
        </div>
        {detailLinks.slice(3, 4).map((item) => {
          if (pathname?.startsWith(item.href))
            return (
              <span key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold uppercase text-secondary"
                >
                  {item.name}
                </Link>
              </span>
            );
          else
            return (
              <span key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold uppercase"
                >
                  {item.name}
                </Link>
              </span>
            );
        })}
      </div>
    </div>
  );
}
