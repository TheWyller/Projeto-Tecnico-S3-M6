import { createContext, useState } from "react";
import { FieldValues } from "react-hook-form";

import { toast } from "react-toastify";

import { IEditContact } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const EditContactContext = createContext<IEditContact>(
  {} as IEditContact
);

export const EditContactProvider = ({ children }: Ichildren) => {
  const [idContactData, setIdContactData] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const token = localStorage.getItem("@Project_S3_M6:Token");

  const editContact = (id: string, data: FieldValues) => {
    api
      .patch(`/contacts/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Contato editado com sucesso");
      })
      .catch((err) => toast.error("Contato NÃO foi editado!"));
  };

  return (
    <EditContactContext.Provider
      value={{
        idContactData,
        setIdContactData,
        editContact,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </EditContactContext.Provider>
  );
};
