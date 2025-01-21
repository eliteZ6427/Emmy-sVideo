import axios from 'axios'
import { getBlobFromLocalForage } from 'utils/common'
import jwtDefaultConfig from './jwtDefaultConfig'
import qs from 'qs';

export default class JwtService {
  // ** jwtConfig <= Will be used by this service

  // eslint-disable-next-line
  jwtConfig = { ...jwtDefaultConfig }

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false

  // ** For Refreshing Token
  subscribers = []

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig }
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName)
  }

  getUserID() {
    return localStorage.getItem(this.jwtConfig.storageUserIDKeyName)
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)
  }

  setToken(value) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value)
  }

  setRefreshToken(value) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value)
  }

  login(...args) {
    return axios.post(this.jwtConfig.loginEndpoint, ...args)
  }

  forgotPassword(...args) {
    return axios.post(this.jwtConfig.forgotPasswordEndpoint, ...args)
  }

  resetForgotPassword(...args) {
    return axios.post(this.jwtConfig.resetForgotPasswordEndpoint, ...args)
  }

  ispregister(param, token) {
    return axios.post(`${this.jwtConfig.ispregisterEndpoint}/${token}`, param)
  }

  register(params) {
    params.tourplace = [params.tourplace]
    return axios.post(this.jwtConfig.registerEndpoint, params)
  }

  resetPassword(...args) {
    return axios.post(this.jwtConfig.resetPasswordEndpoint, ...args)
  }

  refreshToken() {
    return axios.post(this.jwtConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken()
    })
  }
  resendVerifyEmail(param) {
    return axios.post(this.jwtConfig.resendVerifyEmailEndPoint, param)
  }
  sendEmailVerification(param) {
    return axios.post(this.jwtConfig.sendEmailVerificationEndPoint, param)
  }
  getAllUsers() {
    return axios.get(this.jwtConfig.getAllUsersEndpoint)
  }

  searchUsers(...args) {
    return axios.get(this.jwtConfig.searchUsersEndpoint, ...args)
  }

  getHeaders(token, tourplace) {
    const url = tourplace === undefined ? `${this.jwtConfig.headerGetEndpoint}` : `${this.jwtConfig.headerGetEndpoint}?tourplace=${tourplace}`;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    })
  }

  deleteHeaders(id, token) {
    return axios.post(this.jwtConfig.headerDeleteEndpoint, { header_id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  getFooters(token, tourplace) {
    const url = tourplace === undefined ? `${this.jwtConfig.footerGetEndpoint}` : `${this.jwtConfig.footerGetEndpoint}?tourplace=${tourplace}`;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    })
  }

  deleteFooters(id, token) {
    return axios.post(this.jwtConfig.footerDeleteEndpoint, { footer_id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  // ISP User actions
  inviteNewISP(token, params) {
    return axios.post(this.jwtConfig.inviteNewISPEndpoint, params, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getISPUsers(token, params) {
    return axios.get(`${this.jwtConfig.getISPUsersEndpoint}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  deleteISPUser(id, token) {
    return axios.post(this.jwtConfig.deleteISPUserEndpoint, { user_id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  getISPUserByID(token, param) {
    return axios.get(`${this.jwtConfig.getISPUserByIDEndpoint}/${param}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  updateISPUser(token, ...args) {
    return axios.post(this.jwtConfig.updateISPUserEndpoint, ...args, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  // client actions


  getAllClients(token, params) {
    const url = params.tourplace === undefined ? `${this.jwtConfig.getAllClientsEndpoint}` : `${this.jwtConfig.getAllClientsEndpoint}?tourplace=${params.tourplace}`;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  deleteClient(id, token) {
    return axios.post(this.jwtConfig.deleteClientEndpoint, { user_id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  getClientByID(token, param) {
    return axios.get(`${this.jwtConfig.getClientByIDEndpoint}/${param}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  updateClient(token, ...args) {
    return axios.post(this.jwtConfig.updateClientEndpoint, ...args, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  // Customer Actions
  getCustomers(token, params) {
    const url = params.tourplace === undefined ? `${this.jwtConfig.getCustomersEndpoint}` : `${this.jwtConfig.getCustomersEndpoint}?tourplace=${params.tourplace}`;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  deleteCustomer(id, token) {
    return axios.post(this.jwtConfig.customerDeleteEndpoint, { user_id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  getCustomerByID(token, param) {
    return axios.get(`${this.jwtConfig.getCustomerByIDEndpoint}/${param}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  updateCustomer(token, ...args) {
    return axios.post(this.jwtConfig.customerUpdateEndpoint, ...args, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  async addClient(token, params) {
    return axios.post(this.jwtConfig.addClientEndPoint, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  getClientByCustomerID(token, params) {
    return axios.get(`${this.jwtConfig.getClientByCustomerIDEndPoint}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  async addChild(token, args) {
    let formData = new FormData();
    for (let arg in args) {
      if (arg === 'front_1_file') {
        await Promise.all([
          getBlobFromLocalForage(args[arg].key)
        ]).then(([front_1_file]) => {
          try {
            formData.append('front_1_file', front_1_file, 'front_1_file.png');
          } catch (error) {
            console.log(error);
          }
        })
      } else if (arg === 'front_2_file') {
        await Promise.all([
          getBlobFromLocalForage(args[arg].key)
        ]).then(([front_2_file]) => {
          formData.append('front_2_file', front_2_file, 'front_2_file.png');
        })
      } else if (arg === 'left_file') {
        await Promise.all([
          getBlobFromLocalForage(args[arg].key)
        ]).then(([left_file]) => {
          formData.append('left_file', left_file, 'left_file.png');
        })
      } else if (arg === 'right_file') {
        await Promise.all([
          getBlobFromLocalForage(args[arg].key)
        ]).then(([right_file]) => {
          formData.append('right_file', right_file, 'right_file.png');
        })
      } else {
        await formData.append(arg, args[arg]);
      }
    }
    return axios.post(this.jwtConfig.addChildEndPoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  getClientByClientID(token, params) {
    return axios.get(`${this.jwtConfig.getClientByClientIDEndPoint}${params.client_id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  updateClientByClientID(token, params) {
    return axios.post(this.jwtConfig.updateClientEndpoint, params, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getAllCameraVoice(token) {
    return axios.get(this.jwtConfig.getAllCameraVoiceEndPoint, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getCameraVoiceByID(token, id) {
    return axios.get(`${this.jwtConfig.getCameraVoiceByIDEndpoint}?id=${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getCameravoiceByCameraID(token, param) {
    return axios.get(`${this.jwtConfig.getCameravoiceByCameraIDEndpoint}?id=${param.id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  addCameraVoice(token, param) {
    return axios.post(this.jwtConfig.addCameraVoiceEndpoint, param, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  updateCameraVoice(token, param) {
    return axios.post(this.jwtConfig.updateCameraVoiceEndpoint, param, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  deleteCameraVoice(token, param) {
    return axios.post(this.jwtConfig.deleteCameraVoiceEndpoint, param, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  // Coloring page actions

  getAllColoringPage(token) {
    return axios.get(this.jwtConfig.getAllColoringPageEndPoint, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getColoringPageByID(token, id) {
    return axios.get(`${this.jwtConfig.getColoringPageByIDEndpoint}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  addColoringPage(token, param) {
    return axios.post(this.jwtConfig.addColoringPageEndpoint, param, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  updateColoringPage(token, param) {
    return axios.post(this.jwtConfig.updateColoringPageEndpoint, param, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  deleteColoringPage(token, param) {
    return axios.post(this.jwtConfig.deleteColoringPageEndpoint, param, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }


  // Exit Email actions

  getAllExitEmail(token) {
    return axios.get(this.jwtConfig.getAllExitEmailEndPoint, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getExitEmailByID(token, id) {
    return axios.get(`${this.jwtConfig.getExitEmailByIDEndpoint}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  addExitEmail(token, param) {
    return axios.post(this.jwtConfig.addExitEmailEndpoint, param, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  updateExitEmail(token, param) {
    return axios.post(this.jwtConfig.updateExitEmailEndpoint, param, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  deleteExitEmail(token, param) {
    return axios.post(this.jwtConfig.deleteExitEmailEndpoint, param, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }


  getAllCamera(token, tourplace) {
    const url = tourplace === undefined ? `${this.jwtConfig.getAllCameraEndPoint}` : `${this.jwtConfig.getAllCameraEndPoint}?tourplace=${tourplace}`;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getCamerasByTourPlace(token) {
    return axios.get(this.jwtConfig.getCamerasByTourPlace, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getCameraByID(token, id) {
    return axios.get(`${this.jwtConfig.getCameraByIDEndpoint}${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  addCamera(token, params) {
    return axios.post(this.jwtConfig.addCameraEndPoint, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }


  deleteCamera(id, token) {
    return axios.post(this.jwtConfig.deleteCameraEndpoint, { id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  restartCamera(id, token) {
    return axios.post(this.jwtConfig.restartCameraEndpoint, { id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  updateCamera(token, params) {
    return axios.post(this.jwtConfig.updateCameraEndpoint, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  checkCameraStatus(token, param) {
    const params = {
      'camera_ip': param.camera_ip,
      'userName': param.camera_user_name,
      'password': param.password
    }

    return axios.post(this.jwtConfig.checkCameraStatusEndPoint, params, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  createCameraStreamOffer(token, camera_id) {
    const params = {
        "sdp": "",
        "type": "offer",
        "camera_id" : camera_id
    }

    return axios.post(this.jwtConfig.createCameraStreamOfferEndPoint, params, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  stopCameraStreamOffer(camera_id, user_id) {
    return axios.post(`${this.jwtConfig.stopCameraStreamOfferEndPoint}/${camera_id}/${user_id}`)
  }

  sendColoringPDF(token, param) {
    return axios.post(this.jwtConfig.sendColoringPDFEndPoint, param, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  fetchClientsForSendVideo(token) {
    return axios.get(`${this.jwtConfig.fetchClientsForSendVideoEndPoint}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  uploadClientVideoFile(token, param) {
    return axios.post(`${this.jwtConfig.uploadClientVideoFileEndPoint}`, param, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  getAllCompletedVideos(token, tourplace) {
    const url = tourplace === undefined ? `${this.jwtConfig.getAllCompletedVideosEndPoint}` : `${this.jwtConfig.getAllCompletedVideosEndPoint}?tourplace=${tourplace}`;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }


  deleteClientVideoFile(id, token) {
    return axios.post(this.jwtConfig.deleteClientVideoFileEndPoint, { video_id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  fetchClientListForVideo(token) {
    return axios.get(this.jwtConfig.fetchClientListForVideoEndPoint, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  sendVideoToClient(token, param) {
    return axios.post(this.jwtConfig.sendVideoToClientEndPoint, param, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  pushNotificationToClients(token, param) {
    return axios.post(this.jwtConfig.pushNotificationToClientsEndPoint, param, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  squarePay(token, nonce, amount) {
    const param = {
      nonce: nonce,
      amount: amount
    }
    return axios.post(this.jwtConfig.squarePayEndPoint, param, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  getAllTourPlace() {
    return axios.get(this.jwtConfig.getAllTourPlaceEndPoint)
  }
  getTourplaceForISP(token) {
    return axios.get(this.jwtConfig.getTourplaceForISPEndPoint, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  getTourplaceByISP(token) {
    return axios.get(this.jwtConfig.getTourplaceByISPEndPoint, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  getTourPlace(token) {
    return axios.get(this.jwtConfig.getTourPlaceEndPoint, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  getTourplaceByID(token, id) {
    return axios.get(`${this.jwtConfig.getTourplaceByIDEndpoint}${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  addTourPlace(token, params) {
    return axios.post(this.jwtConfig.addTourPlaceEndPoint, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
  deleteTourplace(id, token) {
    return axios.post(this.jwtConfig.deleteTourplaceEndPoint, { id: id }, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  updateTourplace(token, params) {
    return axios.post(this.jwtConfig.updateTourplaceEndpoint, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  // Pricing actions


  getAllPricing(token, tourplace) {
    const url = tourplace === undefined ? `${this.jwtConfig.getAllPricingEndPoint}` : `${this.jwtConfig.getAllPricingEndPoint}?tourplace=${tourplace}`;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getPricingByID(token, id) {
    return axios.get(`${this.jwtConfig.getPricingByIDEndpoint}${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  addPricing(token, params) {
    return axios.post(this.jwtConfig.addPricingEndPoint, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }


  deletePricing(id, token) {
    return axios.post(this.jwtConfig.deletePricingEndpoint, { id: id }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  updatePricing(token, params) {
    return axios.post(this.jwtConfig.updatePricingEndpoint, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }

  getAllInvoice(token, params) {
    let url = this.jwtConfig.getAllInvoiceEndpoint;
    const queryParams = [];

    if (params.tourplace !== undefined) {
      queryParams.push(`tourplace=${params.tourplace}`);
    }
    if (params.start_date !== undefined && params.end_date !== undefined && params.start_date !== null && params.end_date !== null) {
      queryParams.push(`from=${params.start_date}&to=${params.end_date}`);
    }

    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  getValidInvoice(token, tourplace) {
    const url = tourplace === undefined ? `${this.jwtConfig.getValidInvoiceEndpoint}` : `${this.jwtConfig.getValidInvoiceEndpoint}?tourplace=${tourplace}`;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  pay(token, param) {
    return axios.post(this.jwtConfig.payEndpoint, param, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      }
    })
  }
}
