
export default {
  formId: "new-isp-user-form",
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
