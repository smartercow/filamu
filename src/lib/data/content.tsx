import { Genre, Genres } from "./genres";

export type Content = {
  id: string;
  title: string;
  description: string;
  type: string;
  genres: Genre[];
  trend: "trending" | "popular" | "latest" | "top-rated";
  highlight: "home" | "recommended" | "latest";
  poster: string;
  splash: string;
  video_id: string;
  episodes?: string;
  trailer: string;
  teaser: string;
  actors: string[];
  directors: string[];
  duration: string;
  release: string;
  rating: string;
  countries: string[];
  languages: string[];
  quality: string;
};
export const contentData: Content[] = [
  {
    id: "1",
    title: "Hit List",
    description: `A well-known lothario, who keeps a journal of his 'hit list', finds his head turned when his neighbour, the next person on his list, is more than he expected. Romantic drama starring Efa Iwara, KC Ejelonu, Cynthia Ebijie, Olumide Oworu.`,
    type: "movie",
    genres: [Genres[1], Genres[3]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/1-hit-list.png",
    splash: "/assets/content/splash-images/1-hit-list.jpg",
    video_id: "23647897",
    trailer: "442211",
    teaser: "/assets/content/teasers/teaser1.mp4",
    actors: ["Tunbosun Aiyedehin", "Uduoghene Alakpa", "Victor Bassey"],
    directors: ["Ola"],
    duration: "98",
    release: "2019",
    countries: ["Nigeria"],
    languages: ["English, Yoruba"],
    quality: "HD 720",
    rating: "7.2",
  },
  {
    id: "2",
    title: "Black Panther: Wakanda Forever",
    description:
      "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    type: "movie",
    genres: [Genres[0], Genres[1]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/2-black-panther-wakanda-forever.png",
    splash: "/assets/content/splash-images/2-black-panther-wakanda-forever.jpg",
    video_id: "44267900",
    trailer: "RlOB3UALvrQ",
    teaser: "/assets/content/teasers/2-black-panther-wakanda-forever.mp4",
    actors: ["Letitia Wright", "Lupita Nyong'o", "Danai Gurira"],
    directors: ["Ryan Coogler"],
    duration: "201",
    release: "2022",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "9.2",
  },
  {
    id: "3",
    title: "Kedibone",
    description:
      "An exotically beautiful Sotho girl, Kedibone Manamela, chooses to live her youth on the fast lane. Veiled from her loyal childhood boyfriend's eyes, she bounces between being a good girl in the township and the 'it' girl on the high end of Johannesburg streets. A dark threat looms over the day when the news of Kedibone's escapades reaches the young man.",
    type: "movie",
    genres: [Genres[4], Genres[9]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/3-kedibone.png",
    splash: "/assets/content/splash-images/3-kedibone.jpg",
    video_id: "34216890",
    trailer: "nLmRdhGmwxk",
    teaser: "/assets/content/teasers/3-kedibone.mp4",
    actors: ["Natasha Thahane", "Wright Ngubeni", "Busisiwe Mtshali"],
    directors: ["Thomas Gumede", "Tshepo Mokoena"],
    duration: "94",
    release: "2022",
    countries: ["South Africa"],
    languages: ["English, Zulu"],
    quality: "HD 720",
    rating: "7.8",
  },
  {
    id: "4",
    title: "Jewel",
    description:
      "A story about an unlikely love, and how some memories can never be forgotten.",
    type: "movie",
    genres: [Genres[7]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/4-jewel.png",
    splash: "/assets/content/splash-images/4-jewel.jpg",
    video_id: "67920190",
    trailer: "5xp_d_J7rpI",
    teaser: "/assets/content/teasers/4-jewel.mp4",
    actors: ["Connie Chiume", "Michelle Botes", "Nqobile Khumalo"],
    directors: ["Adze Ugah"],
    duration: "88",
    release: "2022",
    countries: ["South Africa"],
    languages: ["English, Zulu"],
    quality: "HD 720",
    rating: "7.5",
  },
  {
    id: "5",
    title: "Aníkúlápó",
    description:
      "It tells the story of Saro, a man seeking for greener pasture, but unfolding events and his affair with the king's wife, he encounters his untimely death and with Akala, a mystical bird believed to give and take life.",
    type: "movie",
    genres: [Genres[7], Genres[9]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/5-anikulapo.png",
    splash: "/assets/content/splash-images/5-anikulapo.jpg",
    video_id: "98724465",
    trailer: "rXIKrHPaB-o",
    teaser: "/assets/content/teasers/5-anikulapo.mp4",
    actors: ["Adebowale Adedayo", "Bimbo Ademoye", "Kareem Adepoju"],
    directors: ["Kunle Afolayan"],
    duration: "202",
    release: "2022",
    countries: ["Nigeria"],
    languages: ["English, Yoruba"],
    quality: "HD 720",
    rating: "8.1",
  },
  {
    id: "6",
    title: "Young, Famous & African",
    description:
      "This reality series follows a group of famed, affluent young media stars in Johannesburg as they build careers, look for love and rekindle old flames.",
    type: "tv-show",
    genres: [Genres[16]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/6-young-famous-african.png",
    splash: "/assets/content/splash-images/6-young-famous-african.jpg",
    video_id: "30789542",
    episodes: "8",
    trailer: "OF9z_Yibuxk",
    teaser: "/assets/content/teasers/6-young-famous-african.mp4",
    actors: ["Khanyi Mbau", "Diamond Platnumz", "Annie Macaulay-Idibia"],
    directors: ["NaN"],
    duration: "45",
    release: "2022",
    countries: ["South Africa"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "6.9",
  },
  {
    id: "7",
    title: "Far from Home",
    description:
      "A financially struggling teen finds himself in the world of luxury after a prestigious scholarship sends him to an exclusive school for the one percent.",
    type: "tv-serie",
    genres: [Genres[7]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/7-far-from-home.png",
    splash: "/assets/content/splash-images/7-far-from-home.jpg",
    video_id: "22133456",
    episodes: "10",
    trailer: "JtrA9DELEhA",
    teaser: "/assets/content/teasers/7-far-from-home.mp4",
    actors: ["Mike Afolarin", "Adesua Etomi-Wellington", "Funke Akindele"],
    directors: ["Damilola Elebe", "Chinaza Onuzo"],
    duration: "43",
    release: "2022",
    countries: ["South Africa"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "7.8",
  },
  {
    id: "8",
    title: "Savage Beauty",
    description:
      "Seeking revenge for her tragic past, a mysterious woman embeds herself in a powerful family who possess a global beauty empire - and dark secrets.",
    type: "tv-serie",
    genres: [Genres[7]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/8-savage-beauty.png",
    splash: "/assets/content/splash-images/8-savage-beauty.jpg",
    video_id: "78812300",
    episodes: "12",
    trailer: "Ro9JbgbQHPM",
    teaser: "/assets/content/teasers/8-savage-beauty.mp4",
    actors: ["Rosemary Zimu", "Dumisani Mbebe", "Nthati Moshesh"],
    directors: ["Lebogang Mogashoa"],
    duration: "45",
    release: "2022",
    countries: ["South Africa"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "7.2",
  },
  {
    id: "9",
    title: "Beasts of No Nation",
    description:
      "A drama based on the experiences of Agu, a child soldier fighting in the civil war of an unnamed African country.",
    type: "movie",
    genres: [Genres[7], Genres[20]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/9-beasts-of-no-nation.png",
    splash: "/assets/content/splash-images/9-beasts-of-no-nation.jpg",
    video_id: "90013459",
    trailer: "2xb9Ty-1frw",
    teaser: "/assets/content/teasers/9-beasts-of-no-nation.mp4",
    actors: ["Abraham Attah", "Emmanuel Affadzi", "Ricky Adelayitor"],
    directors: ["Cary Joji Fukunaga"],
    duration: "137",
    release: "2015",
    countries: ["Ghana"],
    languages: ["English"],
    quality: "HD 720",
    rating: "7.9",
  },
  {
    id: "10",
    title: "Happiness Ever After",
    description:
      "Five years later from where we left our characters, again tackling sisterhood and friendship, this time with the inclusion of a new romantic arc.",
    type: "movie",
    genres: [Genres[7], Genres[15]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/10-happiness-ever-after.png",
    splash: "/assets/content/splash-images/10-happiness-ever-after.jpg",
    video_id: "88013456",
    trailer: "GhGzYbUK5Jw",
    teaser: "/assets/content/teasers/10-happiness-ever-after.mp4",
    actors: ["Nambitha Ben-Mazwi", "Rami Chuene", "Xolile Tshabalala"],
    directors: ["Thabang Moleya"],
    duration: "137",
    release: "2021",
    countries: ["Ghana"],
    languages: ["English"],
    quality: "HD 720",
    rating: "8.6",
  },
  {
    id: "11",
    title: "Aki and Paw Paw",
    description:
      "Relocating to the vibrant city of Lagos, two troublesome brothers search for social media fame after crossing paths with a powerful influencer.",
    type: "movie",
    genres: [Genres[4], Genres[7]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/11-aki-paw-paw.png",
    splash: "/assets/content/splash-images/11-aki-paw-paw.jpg",
    video_id: "65713450",
    trailer: "Dz1E1Fquayw",
    teaser: "/assets/content/teasers/11-aki-paw-paw.mp4",
    actors: ["Osita Iheme", "Chinedu Ikedieze", "Chioma Okafor"],
    directors: ["Biodun Stephen"],
    duration: "133",
    release: "2021",
    countries: ["Nigeria"],
    languages: ["English"],
    quality: "HD 720",
    rating: "7.4",
  },
  {
    id: "12",
    title: "JIVA!",
    description:
      "A talented street dancer from Umlazi, Durban must confront her fears and deal with family objections to pursue her dancing dreams.",
    type: "tv-serie",
    genres: [Genres[7], Genres[6]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/12-jiva.png",
    splash: "/assets/content/splash-images/12-jiva.jpg",
    video_id: "32177109",
    episodes: "5",
    trailer: "zGYOt0ZmifQ",
    teaser: "/assets/content/teasers/12-jiva.mp4",
    actors: ["Sivuyile Ngesi", "Ntuthuzelo Grootboom", "Tony Kgoroge"],
    directors: ["Busisiwe Ntintili"],
    duration: "50",
    release: "2021",
    countries: ["South Africa"],
    languages: ["English"],
    quality: "HD 720",
    rating: "7.7",
  },
  {
    id: "13",
    title: "Black Lightning",
    description:
      "A crusading school principal gets back into action as the original African-American electrical superhero.",
    type: "tv-serie",
    genres: [Genres[0], Genres[17]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/13-black-lightning.png",
    splash: "/assets/content/splash-images/13-black-lightning.jpg",
    video_id: "88200916",
    episodes: "16",
    trailer: "3LAUGA01mUc",
    teaser: "/assets/content/teasers/13-black-lightning.mp4",
    actors: ["Cress Williams", "Nafessa Williams", "Christine Adams"],
    directors: ["Salim Akil"],
    duration: "43",
    release: "2017",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 720",
    rating: "7.6",
  },
  {
    id: "14",
    title: "Dear White People",
    description:
      "At a predominantly white Ivy League college, a group of black students navigate various forms of racial and other types of discrimination.",
    type: "tv-serie",
    genres: [Genres[4], Genres[7]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/14-dear-white-people.png",
    splash: "/assets/content/splash-images/14-dear-white-people.jpg",
    video_id: "202217891",
    episodes: "22",
    trailer: "JMgWMzbM2Pk",
    teaser: "/assets/content/teasers/14-dear-white-people.mp4",
    actors: ["Logan Browning", "Brandon P Bell", "DeRon Horton"],
    directors: ["Justin Simien"],
    duration: "30",
    release: "2017",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "8.2",
  },
  {
    id: "15",
    title: "Greenleaf",
    description:
      "The unscrupulous world of the Greenleaf family and their sprawling Memphis megachurch, dark secrets and lies.",
    type: "tv-serie",
    genres: [Genres[7]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/15-greenleaf.png",
    splash: "/assets/content/splash-images/15-greenleaf.jpg",
    video_id: "33221786",
    episodes: "18",
    trailer: "hVIgWhOrWes",
    teaser: "/assets/content/teasers/15-greenleaf.mp4",
    actors: ["Merle Dandridge", "Kim Hawthorne", "Desiree Ross"],
    directors: ["Craig Wright"],
    duration: "60",
    release: "2016",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 720",
    rating: "6.9",
  },
  {
    id: "16",
    title: "The Get Down",
    description:
      "A ragtag group of teenagers run wild in the streets of the Bronx in the late 1970s.",
    type: "tv-show",
    genres: [Genres[12], Genres[13]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/16-the-get-down.png",
    splash: "/assets/content/splash-images/16-the-get-down.jpg",
    video_id: "65700124",
    episodes: "12",
    trailer: "FYcVrWDOiao",
    teaser: "/assets/content/teasers/16-the-get-down.mp4",
    actors: ["Justice Smith", "Shameik Moore", "Herizen F. Guardiola"],
    directors: ["Stephen Adly Guirgis", "Baz Luhrmann"],
    duration: "52",
    release: "2016",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 720",
    rating: "7.9",
  },
  {
    id: "17",
    title: "She's Gotta Have It",
    description:
      "The story of one woman and her three lovers. TV series based on the film by Spike Lee. Spike Lee adapted and directed the series, which is based on his legendary 1986 film of the same name. Nola is an artist exploring sex and open relationships with her different suitors.",
    type: "tv-serie",
    genres: [Genres[4]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/17-she-gotta-have-it.png",
    splash: "/assets/content/splash-images/17-she-gotta-have-it.jpg",
    video_id: "20774400",
    episodes: "14",
    trailer: "dfmJqkmdUQs",
    teaser: "/assets/content/teasers/17-she-gotta-have-it.mp4",
    actors: ["DeWanda Wise", "Anthony Ramos", "Lyriq Bent"],
    directors: ["Spike Lee"],
    duration: "30",
    release: "2017",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 720",
    rating: "8.1",
  },
  {
    id: "18",
    title: "Nappily Ever After",
    description:
      "Violet Jones tired of waiting for her longtime boyfriend to propose, breaks up with him. But old feelings, and heaps of jealousy, no doubt, arise when he promptly begins dating another woman.",
    type: "tv-show",
    genres: [Genres[4]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/18-nappily-ever-after.png",
    splash: "/assets/content/splash-images/18-nappily-ever-after.jpg",
    video_id: "88334012",
    trailer: "e-pMVkg7wHg",
    teaser: "/assets/content/teasers/18-nappily-ever-after.mp4",
    actors: ["Adam Brooks", "Cee Marcellus", "Trisha R. Thomas"],
    directors: ["Haifaa Al-Mansour"],
    duration: "98",
    release: "2018",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "7.2",
  },
  {
    id: "19",
    title: "What Happened, Miss Simone?",
    description: `A documentary about the life and legend Nina Simone, an American singer, pianist, and civil rights activist labeled the "High Priestess of Soul."`,
    type: "tv-show",
    genres: [Genres[6], Genres[12]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/19-what-happened-miss-simone.png",
    splash: "/assets/content/splash-images/19-what-happened-miss-simone.jpg",
    video_id: "23190066",
    trailer: "DeevW_zYojY",
    teaser: "/assets/content/teasers/19-what-happened-miss-simone.mp4",
    actors: ["Nina Simone", "Lisa Simone Kelly", "Roger Nupie"],
    directors: ["Liz Garbus"],
    duration: "98",
    release: "2015",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 720",
    rating: "7.8",
  },
  {
    id: "20",
    title: "Been So Long",
    description: `A dedicated single mother who, on an unusual night on the town, is charmed by a handsome yet troubled stranger.`,
    type: "tv-show",
    genres: [Genres[13], Genres[15]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/20-been-so-long.png",
    splash: "/assets/content/splash-images/20-been-so-long.jpg",
    video_id: "70011234",
    trailer: "tflC2Jr6scs",
    teaser: "/assets/content/teasers/20-been-so-long.mp4",
    actors: ["Michaela Coel", "Mya Lewis", "Arinzé Kene"],
    directors: ["Tinge Krishnan"],
    duration: "100",
    release: "2018",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 720",
    rating: "6.5",
  },
  {
    id: "21",
    title: "Juanita",
    description: `Living legend Alfre Woodard stars as titular character Juanita, a woman who leaves her life in Ohio behind to embark on a spontaneous and life affirming road trip.`,
    type: "tv-show",
    genres: [Genres[7]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/21-juanita.png",
    splash: "/assets/content/splash-images/21-juanita.jpg",
    video_id: "81266012",
    trailer: "kg5uqDh00H4",
    teaser: "/assets/content/teasers/21-juanita.mp4",
    actors: ["Alfre Woodard", "Bonnie Johnson", "Nia Elizabeth"],
    directors: ["Clark Johnson"],
    duration: "90",
    release: "2019",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 720",
    rating: "7.5",
  },
  {
    id: "22",
    title: "Trevor Noah: Son of Patricia",
    description: `Noah's South African roots and upbringing merge into his recent American experience making for funny and human juxtapositions and observations.`,
    type: "tv-show",
    genres: [Genres[4]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/22-trevor-noah-son-of-patricia.png",
    splash: "/assets/content/splash-images/22-trevor-noah-son-of-patricia.jpg",
    video_id: "66220478",
    trailer: "m6fseZL2uwM",
    teaser: "/assets/content/teasers/22-trevor-noah-son-of-patricia.mp4",
    actors: ["Trevor Noah", "", ""],
    directors: ["David Paul Meyer"],
    duration: "63",
    release: "2018",
    countries: ["United States", "South Africa"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "8.9",
  },
  {
    id: "23",
    title: "See You Yesterday",
    description: `Two Brooklyn teenage prodigies, C.J. Walker and Sebastian Thomas, build makeshift time machines to save C.J.'s brother, Calvin, from being wrongfully killed by a police officer.`,
    type: "tv-show",
    genres: [Genres[1], Genres[5]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/23-see-you-yesterday.png",
    splash: "/assets/content/splash-images/23-see-you-yesterday.jpg",
    video_id: "44019967",
    trailer: "8MVRWQ1PnMo",
    teaser: "/assets/content/teasers/23-see-you-yesterday.mp4",
    actors: ["Eden Duncan-Smith", "Dante Crichlow", "Astro"],
    directors: ["Stefon Bristol"],
    duration: "84",
    release: "2018",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "8.1",
  },
  {
    id: "24",
    title: `"Black Mirror" Striking Vipers`,
    description: `Two estranged college friends reunite in later life, triggering a series of events that could alter their lives forever.`,
    type: "tv-serie",
    genres: [Genres[14], Genres[17]],
    trend: "trending",
    highlight: "home",
    poster: "/assets/content/posters/24-black-mirror-striking-vipers.png",
    splash: "/assets/content/splash-images/24-black-mirror-striking-vipers.jpg",
    video_id: "55019967",
    episodes: "16",
    trailer: "ahfgCW5ymqg",
    teaser: "/assets/content/teasers/24-black-mirror-striking-vipers.mp4",
    actors: ["Anthony Mackie", "Yahya Abdul-Mateen II", "Nicole Beharie"],
    directors: ["Owen Harris"],
    duration: "61",
    release: "2018",
    countries: ["United States"],
    languages: ["English"],
    quality: "HD 1080",
    rating: "8.1",
  },
];
