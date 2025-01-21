/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// @mui material components
import Icon from "@mui/material/Icon";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
// Vision UI Dashboard PRO theme
import borders from "assets/theme/base/borders";

function DefaultNavbarCategory({ color, icon, title }) {
  const { borderradius } = borders;
  return (
    <VuiBox width="100%" display="flex" alignItems="center" py={1}>
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="7px"
        borderradius={borderradius.button}
        color="white"
        bgColor={color}
        mr={1}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </VuiBox>
      <VuiTypography variant="button" fontWeight="bold" color="white">
        {title}
      </VuiTypography>
    </VuiBox>
  );
}

// Setting default value for the props of DefaultNavbarCategory
DefaultNavbarCategory.defaultProps = {
  color: "info",
};

// Typechecking props for the DefaultNavbarCategory
DefaultNavbarCategory.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default DefaultNavbarCategory;
