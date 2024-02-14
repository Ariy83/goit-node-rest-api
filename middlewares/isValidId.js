import { isValidObjectId } from "mongoose";

import HttpError from "../helpers/HttpError.js";

const forId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return next(HttpError(404, `${id} is not valid id`));
  }
  next();
};

const forContactId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(HttpError(404, `${contactId} is not valid contactId`));
  }
  next();
};

export default { forId, forContactId };
