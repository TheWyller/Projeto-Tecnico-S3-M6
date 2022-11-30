import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormSignUp from "../components/FormSignUp";
import HeaderStyled from "../components/Header/styled";
import MainStyled from "../components/Main/styled";

const SignUp = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("@Project_S3_M6:Token");

  useEffect(() => {
    if (token) {
      navigate("/contacts", { replace: true });
    }
  }, [navigate, token]);

  return (
    <>
      <HeaderStyled>
        <h1>Cadastrar novo Usuário</h1>
        <Button onClick={() => navigate("/", { replace: true })}>Voltar</Button>
      </HeaderStyled>
      <MainStyled>
        <FormSignUp />
      </MainStyled>
    </>
  );
};

export default SignUp;
