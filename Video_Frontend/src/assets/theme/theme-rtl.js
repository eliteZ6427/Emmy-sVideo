/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import appBar from "assets/theme/components/appBar";
import autocomplete from "assets/theme/components/form/autocomplete";
import avatar from "assets/theme/components/avatar";
import borders from "assets/theme/base/borders";
// Vision UI Dashboard PRO React helper functions
import boxShadow from "assets/theme/functions/boxShadow";
import boxShadows from "assets/theme/base/boxShadows";
import breadcrumbs from "assets/theme/components/breadcrumbs";
import breakpoints from "assets/theme/base/breakpoints";
import button from "assets/theme/components/button";
import buttonBase from "assets/theme/components/buttonBase";
import card from "assets/theme/components/card";
import cardContent from "assets/theme/components/card/cardContent";
import cardMedia from "assets/theme/components/card/cardMedia";
import checkbox from "assets/theme/components/form/checkbox";
// Vision UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import container from "assets/theme/components/container";
// @mui material components
import { createTheme } from "@mui/material/styles";
import dialog from "assets/theme/components/dialog";
import dialogActions from "assets/theme/components/dialog/dialogActions";
import dialogContent from "assets/theme/components/dialog/dialogContent";
import dialogContentText from "assets/theme/components/dialog/dialogContentText";
import dialogTitle from "assets/theme/components/dialog/dialogTitle";
import divider from "assets/theme/components/divider";
import flatpickr from "assets/theme/components/flatpickr";
import formControlLabel from "assets/theme/components/form/formControlLabel";
import formLabel from "assets/theme/components/form/formLabel";
import globals from "assets/theme/base/globals";
import hexToRgb from "assets/theme/functions/hexToRgb";
import icon from "assets/theme/components/icon";
import iconButton from "assets/theme/components/iconButton";
import input from "assets/theme/components/form/input";
import inputBase from "assets/theme/components/form/inputBase";
import linearGradient from "assets/theme/functions/linearGradient";
import linearProgress from "assets/theme/components/linearProgress";
import link from "assets/theme/components/link";
import list from "assets/theme/components/list";
import listItem from "assets/theme/components/list/listItem";
import listItemText from "assets/theme/components/list/listItemText";
import menu from "assets/theme/components/menu";
import menuItem from "assets/theme/components/menu/menuItem";
import popover from "assets/theme/components/popover";
import pxToRem from "assets/theme/functions/pxToRem";
import radio from "assets/theme/components/form/radio";
import rgba from "assets/theme/functions/rgba";
import select from "assets/theme/components/form/select";
// Vision UI Dashboard PRO React components base styles for @mui material components
import sidenav from "assets/theme/components/sidenav";
import slider from "assets/theme/components/slider";
import step from "assets/theme/components/stepper/step";
import stepConnector from "assets/theme/components/stepper/stepConnector";
import stepIcon from "assets/theme/components/stepper/stepIcon";
import stepLabel from "assets/theme/components/stepper/stepLabel";
import stepper from "assets/theme/components/stepper";
import svgIcon from "assets/theme/components/svgIcon";
import swal from "assets/theme/components/swal";
import switchButton from "assets/theme/components/form/switchButton";
import tab from "assets/theme/components/tabs/tab";
import tableCell from "assets/theme/components/table/tableCell";
import tableContainer from "assets/theme/components/table/tableContainer";
import tableHead from "assets/theme/components/table/tableHead";
import tabs from "assets/theme/components/tabs";
import tooltip from "assets/theme/components/tooltip";
import typography from "assets/theme/base/typography";
// import Fade from "@mui/material/Fade";




export default createTheme({
  direction: "rtl",
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...swal,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInputBase: { ...inputBase },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiInput: { ...input },
    MuiOutlinedInput: { ...input },
    MuiFilledInput: { ...input },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
