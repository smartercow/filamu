import Modal from "./modal";
import YoutubeEmbed from "@/lib/helpers/youtube-embed";
import { useRecoilState } from "recoil";
import { TrailerModalState } from "@/lib/states/common-state";
import { HeroIcon } from "../ui/hero-icon";

export default function TrailerModal(): JSX.Element {
  const [trailerModalState, setTrailerModalState] =
    useRecoilState(TrailerModalState);

  return (
    <Modal
      open={trailerModalState.open}
      closeModal={() => setTrailerModalState({ open: false })}
    >
      <div className="relative mx-auto max-w-lg p-8 md:max-w-2xl lg:max-w-[50rem]">
        <>
          <button
            className="hover-animation absolute top-0 right-0 cursor-pointer hover:text-primary"
            onClick={() => setTrailerModalState({ open: false })}
          >
            <HeroIcon iconName="XCircleIcon" className="h-10 w-10" />
          </button>
        </>

        <YoutubeEmbed
          title={trailerModalState.title}
          embedId={trailerModalState.embedId}
          height="420"
          width="100%"
        />
      </div>
    </Modal>
  );
}
