import { ChangeEmailForm } from "@/components/ChangeEmailForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/change-email")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto">
      <ChangeEmailForm />
    </div>
  );
}
