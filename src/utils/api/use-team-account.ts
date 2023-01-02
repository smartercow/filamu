import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "@/types/supabase-types";
import handleSupabaseErrors from "../handle-supabase-errors";

export default function useTeamAccount(
  accountId: string,
  options?: UseQueryOptions<Database["public"]["Tables"]["accounts"]["Row"]>
) {
  const supabaseClient = useSupabaseClient<Database>();
  return useQuery<Database["public"]["Tables"]["accounts"]["Row"], Error>(
    ["teamAccount", accountId],
    async () => {
      const { data, error } = await supabaseClient
        .from("accounts")
        .select()
        .eq("id", accountId)
        .single();
      handleSupabaseErrors(data, error);
      return data;
    },
    {
      ...options,
      enabled: !!accountId && !!supabaseClient,
    }
  );
}
