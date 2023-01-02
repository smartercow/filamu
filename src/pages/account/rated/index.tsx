import Account from "@/components/page/account/account";
import Profile from "@/components/page/account/profile/profile";
import Rated from "@/components/page/account/rated/rated";

export default function RatedPage(): JSX.Element {
  return (
    <main className="bg-main-darkblue">
      <Account>
        <Rated />
      </Account>
    </main>
  );
}
