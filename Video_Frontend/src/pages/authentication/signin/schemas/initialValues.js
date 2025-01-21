import checkout from "pages/authentication/signin/schemas/form";

const {
  formField: {
    tourplace,
    email,
    password,
  },
} = checkout;

export default {
  [tourplace.name]: 0,
  [email.name]: "",
  [password.name]: "",
};
