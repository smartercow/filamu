import Account from "@/components/page/account/account";
import Profile from "@/components/page/account/profile/profile";

export default function ProfilePage(): JSX.Element {
  return (
    <main>
      <Account>
        <Profile />
      </Account>
    </main>
  );
}
