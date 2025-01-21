/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// react-flatpickr components
import Flatpickr from "react-flatpickr";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// Vision UI Dashboard PRO React components
import VuiInput from "components/VuiInput";

function VuiDatePicker({ input, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <VuiInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

// Setting default values for the props of VuiDatePicker
VuiDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the VuiDatePicker
VuiDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
};

export default VuiDatePicker;
