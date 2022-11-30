import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

const contactDeleteSelfServices = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id: id });

  if (!contact) {
    throw new Error("This id not exists");
  }

  await contactRepository.delete(contact.id);
  return { message: "Contact removed" };
};

export default contactDeleteSelfServices;
