/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// prop-types is a library for typechecking of props

import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import borders from "assets/theme/base/borders";

// @mui material components


// Vision UI Dashboard PRO React components



// Vision UI Dashboard PRO theme


function DefaultNavbarCategory({ color, icon, title }) {
  const { borderRadius } = borders;
  return (
    <VuiBox width="100%" display="flex" alignItems="center" py={1}>
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="7px"
        borderRadius={borderRadius.button}
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
