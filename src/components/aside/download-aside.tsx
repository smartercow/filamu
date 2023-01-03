import React from "react";
import { Button } from "../ui/button";

export default function DownloadAside(): JSX.Element {
  return (
    <div className="download-app mt-10 w-full rounded-md">
      <div className="space-y-6 bg-black/80 pb-4 text-center">
        <div className="w-full rounded-t-md bg-white/20 py-1">
          <h1 className="text-lg font-semibold uppercase">Watch anywhere</h1>
        </div>
        <p className="inter mt-2">
          Watch offline with the <span className="font-semibold">Filamu</span>{" "}
          app when you download titles to your iPhone, iPad, Tablet or Android
          device.
        </p>
        <>
          <Button className="px-3 py-2">Download the app</Button>
        </>
      </div>
    </div>
  );
}
