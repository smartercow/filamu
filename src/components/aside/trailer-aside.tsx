import YoutubeEmbed from "@/lib/helpers/youtube-embed";
import { AsideHeading } from "./aside";

export default function TrailerAside(): JSX.Element {
  return (
    <div className="w-full space-y-4">
      <AsideHeading title="Latest trailer" />
      <YoutubeEmbed
        title="Avatar 2"
        embedId="c1nYF21FGS4"
        height="250"
        width="290"
      />
    </div>
  );
}
