import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import HeaderStyled from "../components/Header/styled";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <h1>Agenda Online</h1>
      <div>
        <Button onClick={() => navigate("/login", { replace: true })}>
          Login
        </Button>
        <Button onClick={() => navigate("/signup", { replace: true })}>
          Cadastrar
        </Button>
        <Button onClick={() => navigate("/contacts", { replace: true })}>
          Meus Contatos
        </Button>
      </div>
    </HeaderStyled>
  );
};

export default Home;
