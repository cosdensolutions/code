import { z } from "zod";

export const onboardingSchema = z.object({
  username: z.string().min(3).max(20),
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  password: z.string().min(8).max(20),
  repeatPassword: z.string().min(8).max(20),
  terms: z.boolean().refine((data) => data),
});

export type OnboardingSchema = z.infer<typeof onboardingSchema>;
