import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const profileInputs =
  "rounded-sm bg-main-blue py-2 border-none pl-2 font-normal dosis";
const profileLabel = "text-main-gray text-sm font-bold normal-case mb-1";

export default function ProfilePassword(): JSX.Element {
  return (
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
            placeholder="***************"
          />
          <Input
            name="new_password"
            label="New password"
            type="password"
            noColon
            className={profileInputs}
            labelClassName={profileLabel}
            placeholder="***************"
          />
          <Input
            name="confirm_password"
            label="Confirm password"
            type="password"
            noColon
            className={profileInputs}
            labelClassName={profileLabel}
            placeholder="***************"
          />
        </div>
        <div className="w-full"></div>
      </div>
      <div>
        <Button className="py-2 px-7">Change</Button>
      </div>
    </div>
  );
}
