/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/


import checkout from "pages/pricingProgram/components/pricingUpdateComponent/schemas/form";

const {
  formField: {
    level,
    title,
    price,
    record_time,
    record_limit,
    snapshot_limit
  },
} = checkout;

export default {
  [level.name]: "",
  [title.name]: "",
  [price.name]: "",
  [record_time.name]: "",
  [record_limit.name]: "",
  [snapshot_limit.name]: "",
};
