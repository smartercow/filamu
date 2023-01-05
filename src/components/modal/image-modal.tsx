import Modal from "./modal";
import YoutubeEmbed from "@/lib/helpers/youtube-embed";
import { useRecoilState } from "recoil";
import { ImageModalState, YoutubeModalState } from "@/lib/states/common-state";
import { HeroIcon } from "../ui/hero-icon";

export default function ImageModal(): JSX.Element {
  const [imageModalState, setImageModalState] = useRecoilState(ImageModalState);

  return (
    <Modal
      open={imageModalState.open}
      closeModal={() => setImageModalState({ open: false })}
    >
      <div className="mx-auto w-full max-w-lg md:max-w-2xl">
        <div className="max-w-fit">
          <div className="flex w-auto justify-end">
            <>
              <button
                className="hover-animation cursor-pointer hover:text-primary"
                onClick={() => setImageModalState({ open: false })}
              >
                <HeroIcon iconName="XCircleIcon" className="h-10 w-10" />
              </button>
            </>
          </div>

          <div className="-mt-1 px-8">
            <img
              src={imageModalState.source}
              alt={imageModalState.name}
              className="max-h-[80vh] rounded-md object-contain"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
