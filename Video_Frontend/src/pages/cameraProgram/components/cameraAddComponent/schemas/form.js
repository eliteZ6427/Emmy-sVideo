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
  formId: "new-camera-form",
  formField: {
    camera_name: {
      name: "camera_name",
      label: "Camera Name",
      type: "text",
      placeholder: "eg. First Camera",
      errorMsg: "Camera Name is required.",
    },
    tourplace: {
      name: 'tourplace',
      label: 'Tour Place',
      type: 'number',
      placeholder: "******",
      errorMsg: "tour place must be selected.",
      invalidMsg: "tour place must be selected.",
    },
    rtsp_url: {
      name: "rtsp_url",
      label: "RTSP Stream URL",
      type: "text",
      errorMsg: "RTSP Stream URL is required.",
    },
  },
};
