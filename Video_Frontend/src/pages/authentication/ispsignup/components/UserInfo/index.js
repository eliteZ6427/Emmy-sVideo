
import FormField from "pages/authentication/ispsignup/components/FormField";
// @mui material components
import Grid from "@mui/material/Grid";
// prop-type is a library for typechecking of props
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
// NewUser page components

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { username, phonenumber, password, confirm_password } = formField;
  const {
    username: usernameV,
    phonenumber: phonenumberV,
    password: passwordV,
    confirm_password: confirm_passwordV,
  } = values;

  return (
    <VuiBox>
      <VuiBox mt={3}>
        <Grid container spacing={3} justifyContent={'center'}>
          <Grid item xs={12} sm={12} lg={12} width={'100%'}>
            <FormField
              label={username.label}
              name={username.name}
              type={username.type}
              value={usernameV}
              placeholder={username.placeholder}
              error={errors.username && touched.username}
              success={usernameV.length > 0 && !errors.username}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} width={'100%'}>
            <FormField
              label={phonenumber.label}
              name={phonenumber.name}
              type={phonenumber.type}
              value={phonenumberV}
              placeholder={phonenumber.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} width={'100%'}>
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
          <Grid item xs={12} sm={12} lg={12} width={'100%'}>
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
    </VuiBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
