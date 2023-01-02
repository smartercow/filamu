import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
/* import { Profiles } from '@helpers/supabase/database-types';
import { useUser } from '@lib/context/user-context'; */
import React, { useEffect, useState } from "react";

const profileInputs =
  "rounded-sm bg-main-blue py-2 border-none pl-2 font-normal dosis";
const profileLabel = "text-main-gray text-sm font-bold normal-case mb-1";

export default function Profile(): JSX.Element {
  // const [fullName, setFullName] = useState<Profiles['full_name'] | null>(null);
  const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState<Profiles['full_name'] | null>(null);
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /*   const { userData } = useUser();
  useEffect(() => {
    if (userData) {
      setFullName(userData.full_name);
      setEmail(userData.email);
    }
  }, [userData]); */

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h3 className="font-bold uppercase text-white">Profile details</h3>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="w-full">
            <Input
              name="full_name"
              label="Full Name"
              type="text"
              noColon
              value={fullName || ""}
              className={profileInputs}
              labelClassName={profileLabel}
              handleChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
            />
          </div>
          <div className="w-full">
            <Input
              name="email"
              label="Email Address"
              type="email"
              noColon
              value={email || ""}
              className={profileInputs}
              labelClassName={profileLabel}
              handleChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
            />
          </div>
        </div>
        <div>
          <Button className="py-2 px-7">Update</Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-bold uppercase text-white">Change password</h3>
        <div className="flex gap-6">
          <div className="w-full space-y-3">
            <Input
              name="current_password"
              label="Current password"
              type="password"
              noColon
              className={profileInputs}
              labelClassName={profileLabel}
              handleChange={(e) => setFullName(e.target.value)}
              placeholder="***************"
            />
            <Input
              name="new_password"
              label="New password"
              type="password"
              noColon
              className={profileInputs}
              labelClassName={profileLabel}
              handleChange={(e) => setFullName(e.target.value)}
              placeholder="***************"
            />
            <Input
              name="confirm_password"
              label="Confirm password"
              type="password"
              noColon
              className={profileInputs}
              labelClassName={profileLabel}
              handleChange={(e) => setFullName(e.target.value)}
              placeholder="***************"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div>
          <Button className="py-2 px-7">Change</Button>
        </div>
      </div>
    </div>
  );
}
