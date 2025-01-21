import checkout from "pages/authentication/signup/schemas/form";

const {
  formField: {
    username,
    phonenumber,
    email,
    password,
    tourplace,
    confirm_password,
  },
} = checkout;

export default {
  [username.name]: "",
  [phonenumber.name]: "",
  [email.name]: "",
  [password.name]: "",
  [tourplace.name]: 0,
  [confirm_password.name]: "",
};
