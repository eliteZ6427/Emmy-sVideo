
export default {
  formId: "new-isp-form",
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
    tourplace: {
      name: 'tourplace',
      label: 'Tour Place',
      type: 'number',
      placeholder: "******",
      errorMsg: "tour place must be selected.",
      invalidMsg: "tour place must be selected.",
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
