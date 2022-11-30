import * as yup from "yup";

export const schemaInfos = yup.object().shape({
  email: yup.string().email().required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatório"),
});
