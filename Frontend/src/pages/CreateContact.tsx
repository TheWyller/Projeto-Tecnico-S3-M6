import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CreateContactForm from "../components/CreateContactForm";
import HeaderStyled from "../components/Header/styled";
import MainStyled from "../components/Main/styled";

const CreateContact = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderStyled>
        <h1>Meus Contatos</h1>
        <Button onClick={() => navigate("/contacts", { replace: true })}>
          Voltar
        </Button>
      </HeaderStyled>
      <MainStyled>
        <CreateContactForm />
      </MainStyled>
    </>
  );
};

export default CreateContact;
