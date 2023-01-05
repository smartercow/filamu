import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase-types";

export const supabaseAdmin = createClient<Database>(
  "https://ocnfhfljizurrbxpalxy.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);
