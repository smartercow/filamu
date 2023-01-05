import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase-types";

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL as string) || "";
const supabaseServiceRole =
  (process.env.SUPABASE_SERVICE_ROLE_KEY as string) || "";

export const supabaseAdmin = createClient<Database>(
  supabaseUrl,
  supabaseServiceRole
);
