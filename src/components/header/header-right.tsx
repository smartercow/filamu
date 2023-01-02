import { useSession } from "@supabase/auth-helpers-react";
import HeaderAuth from "./header-auth";
import HeaderProfile from "./header-profile";

function RightContent() {
  const session = useSession();

  return <div className="">{session ? <HeaderProfile /> : <HeaderAuth />}</div>;
}

export default RightContent;
