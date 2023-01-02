import { Categories } from "@/lib/types/category";
import type { Category } from "@/lib/types/category";

export type SliderProps = {
  id: string;
  title: string;
  description: string;
  categories: Category[];
  poster: string;
  stars: string;
};

export const slides: Readonly<SliderProps[]> = [
  {
    id: "1",
    title: "Hit List",
    description: `A well-known lothario, who keeps a journal of his 'hit list', finds his head turned when his neighbour, the next person on his list, is more than he expected. Romantic drama starring Efa Iwara, KC Ejelonu, Cynthia Ebijie, Olumide Oworu.`,
    categories: [Categories.action, Categories.drama],
    poster: "/assets/images/posters/hit-list.png",
    stars: "7.4",
  },
  {
    id: "2",
    title: "Queen of Katwe",
    description:
      "Chess is the escape from poverty for a young Ugandan woman living in Kampala. This movie is based on actual events in Africa and tells of a girl defying the odds and her story of becoming a top chess champion.",
    categories: [Categories.drama, Categories.family],
    poster: "/assets/images/posters/queen-of-katwe.png",
    stars: "7.4",
  },
  {
    id: "3",
    title: "Zoe Modiga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    categories: [Categories.adventure, Categories.comedy],
    poster: "/assets/images/posters/bp-forever.webp",
    stars: "7.4",
  },
  {
    id: "4",
    title: "The Walk",
    description:
      "In 1974, high-wire artist Philippe Petit recruits a team of people to help him realize his dream: to walk the immense void between the World Trade Center towers.",
    categories: [Categories.drama],
    poster: "/assets/images/posters/the-walk.png",
    stars: "7.4",
  },
  {
    id: "5",
    title: "Special Birds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    categories: [Categories.action, Categories.scifi],
    poster: "/assets/images/posters/special-birds.png",
    stars: "7.4",
  },
  {
    id: "6",
    title: "Into the Wild",
    description:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods-and imprisoned just as quickly-Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    categories: [Categories.comedy, Categories.adventure],
    poster: "/assets/images/posters/intothewild.jpg",
    stars: "7.4",
  },
  {
    id: "7",
    title: "Mulholland Drive",
    description:
      "Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.",
    categories: [Categories.action, Categories.scifi],
    poster: "/assets/images/posters/mulhollanddrive.jpg",
    stars: "7.4",
  },
  {
    id: "8",
    title: "Oblivion",
    description:
      "Best friends Becky and Hunter find themselves at the top of a 2,000-foot radio tower.",
    categories: [Categories.animation, Categories.adventure],
    poster: "/assets/images/posters/oblivion.jpg",
    stars: "7.4",
  },
];
