import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne((type) => User, (user) => user.contacts)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
