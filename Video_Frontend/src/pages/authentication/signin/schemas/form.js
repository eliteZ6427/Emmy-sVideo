export default {
  formId: "login-form",
  formField: {
    tourplace: {
      name: 'tourplace',
      label: 'Tour Place',
      type: 'number',
      placeholder: "******",
      errorMsg: "tour place must be selected.",
      invalidMsg: "tour place must be selected.",
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
    }
  }
};
