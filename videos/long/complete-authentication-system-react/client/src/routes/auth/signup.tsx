import { SignUpForm } from "@/components/SignUpForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto">
      <SignUpForm />
    </div>
  );
}
