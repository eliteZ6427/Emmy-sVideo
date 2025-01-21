/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// prop-types is a library for typechecking of props.

import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

// react-router components


// @mui material components



// Vision UI Dashboard PRO React components


// Vision UI Dashboard PRO React example components


function ApplicationsMenu({ routes, open, close, mobileMenu }) {
  const renderApplicationsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) =>
        key === routeName &&
        collapse.map(({ key: collapseKey, route, name, icon }) => (
          <MenuItem
            key={collapseKey}
            component={Link}
            to={route}
            onClick={mobileMenu ? undefined : close}
            sx={{ "&:hover": { background: "transparent" } }}
          >
            <VuiBox display="flex" alignItems="center" py={0.25}>
              {typeof icon === "string" ? (
                <Icon
                  sx={({ functions: { linearGradient }, palette: { gradients, transparent } }) => ({
                    backgroundImage: `${linearGradient(
                      gradients.info.main,
                      gradients.info.state
                    )} !important`,
                    WebkitBackgroundClip: "text !important",
                    WebkitTextFillColor: `${transparent.main} !important`,
                  })}
                  fontSize="small"
                >
                  {icon}
                </Icon>
              ) : (
                icon
              )}
              <VuiBox color="text" pl={2} lineHeight={0}>
                {name}
              </VuiBox>
            </VuiBox>
          </MenuItem>
        ))
    );

  return mobileMenu ? (
    <VuiBox px={1.5}>{renderApplicationsMenuRoute("applications")}</VuiBox>
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderApplicationsMenuRoute("applications")}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of ApplicationsMenu
ApplicationsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the ApplicationsMenu
ApplicationsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};
export default ApplicationsMenu;
