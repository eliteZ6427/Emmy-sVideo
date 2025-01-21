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

import checkout from "pages/webCamCapture/components/clientAddComponent/schemas/form";

const {
  formField: {
    client_name,
    client_phone_number,
    client_email,
    get_same_video,
    appears_in_others_video,
    voice_can_be_recorded,
    be_shown_potential,
    be_shown_public_business,
    be_shown_social_media,
  },
} = checkout;

export default {
  [client_name.name]: "",
  [client_phone_number.name]: "",
  [client_email.name]: "",
  [get_same_video.name]: true,
  [appears_in_others_video.name]: true,
  [voice_can_be_recorded.name]: true,
  [be_shown_potential.name]: true,
  [be_shown_public_business.name]: true,
  [be_shown_social_media.name]: true
};
