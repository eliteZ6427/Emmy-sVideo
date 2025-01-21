import checkout from "pages/authentication/ispsignup/schemas/form";

const {
  formField: {
    username,
    phonenumber,
    password,
    confirm_password,
  },
} = checkout;

export default {
  [username.name]: "",
  [phonenumber.name]: "",
  [password.name]: "",
  [confirm_password.name]: "",
};
