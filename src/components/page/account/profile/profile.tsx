import ProfileDetails from "./details-profile";
import ProfilePassword from "./password-profile";

export default function Profile(): JSX.Element {
  return (
    <div className="space-y-10">
      <ProfileDetails />
      <ProfilePassword />
    </div>
  );
}
