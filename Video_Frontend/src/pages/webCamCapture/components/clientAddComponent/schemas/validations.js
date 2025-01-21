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

import checkout from "pages/webCamCapture/components/clientAddComponent/schemas/form";

const {
  formField: { client_name, client_phone_number, client_email, get_same_video, appears_in_others_video, voice_can_be_recorded, be_shown_potential, be_shown_public_business, be_shown_social_media }
} = checkout;

export default [
  Yup.object().shape({
    [client_name.name]: Yup.string().required(client_name.errorMsg),
    [client_email.name]: Yup.string().required(client_email.errorMsg).email(client_email.invalidMsg),
    [client_phone_number.name]: Yup.string().required(client_phone_number.errorMsg),
    [get_same_video.name]: Yup.string().required(get_same_video.errorMsg).oneOf(["true", "false"]),
    [appears_in_others_video.name]: Yup.string().required(appears_in_others_video.errorMsg).oneOf(["true", "false"]),
    [voice_can_be_recorded.name]: Yup.string().required(voice_can_be_recorded.errorMsg).oneOf(["true", "false"]),
    [be_shown_potential.name]: Yup.string().required(be_shown_potential.errorMsg).oneOf(["true", "false"]),
    [be_shown_public_business.name]: Yup.string().required(be_shown_public_business.errorMsg).oneOf(["true", "false"]),
    [be_shown_social_media.name]: Yup.string().required(be_shown_social_media.errorMsg).oneOf(["true", "false"]),
  })
];
