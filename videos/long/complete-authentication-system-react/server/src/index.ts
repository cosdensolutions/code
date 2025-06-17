import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import SuperTokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import bodyParser from "body-parser";
import {
  errorHandler,
  SessionRequest,
  middleware,
} from "supertokens-node/framework/express";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { env } from "./lib/env";
import z from "zod";

SuperTokens.init({
  framework: "express",
  supertokens: {
    connectionURI: env.SUPERTOKENS_CONNECTION_URI,
    apiKey: env.SUPERTOKENS_API_KEY,
  },
  appInfo: {
    appName: "complete-authentication-system-react",
    apiDomain: env.API_BASE_URL,
    websiteDomain: env.APP_BASE_URL,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [Session.init(), EmailPassword.init()],
});

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: env.APP_BASE_URL,
    allowedHeaders: ["content-type", ...SuperTokens.getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(middleware());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running with SuperTokens!" });
});

app.post(
  "/change-email",
  verifySession(),
  async (req: SessionRequest, res: express.Response) => {
    let session = req.session!;
    let email = req.body.email;

    const emailSchema = z.string().email();
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      res.status(400).json({ error: "Invalid email address" });
      return;
    }

    // Update the email without requiring a password
    const resp = await EmailPassword.updateEmailOrPassword({
      recipeUserId: session.getRecipeUserId(),
      email: email,
    });

    if (resp.status === "OK") {
      res.status(200).json({ message: "Email updated successfully" });
      return;
    }
    if (resp.status === "EMAIL_ALREADY_EXISTS_ERROR") {
      res
        .status(403)
        .json({ error: "Email already exists. Please use a different email." });
      return;
    }
    if (resp.status === "EMAIL_CHANGE_NOT_ALLOWED_ERROR") {
      res
        .status(403)
        .json({ error: "Email change not allowed. Please contact support." });
      return;
    }

    res.status(500).json({ error: "Internal server error" });
  }
);

app.use(errorHandler());

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 SuperTokens APIs available at http://localhost:${PORT}/auth`);
});
