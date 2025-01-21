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

// NewUser page components
import FormField from "pages/customerProgram/addCustomerPage/components/FormField";
// @mui material components
import Grid from "@mui/material/Grid";
// prop-type is a library for typechecking of props
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function ContactInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { contact_name, contact_email, contact_phone_number } = formField;
  const { contact_name: contact_nameV, contact_email: contact_emailV, contact_phone_number: contact_phone_numberV } = values;

  return (
    <VuiBox>
      <VuiTypography variant="lg" color="white" fontWeight="bold">
        Contact Info
      </VuiTypography>
      <VuiBox mt={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              label={contact_name.label}
              name={contact_name.name}
              value={contact_nameV}
              placeholder={contact_name.placeholder}
              error={errors.contact_name && touched.contact_name}
              success={contact_nameV.length > 0 && !errors.contact_name}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label={contact_email.label}
              name={contact_email.name}
              value={contact_emailV}
              placeholder={contact_email.placeholder}
              error={errors.contact_email && touched.contact_email}
              success={contact_emailV.length > 0 && !errors.contact_email}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label={contact_phone_number.label}
              name={contact_phone_number.name}
              value={contact_phone_numberV}
              placeholder={contact_phone_number.placeholder}
              error={errors.contact_phone_number && touched.contact_phone_number}
              success={contact_phone_numberV.length > 0 && !errors.contact_phone_number}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}
// typechecking props for Socials
ContactInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ContactInfo;
