export default {
  //** Auth Endpoints

  loginEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/login`,
  forgotPasswordEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/forgot_password`,
  resetForgotPasswordEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/reset_forgot_password`,
  registerEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/register`,
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/logout`,
  resetPasswordEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/reset/`,
  resendVerifyEmailEndPoint: `${process.env.REACT_APP_BASE_API_URL}/user/resend-activation/`,
  sendEmailVerificationEndPoint: `${process.env.REACT_APP_BASE_API_URL}/user/activate`,
  ispregisterEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/set_password`,
  //** Header Endpoints
  
  headerAddEndpoint: `${process.env.REACT_APP_BASE_API_URL}/video/header/add`,
  headerGetEndpoint: `${process.env.REACT_APP_BASE_API_URL}/video/header`,
  headerDeleteEndpoint: `${process.env.REACT_APP_BASE_API_URL}/video/header/delete`,
  uploadClientVideoFileEndPoint: `${process.env.REACT_APP_BASE_API_URL}/video/video/add`,
  getAllCompletedVideosEndPoint: `${process.env.REACT_APP_BASE_API_URL}/video/getall`,
  //** Footer Endpoints

  footerAddEndpoint: `${process.env.REACT_APP_BASE_API_URL}/video/footer/add`,
  footerGetEndpoint: `${process.env.REACT_APP_BASE_API_URL}/video/footer`,
  footerDeleteEndpoint: `${process.env.REACT_APP_BASE_API_URL}/video/footer/delete`,

  //ISP endpoint
  inviteNewISPEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/invite`, 
  getISPUsersEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/isprange`,
  deleteISPUserEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/delete`,
  getISPUserByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/id`,
  updateISPUserEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/update`,

  //Client endpoint
  getAllClientsEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/clientrange`,
  deleteClientEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/delete`,
  getClientByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/id`,
  updateClientEndpoint: `${process.env.REACT_APP_BASE_API_URL}/user/update`,
    


  getCustomersEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/users/range`,
  customerDeleteEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/delete`,
  getCustomerByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/user`,
  customerUpdateEndpoint: `${process.env.REACT_APP_BASE_API_URL}/auth/update`,

  addClientEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/add_client`,
  addChildEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/add_child`,

  getClientByCustomerIDEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/getallclients`,
  clientDeleteEndpoint: `${process.env.REACT_APP_BASE_API_URL}/customer/delete`,
  getClientByClientIDEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/client/`,

  getAllCameraVoiceEndPoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/getCameraVoice`,
  getCameraVoiceByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/getCameraVoiceByID`, //?id=2
  getCameravoiceByCameraIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/getCameraVoiceByCameraID`, //?camera_id=1
  addCameraVoiceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/addCameraVoice`,
  deleteCameraVoiceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/deleteCameraVoice`,
  updateCameraVoiceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/admin/camera_voice/updateCameraVoice`,

  // coloring page end point

  getAllColoringPageEndPoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/get/all`,
  getColoringPageByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/get`,
  addColoringPageEndpoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/add`,
  updateColoringPageEndpoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/update`,
  deleteColoringPageEndpoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/delete`,


  // Exit Email End Point

  getAllExitEmailEndPoint: `${process.env.REACT_APP_BASE_API_URL}/email/get/all`,
  getExitEmailByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/email/get`,
  addExitEmailEndpoint: `${process.env.REACT_APP_BASE_API_URL}/email/add`,
  updateExitEmailEndpoint: `${process.env.REACT_APP_BASE_API_URL}/email/update`,
  deleteExitEmailEndpoint: `${process.env.REACT_APP_BASE_API_URL}/email/delete`,


  getAllCameraEndPoint: `${process.env.REACT_APP_BASE_API_URL}/camera/getall`,
  getCameraByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/camera/id/`,
  getCamerasByTourPlace: `${process.env.REACT_APP_BASE_API_URL}/camera/tour`,
  addCameraEndPoint: `${process.env.REACT_APP_BASE_API_URL}/camera/add`,
  deleteCameraEndpoint: `${process.env.REACT_APP_BASE_API_URL}/camera/delete`,
  restartCameraEndpoint: `${process.env.REACT_APP_BASE_API_URL}/camera/restart`,
  updateCameraEndpoint: `${process.env.REACT_APP_BASE_API_URL}/camera/update`,
  checkCameraStatusEndPoint: `${process.env.REACT_APP_BASE_API_URL}/camera/check`,
  createCameraStreamOfferEndPoint: `${process.env.REACT_APP_BASE_API_URL}/camera/connect`,
  stopCameraStreamOfferEndPoint: `${process.env.REACT_APP_BASE_API_URL}/camera/stream/stop`,


  sendColoringPDFEndPoint: `${process.env.REACT_APP_BASE_API_URL}/coloringpages/sendColoringPDF`,

  fetchClientsForSendVideoEndPoint: `${process.env.REACT_APP_BASE_API_URL}/tour/getClientsList`,
  deleteClientVideoFileEndPoint: `${process.env.REACT_APP_BASE_API_URL}/admin/video/delete`,
  fetchClientListForVideoEndPoint: `${process.env.REACT_APP_BASE_API_URL}/customer/getclientforvideo`,
  sendVideoToClientEndPoint: `${process.env.REACT_APP_BASE_API_URL}/admin/video/sendemail`,
  squarePayEndPoint: `${process.env.REACT_APP_BASE_API_URL}/payment/process_payment`,
  pushNotificationToClientsEndPoint: `${process.env.REACT_APP_BASE_API_URL}/notification/push`,

  getAllTourPlaceEndPoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/getall`,
  getTourplaceForISPEndPoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/getispall`,
  getTourplaceByISPEndPoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/gettourbyisp`,
  getTourPlaceEndPoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/get`,
  getTourplaceByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/id/`,
  addTourPlaceEndPoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/add`,
  deleteTourplaceEndPoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/delete`,
  deleteTourplaceEndPoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/delete`,
  updateTourplaceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/tourplace/update`,

  getAllPricingEndPoint: `${process.env.REACT_APP_BASE_API_URL}/price/getprice`,
  getPricingByIDEndpoint: `${process.env.REACT_APP_BASE_API_URL}/price/id/`,
  addPricingEndPoint: `${process.env.REACT_APP_BASE_API_URL}/price/add`,
  deletePricingEndpoint: `${process.env.REACT_APP_BASE_API_URL}/price/delete`,
  updatePricingEndpoint: `${process.env.REACT_APP_BASE_API_URL}/price/update`,

  getAllInvoiceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/invoice/loglist`,
  getValidInvoiceEndpoint: `${process.env.REACT_APP_BASE_API_URL}/invoice/validlist`,

  payEndpoint: `${process.env.REACT_APP_BASE_API_URL}/invoice/pay`,
  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageUserIDKeyName: 'user_id',
  storageRefreshTokenKeyName: 'refreshToken'
}
