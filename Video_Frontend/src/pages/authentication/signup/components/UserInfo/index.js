import FormField from "pages/authentication/signup/components/FormField";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { username, phonenumber, email, password, confirm_password } = formField;
  const {
    username: usernameV,
    phonenumber: phonenumberV,
    email: emailV,
    password: passwordV,
    confirm_password: confirm_passwordV,
  } = values;

  return (
    <VuiBox mt={3}>
      <Grid container justifyContent={'center'}>
        <Grid item lg={12} width={'100%'}>
          <FormField
            label={username.label}
            name={username.name}
            type={username.type}
            value={usernameV}
            placeholder={username.placeholder}
            error={errors.username && touched.username}
            success={usernameV.length > 0 && !errors.username}
            inputProps={{ autoComplete: "" }}
          />
        </Grid>
        <Grid item lg={12} width={'100%'}>
          <FormField
            label={email.label}
            name={email.name}
            type={email.type}
            value={emailV}
            placeholder={email.placeholder}
            error={errors.email && touched.email}
            success={emailV.length > 0 && !errors.email}
            inputProps={{ autoComplete: "" }}
          />
        </Grid>
        <Grid item lg={12} width={'100%'}>
          <FormField
            label={phonenumber.label}
            name={phonenumber.name}
            type={phonenumber.type}
            value={phonenumberV}
            placeholder={phonenumber.placeholder}
            inputProps={{ autoComplete: "" }}
          />
        </Grid>
        <Grid item lg={12} width={'100%'}>
          <FormField
            label={password.label}
            name={password.name}
            type={password.type}
            value={passwordV}
            placeholder={password.placeholder}
            error={errors.password && touched.password}
            success={passwordV.length > 0 && !errors.password}
            inputProps={{ autoComplete: "" }}
          />
        </Grid>
        <Grid item lg={12} width={'100%'}>
          <FormField
            label={confirm_password.label}
            name={confirm_password.name}
            type={confirm_password.type}
            value={confirm_passwordV}
            placeholder={confirm_password.placeholder}
            error={errors.confirm_password && touched.confirm_password}
            success={confirm_passwordV.length > 0 && !errors.confirm_password}
            inputProps={{ autoComplete: "" }}
          />
        </Grid>
      </Grid>
    </VuiBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
