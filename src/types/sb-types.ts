import { Database } from "./supabase-types";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Favorites = Database["public"]["Tables"]["favorites"]["Row"];
