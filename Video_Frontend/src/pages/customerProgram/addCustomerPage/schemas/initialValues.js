/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import checkout from "pages/customerProgram/addCustomerPage/schemas/form";

const {
  formField: {
    username,
    phonenumber,
    email,
    password,
    confirm_password,
    street,
    country,
    city,
    zipcode,
    state,
    contact_name,
    contact_email,
    contact_phone_number,
  },
} = checkout;

export default {
  [username.name]: "",
  [phonenumber.name]: "",
  [email.name]: "",
  [password.name]: "",
  [confirm_password.name]: "",
  [street.name]: "",
  [country.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [state.name]: "",
  [contact_name.name]: "",
  [contact_email.name]: "",
  [contact_phone_number.name]: "",
};
