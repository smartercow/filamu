import { atom } from "recoil";

interface YoutubeModalState {
  open: boolean;
  title?: string;
  embedId?: string;
}

const defaultYoutubeModalState: YoutubeModalState = {
  open: false,
  title: "",
  embedId: "",
};

export const YoutubeModalState = atom<YoutubeModalState>({
  key: "youtubeModalState",
  default: defaultYoutubeModalState,
});

// ------------------------------
interface ImageModalState {
  open: boolean;
  name?: string;
  source?: string;
}

const defaultImageModalState: ImageModalState = {
  open: false,
  name: "",
  source: "",
};

export const ImageModalState = atom<ImageModalState>({
  key: "imageModalState",
  default: defaultImageModalState,
});

// ------------------------------
interface VideoModalState {
  open: boolean;
  name?: string;
  source?: string;
}

const defaultVideoModalState: VideoModalState = {
  open: false,
  name: "",
  source: "",
};

export const VideoModalState = atom<VideoModalState>({
  key: "videoModalState",
  default: defaultVideoModalState,
});
