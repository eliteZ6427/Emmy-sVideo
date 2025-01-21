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
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
// custom styles for the DefaultItem
import { defaultItemIconBox } from "examples/Items/DefaultItem/styles";
import { forwardRef } from "react";

const DefaultItem = forwardRef(({ color, icon, title, description, ...rest }, ref) => (
  <VuiBox {...rest} ref={ref} display="flex" alignItems="center">
    <VuiBox sx={(theme) => defaultItemIconBox(theme, { color })}>{icon}</VuiBox>
    <VuiBox ml={2} lineHeight={1}>
      <VuiTypography display="block" variant="button" color="white" fontWeight="bold">
        {title}
      </VuiTypography>
      <VuiTypography variant="button" fontWeight="regular" color="text">
        {description}
      </VuiTypography>
    </VuiBox>
  </VuiBox>
));

// Setting default values for the props of DefaultItem
DefaultItem.defaultProps = {
  color: "info",
};

// Typechecking props for the DefaultItem
DefaultItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DefaultItem;
