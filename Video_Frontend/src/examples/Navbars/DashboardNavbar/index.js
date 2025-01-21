// react-router components
import { Link, useLocation } from "react-router-dom";
// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarDesktopMenu,
  navbarIconButton,
  navbarMobileMenu,
  navbarRow,
} from "examples/Navbars/DashboardNavbar/styles";
// Vision UI Dashboard PRO React context
import {
  setMiniSidenav,
  setOpenConfigurator,
  setTransparentNavbar,
  useVisionUIController,
} from "context";
import { useEffect, useState } from "react";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
// Vision UI Dashboard PRO React example components
import Breadcrumbs from "examples/Breadcrumbs";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import NotificationItem from "examples/Items/NotificationItem";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiInput from "components/VuiInput";
import VuiTypography from "components/VuiTypography";
import { handleLogout } from 'redux/actions/login';
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// Images
import team2 from "assets/images/male-avatar.png";
import { useDispatch, useSelector } from 'react-redux';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Divider from '@mui/material/Divider';

function DashboardNavbar({ absolute, light, isMini }) {
  const user_data = useSelector(state => state.auth);
  const usertype = user_data.userData?.usertype;
  const user_name = user_data.userData?.username;

  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const defaultDispatch = useDispatch();
  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="secondary"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <VuiBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
          <Icon fontSize="medium" sx={navbarDesktopMenu} onClick={handleMiniSidenav}>
            {miniSidenav ? "menu_open" : "menu"}
          </Icon>
        </VuiBox>
        {isMini ? null : (
          <VuiBox sx={(theme) => navbarRow(theme, { isMini })}>
            <VuiBox>
              <VuiTypography fontWeight="medium" variant="button" color="white">Welcome👏 {usertype === 1 ? <VuiTypography fontWeight="medium" variant="button" color="error">admin</VuiTypography> : user_name}</VuiTypography>
            </VuiBox>
            <VuiBox color={light ? "white" : "inherit"}>
              <IconButton sx={navbarIconButton} size="small" onClick={() => defaultDispatch(handleLogout())}>
                <PowerSettingsNewIcon sx={({ palette: { dark, white } }) => ({
                    color: white.main,
                  })}/>
                <VuiTypography variant="button" fontWeight="medium" color="white" >
                  Sign Out
                </VuiTypography>
              </IconButton>
              <IconButton
                size="small"
                color="white"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon color="white">{miniSidenav ? "menu_open" : "menu"}</Icon>
              </IconButton>
              <IconButton
                size="small"
                color="white"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon>settings</Icon>
              </IconButton>
              {renderMenu()}
            </VuiBox>
          </VuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
