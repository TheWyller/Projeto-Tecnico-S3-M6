import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";

export const isContactExistsMiddle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneBy({ id });

    if (!contact) {
      return res.status(404).json({ message: "Contact not exist" });
    } else {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Contact not exist" });
  }
};

export default isContactExistsMiddle;
