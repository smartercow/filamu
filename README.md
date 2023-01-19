# Filamu

## Installation

```bash
npm i
npm run dev
```

## Typescript and generated types

We've implemented automatic type generation based off of your Supabase database config. You can learn more about this
setup [in the supabase docs on type generation](https://supabase.com/docs/guides/api/generating-types)

To update your types, run:

```bash
yarn generate-types
```

You can then reference them as

```javascript
import Database from "@/types/supabase-types";

const profile: Database["public"]["Tables"]["profiles"]["Row"] = {
  name: "John Doe",
};
```
