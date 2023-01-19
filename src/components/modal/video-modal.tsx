import { VideoModalState } from "@/lib/states/common-state";
import React from "react";
import { useRecoilState } from "recoil";
import { HeroIcon } from "../ui/hero-icon";
import Modal from "./modal";

export default function VideoModal(): JSX.Element {
  const [videoModal, setVideoModal] = useRecoilState(VideoModalState);
  return (
    <Modal
      open={videoModal.open}
      closeModal={() => setVideoModal({ open: false })}
    >
      <div className="relative mx-auto h-full max-w-6xl p-8">
        <>
          <button
            className="hover-animation absolute top-0 right-0 cursor-pointer hover:text-primary"
            onClick={() => setVideoModal({ open: false })}
          >
            <HeroIcon iconName="XCircleIcon" className="h-10 w-10" />
          </button>
        </>

        <div>
          <video src={videoModal.source} controls className="h-full w-full" />
        </div>
      </div>
    </Modal>
  );
}
