import { z } from "zod/v4";

import "dotenv/config";

const envSchema = z.object({
  SUPERTOKENS_CONNECTION_URI: z.string(),
  SUPERTOKENS_API_KEY: z.string(),
  API_BASE_URL: z.string(),
  APP_BASE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
