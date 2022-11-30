import { Response, Request } from "express";
import contactlistService from "../../services/contacts/contactList.services";

const contactListControllers = async (request: Request, response: Response) => {
  try {
    const userId = request.userId;
    const listContacts = await contactlistService(userId);
    return response.json(listContacts);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default contactListControllers;
