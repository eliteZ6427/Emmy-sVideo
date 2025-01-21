/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================


* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// react-router-dom components

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import VuiBadge from "components/VuiBadge";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import soldImage from 'assets/images/paid.png';
// prop-types is a library for typechecking of props


// @mui material components



// Vision UI Dashboard PRO React components





// React-icons


function DefaultPricingCard({ badge, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <VuiBox key={label} display="flex" alignItems="center" p={1}>
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shadow="md"
        mr={2}
      >
        <VuiTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
          {includes ? (
            <AiFillCheckCircle color="#fff" size="22px" />
          ) : (
            <AiFillCloseCircle color="#424563" size="22px" />
          )}
        </VuiTypography>
      </VuiBox>
      <VuiTypography variant="body2" color="text">
        {label}
      </VuiTypography>
    </VuiBox>
  ));

  return (
    <VuiBox sx={{ position: "relative" }}>
      {action? action.type === "paid" &&
        <VuiBox
          component="img"
          src={soldImage}
          alt="Sold"
          sx={{
            zIndex: "2",
            position: 'absolute',
            width: '130px',
            top: '-25px',
            right: '200px',
            opacity: '0.95',
          }}
        />
      : <></>}
    <Card>
      <VuiBox textAlign="center">
        <VuiBadge
          variant="gradient"
          color={badge.color}
          size="sm"
          badgeContent={badge.label}
          circular
          container
        />
        <VuiBox my={1}>
          <VuiTypography variant="h1" color="white">
            {price.value}
            <VuiTypography display="inline" color="white">
              {price.currency}
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        {renderSpecifications}
        {action ? action.type === "paid" ? (
          <></>
        ) : (
          <VuiBox mt={3}>
            <VuiButton
              color={action.color}
              fullWidth
              onClick={action.handleOnClick}
            >
              {action.label}&nbsp;
            </VuiButton>
          </VuiBox>
        ) : <></>}
      </VuiBox>
    </Card>
    </VuiBox>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "text",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["paid", "nonpaid"]).isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]),
    handleOnClick: PropTypes.func,
  }),
};

export default DefaultPricingCard;
