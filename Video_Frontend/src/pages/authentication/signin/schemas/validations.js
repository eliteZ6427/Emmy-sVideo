import * as Yup from "yup";

import checkout from "pages/authentication/signin/schemas/form";

const {
  formField: { email, password, tourplace},
} = checkout;

export default [
  Yup.object().shape({
    [tourplace.name]: Yup.number().required(tourplace.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
  })
];
