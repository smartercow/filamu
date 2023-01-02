import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Profile } from "@/types/sb-types";
import { Database } from "@/types/supabase-types";
import useUserProfile from "@/utils/api/use-user-profile";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FORM_DATA = {
  full_name: string;
  email: string;
};

const profileInputs =
  "rounded-sm bg-main-blue py-2 border-none pl-2 font-normal dosis";
const profileLabel = "text-main-gray text-sm font-bold normal-case mb-1";

export default function ProfileDetails(): JSX.Element {
  const user = useUser();
  const supabaseClient = useSupabaseClient<Database>();
  const { data: profile } = useUserProfile();
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FORM_DATA>();
  const [fullName, setFullName] = useState<Profile["full_name"] | null>(null);
  const [email, setEmail] = useState<Profile["email"] | null>(null);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name);
      setEmail(profile.email);
    }
  }, [profile]);

  useEffect(() => {
    if (!fullName || !email) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [fullName, email]);

  async function onSubmit(data: FORM_DATA) {
    if (!user) return;
    const response = await supabaseClient
      .from("profiles")
      .update({
        full_name: fullName,
        email: data.email,
      })
      .eq("id", user.id);

    if (response.error) {
      toast.error(response.error.message);
    }

    if (!!data) {
      toast.success("Your changes have been saved");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="font-bold uppercase text-white">Profile details</h3>
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="w-full">
          <Input
            noColon
            name="full_name"
            label="Full Name"
            type="text"
            placeholder="Your full name"
            value={fullName || ""}
            className={profileInputs}
            labelClassName={profileLabel}
            handleChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="w-full">
          <Input
            noColon
            name="email"
            label="Email Address"
            type="email"
            placeholder="Your email address"
            value={email || ""}
            className={profileInputs}
            labelClassName={profileLabel}
            handleChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Button
          disabled={btnDisabled}
          loading={isSubmitting}
          className="py-2 px-7"
          type="submit"
        >
          Update
        </Button>
      </div>
    </form>
  );
}
