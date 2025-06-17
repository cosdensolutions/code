import { createContext, use, useEffect, useState } from "react";
import { doesSessionExist, getUserId } from "supertokens-web-js/recipe/session";

type AuthProviderContextValue = {
  isAuthenticated: boolean;
  userId: string | null;
  handleSignIn: (userId: string) => void;
  handleSignOut: () => void;
};

const AuthProviderContext = createContext<AuthProviderContextValue | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  async function handleAuthState() {
    const session = await doesSessionExist();
    if (session) {
      const userId = await getUserId();
      setIsAuthenticated(true);
      setUserId(userId);
    } else {
      setIsAuthenticated(false);
      setUserId(null);
    }
  }

  useEffect(() => {
    handleAuthState();
  }, []);

  function handleSignIn(userId: string) {
    setIsAuthenticated(true);
    setUserId(userId);
  }

  function handleSignOut() {
    setIsAuthenticated(false);
    setUserId(null);
  }

  return (
    <AuthProviderContext
      value={{ isAuthenticated, userId, handleSignIn, handleSignOut }}
    >
      {children}
    </AuthProviderContext>
  );
}

export function useAuth() {
  const context = use(AuthProviderContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
