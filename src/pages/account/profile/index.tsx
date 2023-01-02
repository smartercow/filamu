import Account from "@/components/page/account/account";
import Profile from "@/components/page/account/profile/profile";

export default function ProfilePage(): JSX.Element {
  return (
    <main className="bg-main-darkblue">
      <Account>
        <Profile />
      </Account>
    </main>
  );
}
