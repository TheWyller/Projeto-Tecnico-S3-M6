import { Request, Response } from "express";
import contactUpdateServices from "../../services/contacts/contactUpdate.services";

const contactUpdateController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.params.id;
    const { firstName, lastName, email, phone } = request.body;
    const updatedContact = await contactUpdateServices(
      { firstName, lastName, email, phone },
      id
    );
    return response
      .status(200)
      .json({ message: "Contact updated", userdata: updatedContact });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default contactUpdateController;
