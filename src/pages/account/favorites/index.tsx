import dynamic from "next/dynamic";
import Favorites from "@/components/page/account/favorites/favorites";

const Account = dynamic(() => import("@/components/page/account/account"), {
  ssr: false,
});

export default function FavoritesPage(): JSX.Element {
  return (
    <main>
      <Account>
        <Favorites />
      </Account>
    </main>
  );
}
