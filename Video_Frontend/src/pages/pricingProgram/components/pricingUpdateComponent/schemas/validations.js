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

import * as Yup from "yup";

import checkout from "pages/pricingProgram/components/pricingUpdateComponent/schemas/form";

const {
  formField: {
    level,
    title,
    price,
    record_time,
    record_limit,
    snapshot_limit
  }
} = checkout;

export default [
  Yup.object().shape({
    [level.name]: Yup.number().required(level.errorMsg),
    [title.name]: Yup.string().required(title.errorMsg),
    [price.name]: Yup.number().required(price.errorMsg),
    [record_time.name]: Yup.number().required(record_time.errorMsg),
    [record_limit.name]: Yup.number().required(record_limit.errorMsg),
    [snapshot_limit.name]: Yup.number().required(snapshot_limit.errorMsg),
  })
];
