import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormLogin from "../components/FormLogin";
import HeaderStyled from "../components/Header/styled";
import MainStyled from "../components/Main/styled";

const Login = () => {
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
        <h1>Logar Usuário</h1>
        <Button onClick={() => navigate("/", { replace: true })}>Voltar</Button>
      </HeaderStyled>
      <MainStyled>
        <FormLogin />
      </MainStyled>
    </>
  );
};

export default Login;
