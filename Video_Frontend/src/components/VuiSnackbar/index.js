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

import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import VuiBox from "components/VuiBox";
import VuiSnackbarIconRoot from "components/VuiSnackbar/VuiSnackbarIconRoot";
import VuiTypography from "components/VuiTypography";
import typography from "assets/theme/base/typography";
import { useState } from "react";

// @mui material components






// Vision UI Dashboard PRO React components



// Vision UI Dashboard PRO React base styles


// Custom styles for the VuiSnackbar


function VuiSnackbar({ color, icon, title, dateTime, content, close, ...rest }) {
  const { size } = typography;
  let titleColor = "white";
  let dateTimeColor = "white";
  let dividerColor = true;
  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      onClose={close}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <VuiBox
        bgColor={color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="lg"
        p={1}
      >
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" p={1.5}>
          <VuiBox display="flex" alignItems="center" lineHeight={0}>
            <VuiSnackbarIconRoot fontSize="small" ownerState={{ color }}>
              {icon}
            </VuiSnackbarIconRoot>
            <VuiTypography variant="button" fontWeight="medium" color={titleColor}>
              {title}
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" alignItems="center" lineHeight={0}>
            <VuiTypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </VuiTypography>
            <Icon
              sx={{
                color: ({ palette: { dark, white } }) =>
                  color === "light" ? dark.main : white.main,
                fontWeight: ({ typography: { fontWeightBold } }) => fontWeightBold,
                cursor: "pointer",
                marginLeft: 2,
                transform: "translateY(-1px)",
              }}
              onClick={close}
            >
              close
            </Icon>
          </VuiBox>
        </VuiBox>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        <VuiBox p={1.5} color={color === "light" ? "text" : "white"} fontSize={size.sm}>
          {content}
        </VuiBox>
      </VuiBox>
    </Snackbar>
  );
}

// Setting default values for the props of VuiSnackbar
VuiSnackbar.defaultProps = {
  color: "info",
};

// Typechecking props for VuiSnackbar
VuiSnackbar.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default VuiSnackbar;
