/* eslint-disable @typescript-eslint/ban-types */
// Action, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Musical, Mystery, Romance, SciFi, Sport, Thriller, War, Western
type keys =
  | "action"
  | "adventure"
  | "animation"
  | "comedy"
  | "scifi"
  | "drama"
  | "family"
  | "fantasy";

export interface Category {
  [x: string]: {};
}

export const Categories: Record<keys, Category> = {
  action: { name: "Action", color: "#f44336" },
  animation: { name: "Animation", color: "#f44336" },
  adventure: { name: "Adventure", color: "#A6BB16" },
  comedy: { name: "Comedy", color: "#f5b50a" },
  scifi: { name: "sci-fi", color: "#1692bb" },
  drama: { name: "Drama", color: "#f5b50a" },
  family: { name: "Family", color: "#8765e6" },
  fantasy: { name: "Fantasy", color: "#f5b50a" },
};
