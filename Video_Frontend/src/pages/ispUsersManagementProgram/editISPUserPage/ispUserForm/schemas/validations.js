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

import checkout from 'pages/ispUsersManagementProgram/editISPUserPage/ispUserForm/schemas/form';

const {
  formField: { username, email, phone_number, tourplace, status },
} = checkout;

export default [
  Yup.object().shape({
    [username.name]: Yup.string().required(username.errorMsg),
    [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
    [phone_number.name]: Yup.string().required(phone_number.errorMsg),
    [tourplace.name]: Yup.array(Yup.number()),
    [status.name]: Yup.string().required(status.errorMsg).oneOf(["true", "false"]),
  }),
];
