"use client";

import { z } from "zod";
import { onboardingSchema } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/app/onboarding/store";
import { useEffect } from "react";

const onboardingPasswordSchema = onboardingSchema.pick({
  password: true,
  repeatPassword: true,
});

type OnboardingPasswordSchema = z.infer<typeof onboardingPasswordSchema>;

export default function OnboardingPasswordForm() {
  const router = useRouter();

  const firstName = useOnboardingStore((state) => state.firstName);
  const lastName = useOnboardingStore((state) => state.lastName);

  const setData = useOnboardingStore((state) => state.setData);

  const form = useForm<OnboardingPasswordSchema>({
    resolver: zodResolver(onboardingPasswordSchema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (data: OnboardingPasswordSchema) => {
    setData(data);
    router.push("/onboarding/username");
  };

  useEffect(() => {
    if (!useOnboardingStore.persist.hasHydrated) return;

    if (!firstName || !lastName) {
      router.push("/onboarding/name");
    }
  }, [useOnboardingStore.persist.hasHydrated, firstName, lastName, router]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[300px] space-y-8"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormDescription>This is your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormDescription>
                This is your password confirmation.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}
