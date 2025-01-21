/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// Vision UI Dashboard PRO React base styles

import borders from "assets/theme/base/borders";
import pxToRem from "assets/theme/functions/pxToRem";

// Vision UI Dashboard PRO React helper functions


const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      display: "block",
      padding: `0 ${pxToRem(16)} 0  0`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};
