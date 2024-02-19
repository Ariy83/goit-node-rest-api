import express from "express";
import validateBody from "../decorators/validateBody.js";
import authControllers from "../controllers/authControllers.js";
import { signupSchema, signinSchema } from "../schemas/usersSchemas.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(signupSchema),
  authControllers.register
);

authRouter.post("/login", validateBody(signinSchema), authControllers.login);

export default authRouter;
