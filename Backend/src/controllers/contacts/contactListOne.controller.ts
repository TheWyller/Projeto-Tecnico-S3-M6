import { Request, Response } from "express";
import contactListOneServices from "../../services/contacts/contactListOne.services";

const contactListOneController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.params.id;
    const contact = await contactListOneServices(id);
    return response.status(200).json(contact);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default contactListOneController;
