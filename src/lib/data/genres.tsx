// Action, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Musical, Mystery, Romance, SciFi, Sport, Thriller, War, Western

export type Trend = {
  id: string;
  name: string;
  href: string;
};

export const Trends: Trend[] = [
  {
    id: "1",
    name: "Trending",
    href: "trending",
  },
  {
    id: "2",
    name: "Popular",
    href: "popular",
  },
  {
    id: "3",
    name: "Recent",
    href: "recent",
  },
  {
    id: "4",
    name: "Top Rated",
    href: "top-rated",
  },
  {
    id: "5",
    name: "Overall",
    href: "overall",
  },
];

export type Genre = {
  id: string;
  title: string;
  href: string;
  color: string;
  value?: string;
};

export const Genres: Genre[] = [
  {
    id: "1",
    title: "Action",
    href: "/action",
    color: "#ea580c", //Orange 600
    value: "Action",
  },
  {
    id: "2",
    title: "Adventure",
    href: "/adventure",
    color: "#65a30d", //Lime 600
    value: "Adventure",
  },
  {
    id: "3",
    title: "Animation",
    href: "/animation",
    color: "#f9a825",
    value: "Animation",
  },
  {
    id: "4",
    title: "Biography",
    href: "/biography",
    color: "#f9a825",
    value: "Biography",
  },
  {
    id: "5",
    title: "Comedy",
    href: "/comedy",
    color: "#0d9488", //Teal 600
    value: "Comedy",
  },
  {
    id: "6",
    title: "Crime",
    href: "/crime",
    color: "#dc2626", //Red 600
    value: "Crime",
  },
  {
    id: "7",
    title: "Documentary",
    href: "/documentary",
    color: "#f9a825",
    value: "Documentary",
  },
  {
    id: "8",
    title: "Drama",
    href: "/drama",
    color: "#7c3aed", //Violet 600
    value: "Drama",
  },
  {
    id: "9",
    title: "Family",
    href: "/family",
    color: "#f9a825",
    value: "Family",
  },
  {
    id: "10",
    title: "Fantasy",
    href: "/fantasy",
    color: "#f9a825",
    value: "Fantasy",
  },
  {
    id: "11",
    title: "History",
    href: "/history",
    color: "#f9a825",
    value: "History",
  },
  {
    id: "12",
    title: "Horror",
    href: "/horror",
    color: "#f9a825",
    value: "Horror",
  },
  {
    id: "13",
    title: "Music",
    href: "/music",
    color: "#0284c7", //Sky 600
    value: "Music",
  },
  {
    id: "14",
    title: "Musical",
    href: "/musical",
    color: "#0891b2", //Cyan 600
    value: "Musical",
  },
  {
    id: "15",
    title: "Mystery",
    href: "/mystery",
    color: "#e11d48", //Rose 600
    value: "Mystery",
  },
  {
    id: "16",
    title: "Romance",
    href: "/romance",
    color: "#4f46e5", //Indigo 600
    value: "Romance",
  },
  {
    id: "17",
    title: "Reality TV",
    href: "/reality-tv",
    color: "#db2777", //Pink 600
    value: "RealityTV",
  },
  {
    id: "18",
    title: "SciFi",
    href: "/scifi",
    color: "#ca8a04", //Yellow 600
    value: "SciFi",
  },
  {
    id: "19",
    title: "Sport",
    href: "/sport",
    color: "#f9a825",
    value: "Sport",
  },
  {
    id: "20",
    title: "Thriller",
    href: "/thriller",
    color: "#f9a825",
    value: "Thriller",
  },
  {
    id: "21",
    title: "War",
    href: "/war",
    color: "#57534e", //Stone 600
    value: "War",
  },
  {
    id: "22",
    title: "Western",
    href: "/western",
    color: "#f9a825",
    value: "Western",
  },
  {
    id: "23",
    title: "African",
    href: "/african",
    color: "#f9a825",
    value: "African",
  },
];
