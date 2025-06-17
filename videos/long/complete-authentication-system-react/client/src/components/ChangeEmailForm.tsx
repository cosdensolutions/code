import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useNavigate } from "@tanstack/react-router";
import { env } from "@/lib/env";

const formSchema = z.object({
  email: z.string().email(),
});
type FormSchema = z.infer<typeof formSchema>;

export function ChangeEmailForm() {
  const navigate = useNavigate();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const response = await fetch(`${env.VITE_API_BASE_URL}/change-email`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        form.setError("root", {
          message: "Failed to change email",
        });
        return;
      }

      navigate({ to: "/" });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>Enter your new email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Changing email..." : "Change Email"}
          </Button>

          {form.formState.errors.root && (
            <p className="text-red-500">{form.formState.errors.root.message}</p>
          )}
        </form>
      </Form>
    </div>
  );
}
