export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

export interface IEditContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface IContactList {
  allContacts: IContact[];
}

export type EditProps = {
  setIsEdit: (val: boolean) => void;
};
