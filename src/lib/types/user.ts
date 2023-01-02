export type Profile = {
  id: string;
  updated_at: string | null;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  bookmarks: string[] | null;
};

export type EditableData = Extract<keyof Profile, "fullName">;

export type EditableUserData = Pick<Profile, EditableData>;
