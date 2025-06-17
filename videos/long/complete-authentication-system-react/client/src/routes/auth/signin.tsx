import { SignInForm } from "@/components/SignInForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto">
      <SignInForm />
    </div>
  );
}
