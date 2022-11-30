import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetAllContactsContext } from "../../contexts/GetAllContactsContext";
import api from "../../services/api";
import Button from "../Button";

import { SectionStyled } from "./styled";

const Contacts = () => {
  const { allContacts, getAll } = useContext(GetAllContactsContext);

  const [isDeleted, setIsDeleted] = useState(false);

  const token = localStorage.getItem("@Project_S3_M6:Token");

  useEffect(() => {
    getAll();
    setIsDeleted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleted]);

  const deleteContact = (id: string) => {
    api
      .delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Contato deletado com sucesso");
      })
      .catch((err) => toast.error("Algo aconteceu de errado!"));
  };

  return (
    <>
      {allContacts.map((elem, i) => (
        <SectionStyled key={elem.id}>
          <h3>Contato {i + 1}</h3>
          <section className="text">
            <p>
              Nome:<span>{elem.firstName}</span>
            </p>
            <p>
              Sobrenome:<span>{elem.lastName}</span>
            </p>
            <p>
              Email:<span>{elem.email}</span>
            </p>
            <p>
              Telefone:<span>{elem.phone}</span>
            </p>
          </section>
          <Button
            onClick={() => {
              deleteContact(elem.id);
              setIsDeleted(true);
            }}
          >
            Remove
          </Button>
        </SectionStyled>
      ))}
    </>
  );
};

export default Contacts;
