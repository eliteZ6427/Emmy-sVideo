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

export default {
  formId: "update-client-form",
  formField: {
    username: {
      name: "username",
      label: "User Name",
      type: "text",
      placeholder: "eg. Steve Stence",
      errorMsg: "Full Name is required.",
    },
    email: {
      name: "email",
      label: "email address",
      type: "email",
      placeholder: "eg. vision@dashboard.come",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    phone_number: {
      name: "phone_number",
      label: "phonenumber",
      type: "text",
      placeholder: "eg. +123456789",
    },
    tourplace: {
      name: 'tourplace',
      label: 'Tour Place',
      type: 'number',
      placeholder: "******",
      errorMsg: "tour place must be selected.",
      invalidMsg: "tour place must be selected.",
    },
    status: {
      name: "status",
      label: "Status",
      type: "boolean",
      placeholder: "eg. vision@dashboard.come",
      errorMsg: "status is required.",
      invalidMsg: "status is invalid",
    }
  },
};
