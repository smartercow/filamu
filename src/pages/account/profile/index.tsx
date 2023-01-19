import dynamic from "next/dynamic";
import Profile from "@/components/page/account/profile/profile";

const Account = dynamic(() => import("@/components/page/account/account"), {
  ssr: false,
});

export default function ProfilePage(): JSX.Element {
  return (
    <main>
      <Account>
        <Profile />
      </Account>
    </main>
  );
}
