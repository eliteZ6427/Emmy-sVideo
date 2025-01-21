import checkout from "pages/authentication/signup/schemas/form";

const {
  formField: {
    username,
    phonenumber,
    email,
    password,
    confirm_password,
  },
} = checkout;

export default {
  [username.name]: "",
  [phonenumber.name]: "",
  [email.name]: "",
  [password.name]: "",
  [confirm_password.name]: "",
};
