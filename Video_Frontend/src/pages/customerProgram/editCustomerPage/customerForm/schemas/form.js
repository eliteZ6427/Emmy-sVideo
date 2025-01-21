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
  formId: "update-customer-form",
  formField: {
    username: {
      name: "username",
      label: "User Name",
      type: "text",
      placeholder: "eg. Steve Stence",
      errorMsg: "Full Name is required.",
    },
    phone_number: {
      name: "phone_number",
      label: "Phone Number",
      type: "text",
      placeholder: "eg. +123456789",
    },
    email: {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "eg. vision@dashboard.come",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    street: {
      name: "street",
      label: "Street",
      type: "text",
      placeholder: "eg. Street 111",
      errorMsg: "Address is required.",
    },
    country: {
      name: "country",
      label: "Country",
      type: "text",
      placeholder: "eg. Canada",
      errorMsg: "Country is required.",
    },
    city: {
      name: "city",
      label: "City",
      type: "text",
      placeholder: "eg. Tokyo",
      errorMsg: "City is required.",
    },
    zipcode: {
      name: "zipcode",
      label: "zipcode",
      type: "string",
      placeholder: "78634",
      errorMsg: "zipcode is required.",
      invalidMsg: "Zipcode is not valid (e.g. 12345).",
      invalidNumberMsg: "Must be only digit"
    },
    state: {
      name: "state",
      label: "State",
      type: "text",
      placeholder: "eg. Ontario",
      errorMsg: "State is required.",
      invalidMsg: "State is not valid",
    },
    contact_name: {
      name: "contact_name",
      label: "Contact Name",
      type: "text",
      placeholder: "Steven",
      errorMsg: "Contact Name is required.",
    },
    contact_email: {
      name: "contact_email",
      label: "Contact Email",
      type: "email",
      placeholder: "test@test.com",
      errorMsg: "Contact email is required.",
      invalidMsg: "Your email address is invalid",
    },
    contact_phone_number: {
      name: "contact_phone_number",
      label: "Contact Phone Number",
      type: "text",
      placeholder: "+123456789",
      errorMsg: "Contact phone number is required.",
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
