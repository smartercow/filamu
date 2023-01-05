export type News = {
  id: number;
  link: string;
  title: string;
  image: string;
  timestamp: string;
  column_one: string;
  column_two: string;
  description: string;
};

export const newsData: News[] = [
  {
    id: 1,
    link: "8857-queen-of-glory-is-out-now-we-spoke-to-creator-and-star-nana-mensah-about-the-movie",
    title: `"Queen Of Glory" Is Out Now – We Spoke To Creator And Star Nana Mensah About The Movie`,
    image: "/assets/news/images/1-queen-of-glory.jpg",
    timestamp: "4 hours ago",
    column_one:
      "Queen of Glory is the story of Sarah Obeng, the brilliant child of Ghanaian immigrants, played by Nana Mensah, who is quitting her Ivy League PhD program to follow her married lover to Ohio. However, her mother passes away suddenly, leaving her ownership of a Christian bookstore in the Pelham Parkway neighbourhood of the Bronx.",
    column_two:
      "Sarah’s mother, a devout Christian, had always wanted her daughter to take over the store, but Sarah had other plans. Now, she must decide whether to return to Ghana or stay in the US and take over the store. The film is a story of family, faith, and the struggle to find one’s place in the world.",
    description:
      "Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar winning Room star Brie Larson polsed to produce, and play the",
  },
  {
    id: 2,
    link: "8856-african-cinema-is-more-exciting-than-ever",
    title:
      "African cinema is more exciting than ever. Where’s its wider recognition?",
    image: "/assets/news/images/2-african-cinema.jpg",
    timestamp: "8 hours ago",
    column_one:
      "The issue, in part, is one of perceptions. Many Hollywood executives thought, and continue to think, that no one is interested in seeing films focused on Black and African people, said Moradewun Adejunmobi, a professor at the University of Texas at Austin who specializes in African cinema.",
    column_two:
      "“There’s a perception that there’s no market for African cinema,” Adejunmobi said. “But that’s not true. There’s a market for African cinema, but it’s not the same market as the U.S. market. It’s a global market.”",
    description:
      "Two years ago, “Parasite” director Bong Joon Ho called out American audiences. His charge? Americans don’t know enough about movies outside their own borders. Once you overcome the 1-inch tall barrier of subtitles,” he said, while accepting a Golden Globe award for his film, “you will be introduced to so many more amazing films.",
  },
  {
    id: 3,
    link: "8823-the-feature-adaptation-of-wole-soyinkas-death-and-the-kings-horseman",
    title: `The feature adaptation of Wole Soyinka's 'Death and The King’s Horseman'`,
    image: "/assets/news/images/3-kings-horsemen.webp",
    timestamp: "10 hours ago",
    column_one:
      "Netflix on Tuesday unveiled its slate of African originals, presenting a showcase of local-language series, feature films and non-fiction projects produced in Africa that will roll out across the streamer’s global service later this year and in early 2023.",
    column_two:
      "The announcement comes as Netflix continues to expand its African footprint, with the streamer having recently announced a new production hub in Lagos, Nigeria, and a new office in Johannesburg, South Africa.",
    description:
      "Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar winning Room star Brie Larson polsed to produce, and play the",
  },
  {
    id: 4,
    link: "8828-hollywood-puts-africa-in-a-box",
    title:
      "Hollywood puts Africa in a box, same lack of imagination is also at play when it comes to movies from the continent",
    image: "/assets/news/images/4-african-documentary.png",
    timestamp: "18 hours ago",
    column_one:
      "Two years ago, “Parasite” director Bong Joon Ho called out American audiences. His charge? Americans don’t know enough about movies outside their own borders.",
    column_two:
      "Once you overcome the 1-inch tall barrier of subtitles,” he said, while accepting a Golden Globe award for his film, “you will be introduced to so many more amazing films.",
    description:
      "The issue, in part, is one of perceptions. Many Hollywood executives thought, and continue to think, that no one is interested in seeing films focused on Black and African people, said Moradewun Adejunmobi, a professor at the University of California, Davis, who studies African literature and pop culture.",
  },
  {
    id: 5,
    link: "8875-the-award-winning-african-documentary-project-that-goes-inside-the-lives-of-migrants",
    title:
      "The award-winning African documentary project that goes inside the lives of migrants",
    image: "/assets/news/images/5-hollywood-puts-africa.jpg",
    timestamp: "20 hours ago",
    column_one: `No U-Turn, directed by Nollywood producer Ike Nnaebue, is structured around the migration journey he himself took as a young man travelling from Nigeria to Morocco, dreaming of Europe.

      No Simple Way Home by Akuol de Mabior reflects on her parents, who are past and present political leaders in South Sudan. She explores her own complicated relationship to the country.`,
    column_two: `The award-winning African documentary project that goes inside the lives of migrants`,
    description:
      "For far too long the west has been telling stories about and talking on behalf of Africa. However, a new slate of 25 documentary films by African filmmakers called Generation Africa is currently making waves at international film festivals and is set to shift perspectives about migration in and from the continent.",
  },
  {
    id: 6,
    link: "8844-why-coming-2-america-only-delivers-hollywoods-version-of-africa",
    title: "Why ‘Coming 2 America’ Only Delivers Hollywood’s Version of Africa",
    image: "/assets/news/images/6-coming-2-america.webp",
    timestamp: "1 day ago",
    column_one: `Like the stereotypical narratives we have come to expect from Hollywood about Africa, “Coming 2 America” offers nothing new to audiences despite the 33 years that separate the original from the sequel.

      The fictional country of Zamunda is a mixed bag of persistent stereotypes about African poverty, disease, conflict, poor leadership and hypersexual women who lack agency, all coated in Eddie Murphy’s brand of slapstick comedy that uses negative stereotypes to get easy laughs. It doesn’t add much nuance or context to the continent’s story, but it does put Africa front and center on a global stage.`,
    column_two: `Although the responsibility of telling nuanced and authentic stories about Africa belongs to the continent’s storytellers, not to Hollywood, until they have the platform and reach that Hollywood’s movies and actors do, Africans will continue to watch, and hold them to account for the stories they tell about Africa and our expectations are much higher now than they were then.`,
    description:
      "Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar winning Room star Brie Larson polsed to produce, and play the",
  },
];

export const NewsCategories = [
  {
    id: 1,
    name: "Awards",
    link: "awards",
    total: 50,
  },
  {
    id: 2,
    name: "Box office",
    link: "box-office",
    total: 38,
  },
  {
    id: 3,
    name: "Film reviews",
    link: "film-reviews",
    total: 72,
  },
  {
    id: 4,
    name: "News",
    link: "news-categories",
    total: 38,
  },
  {
    id: 5,
    name: "Global",
    link: "global",
    total: 12,
  },
];
