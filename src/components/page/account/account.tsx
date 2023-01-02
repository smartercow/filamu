import { Container, TopContainer } from "@/components/container/container";
import Search from "@/components/search/search";
import ProfileAside from "./profile/profile-aside";
import { ReactNode, useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

type AccountProps = {
  children: ReactNode;
};

export default function Account({ children }: AccountProps): JSX.Element {
  /*   const supabase = useSupabaseClient<Database>();
  const session = useSession();
  const [fullName, setFullName] = useState<Profiles['full_name']>(null);
  const [email, setEmail] = useState<Profiles['email']>(null);
  const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>(null);
  const [loading, setLoading] = useState(true); */

  /*   useEffect(() => {
    getProfile();
  }, [session]);
  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`email, full_name, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setEmail(data.email);
        setFullName(data.full_name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      // alert('Error loading user data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  } */
  return (
    <section className="dosis">
      <TopContainer className="h-44 md:h-56">
        <Search />
      </TopContainer>
      <Container
        className="-mt-24 flex flex-col items-center justify-center md:-mt-36 md:flex-row md:items-start 
                   md:justify-start md:gap-10 lg:gap-12"
      >
        <div className="inline-flex md:hidden">
          <AccountHeading />
        </div>
        <ProfileAside />
        <div className="h-full w-full">
          <div className="hidden md:inline-flex">
            <AccountHeading />
          </div>
          <div className="mt-10 rounded-sm border-[3px] border-main-blue bg-main-blue-for p-6 md:mt-28 md:mb-12">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AccountHeading(): JSX.Element {
  // const { userData } = useUser();

  return (
    <div className="space-y-4 text-center md:text-left">
      <h2 className=" text-xl font-bold uppercase text-white xs:text-2xl sm:text-3xl md:text-4xl">
        {/* {userData?.full_name}’S  */}
        PROFILE
      </h2>
      <p className="inter">Account {">"} Profile</p>
    </div>
  );
}
