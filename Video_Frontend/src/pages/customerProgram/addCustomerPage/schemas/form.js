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
  formId: "new-user-form",
  formField: {
    username: {
      name: "username",
      label: "User Name",
      type: "text",
      placeholder: "eg. Steve Stence",
      errorMsg: "Full Name is required.",
    },
    phonenumber: {
      name: "phone_number",
      label: "phonenumber",
      type: "text",
      placeholder: "eg. +123456789",
    },
    email: {
      name: "email",
      label: "email address",
      type: "email",
      placeholder: "eg. vision@dashboard.come",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    password: {
      name: "password",
      label: "password",
      type: "password",
      placeholder: "******",
      errorMsg: "Password is required.",
      invalidMsg: "Your password should be more than 6 characters.",
    },
    confirm_password: {
      name: "confirm_password",
      label: "Confirm password",
      type: "password",
      placeholder: "******",
      errorMsg: "Confirm Password is required.",
      invalidMsg: "Your password doesn't match.",
    },
    street: {
      name: "street",
      label: "street",
      type: "text",
      placeholder: "eg. Street 111",
      errorMsg: "Address is required.",
    },
    country: {
      name: "country",
      label: "country",
      type: "text",
      placeholder: "eg. Canada",
      errorMsg: "Country is required.",
    },
    city: {
      name: "city",
      label: "city",
      type: "text",
      placeholder: "eg. Tokyo",
      errorMsg: "City is required.",
    },
    zipcode: {
      name: "zipcode",
      label: "zipcode",
      type: "number",
      placeholder: "78634",
      errorMsg: "zipcode is required.",
      invalidMsg: "Zipcode is not valid (e.g. 12345).",
      invalidNumberMsg: "Must be only digit"
    },
    state: {
      name: "state",
      label: "state",
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
    publicEmail: {
      name: "publicEmail",
      label: "public email",
      type: "email",
      placeholder: "Use an address you don't use frequently",
    },
    bio: {
      name: "bio",
      label: "bio",
      placeholder: "Say a few words about who you are or what you're working on.",
    },
  },
};
