/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";
// Vision UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
// Vision UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};
