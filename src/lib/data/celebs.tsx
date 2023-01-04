export type Celeb = {
  id: number;
  sex: string;
  name: string;
  roles: number;
  image: string;
  video: string;
  photos: string[];
  country: string;
  celebId: number;
  category: string;
  biography: string;
  popularity: number;
  dateOfBirth: string;
};

export const Celebrities: Celeb[] = [
  {
    id: 1,
    sex: "female",
    name: "Lupita Nyong'o",
    roles: 4,
    image: "/assets/celebrities/1-lupita-nyongo.png",
    video: "aFaZ-GvJuVI",
    photos: [""],
    country: "Kenya",
    celebId: 10020,
    category: "actress",
    biography:
      "Lupita Nyong'o is a Kenyan actress and producer. Her first feature film role was in the film 12 Years a Slave, for which she received the Academy Award for Best Supporting Actress as well as multiple accolades, including the Screen Actors Guild® Award, the Critics' Choice Award, the Independent Spirit Award, and the NAACP Award. She has since starred in Mira Nair's Queen of Katwe, Star Wars: The Force Awakens, Ryan Coogler's record-breaking box office hit Black Panther, and most recently in Jordan's Peele's critically acclaimed horror film, Us. Nyong'o earned a Tony nomination for her Broadway debut in Danai Gurira's play Eclipsed. She lives in Brooklyn.",
    popularity: 9.9,
    dateOfBirth: "March 1, 1983",
  },
  {
    id: 2,
    sex: "male",
    name: "Daniel Kaluuya",
    roles: 6,
    image: "/assets/celebrities/2-daniel-kaluuya.png",
    video: "QdOMyoOu020",
    photos: [""],
    country: "United Kingdom",
    celebId: 10230,
    category: "actor",
    biography: `Daniel Kaluuya is an English actor and writer. He is best known for Get Out (2017), Black Panther (2018) and for portraying Fred Hampton in Judas & The Black Messiah (2021).He had a supporting role in Sicario (2015).He also starred in the Black Mirror episode "Fifteen Million Merits".For his work in Get Out he was nominated for an Academy Award for Best Actor.Kaluuya also had minor roles in Johnny English Reborn (2011) and Kick-Ass 2 (2013).His film debut was Shoot the Messenger (2006).`,
    popularity: 9.8,
    dateOfBirth: "February 24, 1989",
  },
  {
    id: 3,
    sex: "male",
    name: "Ryan Coogler",
    roles: 2,
    image: "/assets/celebrities/3-ryan-coogler.png",
    video: "HUMgPdyQews",
    photos: ["", "", ""],
    country: "United States",
    celebId: 10180,
    category: "director",
    biography: `Ryan Kyle Coogler is an African-American filmmaker and producer who is from Oakland, California. He is known for directing the Black Panther film series, Creed, a Rocky spin-off and Fruitvale Station. He frequently casts Michael B. Jordan in his works. He produced the Creed sequels, Judas and the Black Messiah and Space Jam: A New Legacy. He is married to Zinzi since 2016.`,
    popularity: 9.8,
    dateOfBirth: "May 23, 1986",
  },
  {
    id: 4,
    sex: "male",
    name: "Idris Elba",
    roles: 7,
    image: "/assets/celebrities/4-idris-elba.png",
    video: "h37XmTPfweA",
    photos: ["", "", ""],
    country: "Sierra Leone",
    celebId: 10083,
    category: "actor",
    biography: `An only child, Idrissa Akuna Elba was born and raised in London, England. His father, Winston, is from Sierra Leone and worked at Ford Dagenham; his mother, Eve, is from Ghana and had a clerical duty. Idris attended school in Canning Town, where he first became involved in acting, before he dropped out. He gained a place in the National Youth Music Theatre - thanks to a £1,500 Prince's Trust grant. To support himself between acting roles, he worked in jobs such as tyre-fitting, cold call advertising sales, and working night shifts at Ford Dagenham.`,
    popularity: 9.7,
    dateOfBirth: "September 6, 1972",
  },
  {
    id: 5,
    sex: "female",
    name: "Danai Gurira",
    roles: 9,
    image: "/assets/celebrities/5-danai-gurira.png",
    video: "csRFZsA7W1c",
    photos: ["", "", ""],
    country: "Zimbabwe",
    celebId: 10104,
    category: "actress",
    biography: `Danai Gurira was born in Grinnell, Iowa, to Josephine and Roger Gurira, who were from Zimbabwe. Her father was then teaching Chemistry at Grinnell College. When she was five, the family moved back to Zimbabwe, residing in the capital Harare. Gurira later returned to the United States, and studied social psychology at Macalester College, receiving an MFA from New York University's Tisch School of the Arts. She is the co-author of the play, "In the Continuum", with Nikkole Salter.`,
    popularity: 9.6,
    dateOfBirth: "February 14, 1978",
  },
  {
    id: 6,
    sex: "male",
    name: "Don Cheadle",
    roles: 6,
    image: "/assets/celebrities/6-don-cheadle.png",
    video: "Fvgf27OtiZo",
    photos: ["", "", ""],
    country: "United States",
    celebId: 10015,
    category: "actor",
    biography: `Donald Frank Cheadle was born in Kansas City, Missouri, on November 29, 1964. His childhood found him moving from city to city with his family: mother Bettye (née North), a teacher; father Donald Frank Cheadle Sr., a clinical psychologist; sister Cindy; and brother Colin. After graduating from high school in Denver, Colorado, Cheadle attended and graduated from the California Institute of the Arts with a bachelor¹s degree in fine arts. Encouraged by his college friends, he attended a variety of auditions and landed a recurring role on the hit series Fame (1982), which led to feature film roles in Dennis Hopper's Colors (1988).`,
    popularity: 9.5,
    dateOfBirth: "November 29, 1964",
  },
  {
    id: 7,
    sex: "female",
    name: "Sophie Okonedo",
    roles: 5,
    image: "/assets/celebrities/7-sophie-okonedo.png",
    video: "pYwUeSC2mZE",
    photos: ["", "", ""],
    country: "United Kingdom",
    celebId: 10008,
    category: "actress",
    biography: `Sophie Okonedo is a British actress. She was nominated for the Academy Award for Best Supporting Actress for her role as Tatiana Rusesabagina in Hotel Rwanda (2004).Okonedo was born within London in 1968. Her parents were Henry Okonedo (1939-2009) and Joan Allman. Her father was British Nigerian employed as a government worker. Her mother was a British Jew employed as a Pilates teacher. Sophie's maternal grandparents were Yiddish-speaking emigrants to the United Kingdom, one from Poland and the other from Russia.Henry Okonedo abandoned his family around 1973, when Sophie was 5.`,
    popularity: 9.4,
    dateOfBirth: "August 11, 1968",
  },
  {
    id: 8,
    sex: "male",
    name: "Chiwetel Ejiofor",
    roles: 1,
    image: "/assets/celebrities/8-chiwetel-ejiofor.png",
    video: "4lf1B_yeYkA",
    photos: ["", "", ""],
    country: "Nigeria",
    celebId: 10425,
    category: "actor",
    biography: `English actor, writer and director Chiwetel Ejiofor is renowned for his portrayal of Solomon Northup in 12 Years a Slave (2013), for which he received Academy Award and Golden Globe Award nominations, along with the BAFTA Award for Best Actor. He is also known for playing Okwe in Dirty Pretty Things (2002), the Operative in Serenity (2005), Lola in Kinky Boots (2005), Luke in Children of Men (2006), Dr. Adrian Helmsley in 2012 (2009) and Dr. Vincent Kapoor in The Martian (2015).`,
    popularity: 9.3,
    dateOfBirth: "July 10, 1977",
  },
];
