import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import EmailPassword from "supertokens-web-js/recipe/emailpassword";
import { env } from "./env";

SuperTokens.init({
  appInfo: {
    apiDomain: env.VITE_API_BASE_URL,
    apiBasePath: "/auth",
    appName: "complete-authentication-system-react",
  },
  recipeList: [Session.init(), EmailPassword.init()],
});
