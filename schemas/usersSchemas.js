import Joi from "joi";
import { emailRegexp } from "../constants/regexp.js";

export const signupSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

export const signinSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  token: [Joi.string(), Joi.number()],
});
