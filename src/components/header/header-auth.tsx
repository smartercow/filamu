"use client";
import { AuthModalState } from "@/lib/states/auth-state";
import React from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "../ui/button";
import { HeroIcon } from "../ui/hero-icon";

export default function HeaderAuth(): JSX.Element {
  const setAuthState = useSetRecoilState(AuthModalState);

  return (
    <div>
      <div className="inline-flex rotate-180 select-none md:hidden">
        <button onClick={() => setAuthState({ open: true, view: "login" })}>
          <HeroIcon iconName="ArrowLeftOnRectangleIcon" />
        </button>
      </div>
      <div className="hidden whitespace-nowrap md:inline-flex">
        <div className="flex gap-4">
          <button
            onClick={() => setAuthState({ open: true, view: "login" })}
            className="select-none text-[14px] font-bold uppercase text-main-gray"
          >
            Log In
          </button>
          <Button
            hasAnimation
            onClick={() => setAuthState({ open: true, view: "signup" })}
            className="py-2.5 px-7"
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
}
