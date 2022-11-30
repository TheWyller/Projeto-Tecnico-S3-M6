import { Response, Request } from "express";
import contactCreateService from "../../services/contacts/contactCreate.services";

const contactCreateControllers = async (
  request: Request,
  response: Response
) => {
  try {
    const userData = request.body;
    const userId = request.userId;
    const newContact = await contactCreateService(userData, userId);
    return response.status(201).json(newContact);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({ error: error.message });
    }
  }
};

export default contactCreateControllers;
