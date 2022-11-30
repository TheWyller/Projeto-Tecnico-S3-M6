import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ICreateContact } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";

export const CreateContactContext = createContext<ICreateContact>(
  {} as ICreateContact
);

export const CreateContactProvider = ({ children }: Ichildren) => {
  const navigate = useNavigate();

  const [CreateContactData, setCreateContactData] = useState({});

  const token = localStorage.getItem("@Project_S3_M6:Token");

  useEffect(() => {
    if (Object.keys(CreateContactData).length > 0) {
      api
        .post("/contacts", CreateContactData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          toast.success("Contato criado com sucesso!");
          navigate("/contacts", { replace: true });
          setCreateContactData({});
        })
        .catch((err) => toast.error("Contato não foi criado"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CreateContactData]);

  return (
    <CreateContactContext.Provider value={{ setCreateContactData }}>
      {children}
    </CreateContactContext.Provider>
  );
};
