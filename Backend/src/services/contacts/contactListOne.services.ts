import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

const contactListOneServices = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id });
  if (!contact) {
    throw new Error("This id not exists");
  }
  return contact;
};

export default contactListOneServices;
