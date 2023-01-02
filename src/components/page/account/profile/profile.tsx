import React, { useEffect, useState } from "react";
import ProfileDetails from "./profile-details";
import ProfilePassword from "./profile-password";

export default function Profile(): JSX.Element {
  return (
    <div className="space-y-10">
      <ProfileDetails />
      <ProfilePassword />
    </div>
  );
}
