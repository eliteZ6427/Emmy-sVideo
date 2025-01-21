/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import "@pathofdev/react-tag-input/build/index.css";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// react-tag-input components
import ReactTagInput from "@pathofdev/react-tag-input";
// Custom styles for VuiTagInput
import VuiTagInputRoot from "components/VuiTagInput/VuiTagInputRoot";
import { forwardRef } from "react";

const VuiTagInput = forwardRef(({ size, error, success, ...rest }, ref) => (
  <VuiTagInputRoot ownerState={{ size, error, success }}>
    <ReactTagInput {...rest} ref={ref} />
  </VuiTagInputRoot>
));

// Setting default values for the props of VuiTagInput
VuiTagInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the VuiTagInput
VuiTagInput.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default VuiTagInput;
