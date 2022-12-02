import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaInfos } from "./schema";
import { DivStyled, FormStyled } from "../Form/style";
import { Input } from "../Input";
import Button from "../Button";
import { checkInfos } from "./checkInfos";
import { useContext } from "react";
import { EditContactContext } from "../../contexts/EditContactContext";

const EditContactForm = () => {
  const { idContactData, editContact, setIsEdit } =
    useContext(EditContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaInfos) });

  const onSubmitFunction = (data: FieldValues) => {
    if (Object.keys(checkInfos(data)).length !== 0) {
      editContact(idContactData, checkInfos(data));
      setIsEdit(false);
    } else {
      setIsEdit(false);
    }
  };

  return (
    <DivStyled>
      <h1>Editar Contato</h1>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="firstName"
          type="text"
          label="Informe o primeiro nome"
          placeholder="Nome"
          register={register}
          error={errors.firstName?.message}
        />
        <Input
          name="lastName"
          type="text"
          label="Informe o ultimo nome"
          placeholder="Sobrenome"
          register={register}
          error={errors.lastName?.message}
        />
        <Input
          name="email"
          type="email"
          label="Informe o email"
          placeholder="exemplo@email.com"
          register={register}
          error={errors.email?.message}
        />
        <Input
          name="phone"
          type="text"
          label="Informe o telefone"
          placeholder="41912345678"
          register={register}
          error={errors.phone?.message}
        />
        <Button type="submit">Editar contato</Button>
        <Button
          onClick={() => {
            setIsEdit(false);
          }}
        >
          Fechar
        </Button>
      </FormStyled>
    </DivStyled>
  );
};

export default EditContactForm;
