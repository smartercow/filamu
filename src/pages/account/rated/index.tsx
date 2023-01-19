import dynamic from "next/dynamic";
import Rated from "@/components/page/account/rated/rated";

const Account = dynamic(() => import("@/components/page/account/account"), {
  ssr: false,
});

export default function RatedPage(): JSX.Element {
  return (
    <main className="bg-main-darkblue">
      <Account>
        <Rated />
      </Account>
    </main>
  );
}
