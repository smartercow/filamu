import { Profile } from "@/types/sb-types";
import { Database } from "@/types/supabase-types";
import useUserProfile from "@/utils/api/use-user-profile";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FORM_DATA = {
  avatar_url: string;
};

const CDNURL =
  "https://ocnfhfljizurrbxpalxy.supabase.co/storage/v1/object/public/avatars/";

export default function ProfileAvatar(): JSX.Element {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const { data: profile } = useUserProfile();
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FORM_DATA>();
  const [avatarUrl, setAvatarUrl] = useState<Profile["avatar_url"]>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    if (profile?.avatar_url) {
      setAvatarUrl(profile?.avatar_url);
    }
  }, [profile?.avatar_url]);

  useEffect(() => {
    if (!loading && avatarUrl) downloadImage(avatarUrl);
  }, [avatarUrl, reFetch]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  }

  console.log("avatarUrl", avatarUrl);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${user?.id}.${fileExt}?t=${Date.now()}`;
      const filePath = `avatar-${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      onSubmit({ avatar_url: filePath });
      setAvatarUrl(filePath);
    } catch (error) {
      toast.error("Error uploading image!");
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  async function onSubmit(data: FORM_DATA) {
    if (!user) return;
    try {
      const response = await supabase
        .from("profiles")
        .update({
          avatar_url: data.avatar_url,
        })
        .eq("id", user.id);

      if (response.error) {
        toast.error(response.error.message);
      }

      if (!!data) {
        toast.success("Your changes have been saved.");
      }
    } catch (error) {
      toast.error("Error updating profile image!");
    } finally {
      setReFetch(!reFetch);
    }
  }

  return (
    <div className="grid place-items-center space-y-4 px-5">
      <>
        <div>
          <img
            src={
              avatarUrl
                ? CDNURL + avatarUrl
                : "/assets/images/users/user-img.png"
            }
            // src={"/assets/images/users/user-img.png"}
            alt="Filamu User"
            className="h-[120px] w-[120px] rounded-full"
          />
        </div>
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </>
      <>
        <label className="upload-btn" htmlFor="single">
          {uploading ? "Uploading ..." : "Change avatar"}
        </label>
      </>
    </div>
  );
}
