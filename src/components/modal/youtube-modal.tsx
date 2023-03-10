import Modal from "./modal";
import YoutubeEmbed from "@/lib/helpers/youtube-embed";
import { useRecoilState } from "recoil";
import { YoutubeModalState } from "@/lib/states/common-state";
import { HeroIcon } from "../ui/hero-icon";

export default function YoutubeModal(): JSX.Element {
  const [youtubeModalState, setYoutubeModalState] =
    useRecoilState(YoutubeModalState);

  return (
    <Modal
      open={youtubeModalState.open}
      closeModal={() => setYoutubeModalState({ open: false })}
    >
      <div className="relative mx-auto max-w-lg p-8 md:max-w-2xl lg:max-w-[50rem]">
        <>
          <button
            className="hover-animation absolute top-0 right-0 cursor-pointer hover:text-primary"
            onClick={() => setYoutubeModalState({ open: false })}
          >
            <HeroIcon iconName="XCircleIcon" className="h-10 w-10" />
          </button>
        </>

        <YoutubeEmbed
          title={youtubeModalState.title}
          embedId={youtubeModalState.embedId}
          height="420"
          width="100%"
        />
      </div>
    </Modal>
  );
}
