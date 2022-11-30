import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Contacts from "../components/Contacts";
import HeaderStyled from "../components/Header/styled";

import MyContatsStyled from "../components/MyContats/styled";
import { GetAllContactsContext } from "../contexts/GetAllContactsContext";

const MyContacts = () => {
  const navigate = useNavigate();

  const { setAllContacts } = useContext(GetAllContactsContext);

  const token = localStorage.getItem("@Project_S3_M6:Token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate, token]);

  return (
    <>
      <HeaderStyled>
        <h1>Meus Contatos</h1>
        <div>
          <Button onClick={() => navigate("/", { replace: true })}>
            Voltar
          </Button>
          <Button onClick={() => navigate("/newcontact", { replace: true })}>
            Criar novo contato
          </Button>
          <Button
            onClick={() => {
              localStorage.clear();
              setAllContacts([]);
              toast.success("Você saiu com sucesso!");
              navigate("/", { replace: true });
            }}
          >
            Sair
          </Button>
        </div>
      </HeaderStyled>
      <main>
        <MyContatsStyled>
          <Contacts />
        </MyContatsStyled>
      </main>
    </>
  );
};

export default MyContacts;
