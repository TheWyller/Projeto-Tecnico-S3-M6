import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { IContactUpdate } from "../../interfaces/contact";

const contactUpdateServices = async (
  { firstName, lastName, email, phone }: IContactUpdate,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id });

  if (!contact) {
    throw new Error("This id not exists");
  }

  if (firstName !== undefined) {
    await contactRepository.update(contact.id, { firstName: firstName });
  }
  if (lastName !== undefined) {
    await contactRepository.update(contact.id, { lastName: lastName });
  }

  if (email !== undefined) {
    await contactRepository.update(contact.id, { email: email });
  }
  if (phone !== undefined) {
    await contactRepository.update(contact.id, { phone: phone });
  }
  await contactRepository.update(contact.id, { updated_at: new Date() });
  const updatedContactRepository = AppDataSource.getRepository(Contact);
  const updatedContact = await updatedContactRepository.findOneBy({ id });

  return updatedContact;
};

export default contactUpdateServices;
