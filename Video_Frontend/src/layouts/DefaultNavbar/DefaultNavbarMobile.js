/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import ApplicationsMenu from "layouts/DefaultNavbar/Menus/ApplicationsMenu";
import AuthenticationMenu from "layouts/DefaultNavbar/Menus/AuthenticationMenu";
// Vision UI Dashboard PRO React example components
import DefaultNavbarLink from "layouts/DefaultNavbar/DefaultNavbarLink";
import EcommerceMenu from "layouts/DefaultNavbar/Menus/EcommerceMenu";
// @mui material components
import Menu from "@mui/material/Menu";
// DefaultNavbar dropdown menus
import PagesMenu from "layouts/DefaultNavbar/Menus/PagesMenu";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
// Vision UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import { useState } from "react";

// import Grid from "@mui/material/Grid";





function DefaultNavbarMobile({ routes, open, close }) {
  const { white } = colors;
  const { width } = open && open.getBoundingClientRect();
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleSepOpenCollapse = (name) =>
    openCollapse === name ? setOpenCollapse(false) : setOpenCollapse(name);

  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <VuiBox px={0.5}>
        <DefaultNavbarLink
          name="pages"
          collapseStatus={openCollapse === "pages"}
          onClick={() => handleSepOpenCollapse("pages")}
        >
          <VuiBox maxHeight="16rem" overflow="auto">
            <PagesMenu routes={routes} mobileMenu />
          </VuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="authentication"
          collapseStatus={openCollapse === "authentication"}
          onClick={() => handleSepOpenCollapse("authentication")}
        >
          <VuiBox maxHeight="16rem" overflow="auto">
            <AuthenticationMenu routes={routes} mobileMenu />
          </VuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="applications"
          collapseStatus={openCollapse === "applications"}
          onClick={() => handleSepOpenCollapse("applications")}
        >
          <VuiBox maxHeight="16rem" overflow="auto">
            <ApplicationsMenu routes={routes} mobileMenu />
          </VuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="ecommerce"
          collapseStatus={openCollapse === "ecommerce"}
          onClick={() => handleSepOpenCollapse("ecommerce")}
        >
          <VuiBox maxHeight="16rem" overflow="auto">
            <EcommerceMenu routes={routes} mobileMenu />
          </VuiBox>
        </DefaultNavbarLink>
      </VuiBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
