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

import checkout from 'pages/clientManagementProgram/editClientPage/clientForm/schemas/form';

const {
  formField: {
    username,
    email,
    phone_number,
    tourplace,
    status
  },
} = checkout;

export default {
  [username.name]: "",
  [email.name]: "",
  [phone_number.name]: "",
  [tourplace.name]: 0,
  [status.name]: false,
};
