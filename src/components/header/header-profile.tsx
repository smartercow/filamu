import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { User, useSupabaseClient } from "@supabase/auth-helpers-react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { HeroIcon } from "../ui/hero-icon";

type RightContentProps = {
  user?: User | null;
};

const HeaderProfile: React.FC<RightContentProps> = (): JSX.Element => {
  const supabase = useSupabaseClient();

  const router = useRouter();

  const handleRef = (link: string) => {
    router.push(link);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="z-10 inline-flex w-full items-center justify-center rounded-md bg-main-gray bg-opacity-20 px-2 py-1 text-base 
                     font-bold uppercase text-main-gray hover:opacity-90 md:py-1.5 md:px-4  
                     md:hover:bg-opacity-10 md:hover:opacity-100"
        >
          <span className="hidden md:inline-flex">Account</span>
          <HeroIcon
            iconName="UserCircleIcon"
            className="inline-flex h-6 w-6 md:hidden"
          />
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-main-gray"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="hover-animation absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md border 
                   border-main-gray border-opacity-20 bg-main-darkblue bg-opacity-90 shadow-lg ring-1 ring-black ring-opacity-5 
                   focus:outline-none md:w-56"
        >
          <div className="px-1 py-1 text-base font-semibold">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleRef("/account/profile")}
                  className={`${
                    active ? "bg-primary text-white" : "text-white"
                  } hover-animation group flex w-full items-center rounded-md px-2 py-2 text-sm md:text-base`}
                >
                  <HeroIcon
                    className="hover-animation mr-2 h-5 w-5 md:h-7 md:w-7"
                    iconName="UserIcon"
                    solid={active ? true : false}
                    aria-hidden="true"
                  />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleRef("account/favorites")}
                  className={`${
                    active ? "bg-primary text-white" : "text-white"
                  } hover-animation group flex w-full items-center rounded-md px-2 py-2 text-sm md:text-base`}
                >
                  <HeroIcon
                    className="hover-animation mr-2 h-5 w-5 md:h-7 md:w-7"
                    iconName="BookmarkIcon"
                    solid={active ? true : false}
                    aria-hidden="true"
                  />
                  Bookmarks
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleRef("account/settings")}
                  className={`${
                    active ? "bg-primary text-white" : "text-white"
                  } hover-animation group flex w-full items-center rounded-md px-2 py-2 text-sm md:text-base`}
                >
                  <HeroIcon
                    className="hover-animation mr-2 h-5 w-5 md:h-7 md:w-7"
                    iconName="Cog8ToothIcon"
                    solid={active ? true : false}
                    aria-hidden="true"
                  />
                  Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-c-red/70 text-white" : "text-white"
                  } hover-animation group mt-2 flex w-full items-center rounded-md bg-primary px-2 py-2 text-sm transition-all duration-500 md:text-base`}
                  onClick={() => supabase.auth.signOut()}
                >
                  <HeroIcon
                    className="hover-animation mr-2 h-5 w-5 md:h-7 md:w-7"
                    iconName="ArrowLeftOnRectangleIcon"
                    solid={active ? true : false}
                    aria-hidden="true"
                  />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeaderProfile;
