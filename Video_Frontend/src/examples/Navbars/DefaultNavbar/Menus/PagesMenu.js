/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import DefaultNavbarCategory from "examples/Navbars/DefaultNavbar/DefaultNavbarCategory";
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

// prop-types is a library for typechecking of props.


// react-router components


// @mui material components



// Vision UI Dashboard PRO React components


// Vision UI Dashboard PRO React example components



function PagesMenu({ routes, open, close, mobileMenu }) {
  const renderPagesMenuRoute = (routeName) =>
    routes.map(
      ({ key, name, icon, collapse }) =>
        key === routeName && (
          <Fragment key={key}>
            <DefaultNavbarCategory icon={icon} title={name} />
            {collapse.map(({ key: collapseKey, route, name: collapseName }) => (
              <MenuItem
                key={collapseKey}
                component={Link}
                to={route}
                onClick={mobileMenu ? undefined : close}
                sx={{ "&:hover": { background: "transparent" } }}
              >
                <VuiBox color="text" pl={2}>
                  {collapseName}
                </VuiBox>
              </MenuItem>
            ))}
          </Fragment>
        )
    );

  const renderMenuContent = (
    <VuiBox py={1} px={2}>
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} lg={4}>
          {renderPagesMenuRoute("dashboards")}
          <VuiBox mt={2}>{renderPagesMenuRoute("account")}</VuiBox>
        </Grid>
        <Grid item xs={12} lg={4}>
          <VuiBox display={{ xs: "none", lg: "block" }}>{renderPagesMenuRoute("profile")}</VuiBox>
          <VuiBox>
            <VuiBox mt={2}>{renderPagesMenuRoute("projects")}</VuiBox>
          </VuiBox>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ display: "flex" }}>
          <VuiBox display={{ xs: "none", lg: "block" }}></VuiBox>
          <VuiBox width="100%">
            {renderPagesMenuRoute("users")}
            <VuiBox mt={2}>{renderPagesMenuRoute("extra")}</VuiBox>
          </VuiBox>
        </Grid>
      </Grid>
    </VuiBox>
  );

  return mobileMenu ? (
    renderMenuContent
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderMenuContent}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of PagesMenu
PagesMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the PagesMenu
PagesMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default PagesMenu;
