import { Router } from "express";
import contactCreateControllers from "../controllers/contacts/contactCreate.controller";
import contactDeleteSelfController from "../controllers/contacts/contactDeleteSelf.controller";
import contactListControllers from "../controllers/contacts/contactList.controllers";
import contactListOneController from "../controllers/contacts/contactListOne.controller";
import contactUpdateController from "../controllers/contacts/contactUpdate.controller";

import authUserMiddle from "../middlewares/authUser.middleware";
import isOwnMiddle from "../middlewares/isOwn.middleware";
import isContactExistsMiddle from "../middlewares/isContactExists.middleware";
import validationMiddleware from "../middlewares/validation.middleware";
import { contactSchema } from "../schemas/contact.schemas";
import isContactOwnMiddle from "../middlewares/isContactOwn.middleware";

const routes = Router();

routes.post(
  "",
  authUserMiddle,
  validationMiddleware(contactSchema),
  contactCreateControllers
);
routes.get("", authUserMiddle, contactListControllers);
routes.get(
  "/:id",
  authUserMiddle,
  isContactExistsMiddle,
  isContactOwnMiddle,
  contactListOneController
);
routes.delete(
  "/:id",
  authUserMiddle,
  isContactExistsMiddle,
  isContactOwnMiddle,
  contactDeleteSelfController
);
routes.patch(
  "/:id",
  authUserMiddle,
  isContactExistsMiddle,
  isContactOwnMiddle,
  contactUpdateController
);

export default routes;
