/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// prop-types is library for typechecking of props

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// @mui material components




// Vision UI Dashboard PRO React components



function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card sx={{ height: "100%", pt: "25px" }}>
      <VuiBox display="flex" justifyContent="center" mb="22px">
        <VuiBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="64px"
          height="64px"
          shadow="md"
          borderRadius="lg"
        >
          {icon}
        </VuiBox>
      </VuiBox>
      <VuiBox textAlign="center" lineHeight={1.25} display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" textTransform="capitalize" mb="4px">
          {title}
        </VuiTypography>
        {description && (
          <VuiTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </VuiTypography>
        )}
        {description && !value ? null : <Divider light />}
        {value && (
          <VuiTypography variant="lg" color="white" fontWeight="bold" fontSize={{ xl: 20 }}>
            {value}
          </VuiTypography>
        )}
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
