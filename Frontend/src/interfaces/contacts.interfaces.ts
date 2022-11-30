export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

export interface IContactList {
  allContacts: IContact[];
}
