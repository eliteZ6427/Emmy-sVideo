import * as Yup from "yup";

import checkout from "pages/authentication/signup/schemas/form";

const {
  formField: { 
    username,
    email,
    password,
    confirm_password,
  },
} = checkout;

export default [
  Yup.object().shape({
    [username.name]: Yup.string().required(username.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    [confirm_password.name]: Yup.string()
      .required(confirm_password.errorMsg)
      .oneOf([Yup.ref("password"), null], confirm_password.invalidMsg),
  }),
];
