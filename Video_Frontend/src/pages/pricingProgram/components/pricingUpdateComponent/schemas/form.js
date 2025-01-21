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

export default {
  formId: "update-pricing-form",
  formField: {
    level: {
      name: "level",
      label: "Level",
      type: "number",
      placeholder: "eg. 1",
      errorMsg: "Level is required.",
    },
    title: {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "eg. starter",
      errorMsg: "Title is required.",
    },
    price: {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "eg. 10",
      errorMsg: "Price is required.",
    },
    record_time: {
      name: "record_time",
      label: "Recording Time",
      type: "number",
      placeholder: "eg. 10",
      errorMsg: "Recording Time is required.",
    },
    record_limit: {
      name: "record_limit",
      label: "Recording Limit",
      type: "number",
      placeholder: "eg. 2",
      errorMsg: "Lecording Limit is required.",
    },
    snapshot_limit: {
      name: "snapshot_limit",
      label: "Snapshot Limit",
      type: "number",
      placeholder: "eg. 2",
      errorMsg: "Snapshot Limit is required.",
    },
  },
};
