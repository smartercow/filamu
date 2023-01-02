import { Button } from "@/components/ui/button";
// import { Database } from '@helpers/supabase/database';
// import { Profiles } from '@helpers/supabase/database-types';
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export default function ProfileAvatar(): JSX.Element {
  /*   const session = useSession();
  const supabase = useSupabaseClient<Database>();
  const user = useUser();

  const [avatarUrl, setAvatarUrl] = useState<Profiles['avatar_url']>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  useEffect(() => {
    if (!loading && avatarUrl) downloadImage(avatarUrl);
  }, [avatarUrl]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${user?.id}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      setAvatarUrl(filePath);
      updateProfile({ avatar_url: filePath });
    } catch (error) {
      alert('Error uploading avatar!');
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  async function updateProfile({
    avatar_url
  }: {
    avatar_url: Profiles['avatar_url'];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      const updates = {
        id: user.id,
        avatar_url,
        updated_at: new Date().toISOString()
      };

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  } */
  return (
    <div className="grid place-items-center space-y-4 px-5">
      <div>
        <div>
          <img
            // src={avatarUrl ? avatarUrl : '/assets/images/users/user-img.png'}
            src={"/assets/images/users/user-img.png"}
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
          // onChange={uploadAvatar}
          onChange={() => {}}
          // disabled={uploading}
          // disabled={() => {}}
        />
      </div>
      <div>
        {/*         <label className='' htmlFor='single'>
          {uploading ? 'Uploading ...' : 'Change avatar'}
        </label> */}
        {/* <Button className='rounded-md px-4 py-2'>Change avatar</Button> */}
      </div>
    </div>
  );
}
