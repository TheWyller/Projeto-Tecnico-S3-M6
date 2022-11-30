import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILogin } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

import api from "../services/api";
import { GetAllContactsContext } from "./GetAllContactsContext";

export const LoginContext = createContext<ILogin>({} as ILogin);

export const LoginProvider = ({ children }: Ichildren) => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  const { getAll } = useContext(GetAllContactsContext);

  useEffect(() => {
    if (Object.keys(loginData).length > 0) {
      api
        .post("/login", loginData)
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("@Project_S3_M6:Token", token);
          toast.success("Login realizado com sucesso!");
          setAuthenticated(true);
          setLoginData({});
        })
        .then(() => {
          getAll();
          navigate("/contacts", { replace: true });
        })
        .catch((err) => toast.error("Senha ou email errados"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData, navigate]);

  return (
    <LoginContext.Provider
      value={{ setLoginData, authenticated, setAuthenticated }}
    >
      {children}
    </LoginContext.Provider>
  );
};
