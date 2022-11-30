import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaInfos } from "./schema";
import { DivStyled, FormStyled } from "../Form/style";
import { Input } from "../Input";
import Button from "../Button";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

const FormLogin = () => {
  const { setLoginData } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaInfos) });

  const onSubmitFunction = (data: FieldValues) => {
    setLoginData(data);
  };

  return (
    <DivStyled>
      <h1>Login</h1>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="email"
          type="text"
          label="Informe o email cadastrado"
          placeholder="email@email.com"
          register={register}
          error={errors.email?.message}
        />
        <Input
          name="password"
          type="password"
          label="Qual a sua senha?"
          placeholder="******"
          register={register}
          error={errors.password?.message}
        />

        <Button type="submit">Login</Button>
      </FormStyled>
    </DivStyled>
  );
};

export default FormLogin;
