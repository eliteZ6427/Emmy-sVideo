
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
      label: "Phone Number",
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
  },
};
