export interface IContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IContactCreated extends IContactRequest {
  id?: string;
  created_at: Date;
  updated_at: Date;
}

export interface IContactUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}
