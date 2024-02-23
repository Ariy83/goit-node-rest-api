import express from "express";
import validateBody from "../decorators/validateBody.js";
import authControllers from "../controllers/authControllers.js";
import {
  signupSchema,
  signinSchema,
  subscriptionSchema,
} from "../schemas/usersSchemas.js";
import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(signupSchema),
  authControllers.register
);

authRouter.post("/login", validateBody(signinSchema), authControllers.login);

authRouter.post("/logout", authenticate, authControllers.logout);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionSchema),
  authControllers.updateSubscription
);

export default authRouter;
