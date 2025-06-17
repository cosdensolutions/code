import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { signOut } from "supertokens-web-js/recipe/session";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { isAuthenticated, userId, handleSignOut } = useAuth();

  return (
    <div className="text-center h-screen flex items-center justify-center">
      {isAuthenticated ? (
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold">Welcome, {userId}</div>
          <Link to="/auth/change-email">Change email</Link>
          <Button
            onClick={() => {
              signOut();
              handleSignOut();
            }}
          >
            Sign out
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold">Not logged in</div>
          <Link to="/auth/signin">Sign in</Link>
          <Link to="/auth/signup">Sign up</Link>
        </div>
      )}
    </div>
  );
}
