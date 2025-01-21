import * as Yup from "yup";

import checkout from "pages/authentication/ispsignup/schemas/form";

const {
  formField: { 
    username,
    phonenumber,
    password,
    confirm_password,
  },
} = checkout;

export default [
  Yup.object().shape({
    [username.name]: Yup.string().required(username.errorMsg),
    [phonenumber.name]: Yup.string().required(phonenumber.errorMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    [confirm_password.name]: Yup.string()
      .required(confirm_password.errorMsg)
      .oneOf([Yup.ref("password"), null], confirm_password.invalidMsg),
  }),
];
