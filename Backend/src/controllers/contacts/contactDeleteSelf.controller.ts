import { Request, Response } from "express";
import contactDeleteSelfServices from "../../services/contacts/contactDeleteSelf.services";

const contactDeleteSelfController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.params.id;
    const contact = await contactDeleteSelfServices(id);
    return response.status(200).json();
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default contactDeleteSelfController;
