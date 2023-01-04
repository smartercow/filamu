import { Button } from "../ui/button";

export function DownloadAside(): JSX.Element {
  return (
    <div className="download-app mt-10 w-full max-w-[310px] overflow-hidden rounded-md">
      <div className="space-y-6 bg-black/80 pb-4 text-center">
        <div className="w-full rounded-t-md bg-main-blue/70 py-2">
          <h1 className="text font-semibold uppercase">Watch anywhere</h1>
        </div>
        <div className="px-4 lg:px-5">
          <p className="inter mt-2 text-sm text-white/90">
            Watch offline with the <span className="font-semibold">Filamu</span>{" "}
            app when you download titles to your iPhone, iPad, Tablet or Android
            device.
          </p>
        </div>
        <>
          <Button className="px-3 py-2">Download the app</Button>
        </>
      </div>
    </div>
  );
}
