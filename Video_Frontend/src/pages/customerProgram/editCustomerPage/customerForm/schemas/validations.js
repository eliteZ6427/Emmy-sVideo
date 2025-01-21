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

import * as Yup from "yup";

import checkout from "pages/customerProgram/editCustomerPage/customerForm/schemas/form";

const {
  formField: { username, email, phone_number, street, country, city, zipcode, state, contact_name, contact_email, contact_phone_number, status },
} = checkout;

export default [
  Yup.object().shape({
    [username.name]: Yup.string().required(username.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [phone_number.name]: Yup.string().required(phone_number.errorMsg),
    [street.name]: Yup.string().required(street.errorMsg),
    [city.name]: Yup.string().required(city.errorMsg),
    [country.name]: Yup.string().required(country.errorMsg),
    [state.name]: Yup.string().required(state.errorMsg),
    [zipcode.name]: Yup.string().required(zipcode.errorMsg).matches(/^[0-9]+$/, zipcode.invalidNumberMsg).min(5, zipcode.invalidMsg).max(5, zipcode.invalidMsg),
    [contact_name.name]: Yup.string().required(contact_name.errorMsg),
    [contact_email.name]: Yup.string().required(contact_email.errorMsg).email(email.invalidMsg),
    [contact_phone_number.name]: Yup.string().required(contact_phone_number.errorMsg),
    [status.name]: Yup.string().required(status.errorMsg).oneOf(["true", "false"]),
  }),
];
