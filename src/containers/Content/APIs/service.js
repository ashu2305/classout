import ApiService from '../../../utils/apiService';
import { API_ROOT_PATH } from '../../../config/apiPath';
class contentService {
  saveEduContent(params) {
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/eduProgram/create`,
      data: params,
    };
    return ApiService(options);
  }
  saveNonEduContent(params) {
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/nonEduProgram/create`,
      data: params,
    };
    return ApiService(options);
  }

  getLanguage(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/language/`,
    };
    return ApiService(options);
  }
  getLevels(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/level/`,
    };
    return ApiService(options);
  }
  getCategories(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/category/`,
    };
    return ApiService(options);
  }
  getSubCategories(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/subCategory/`,
    };
    return ApiService(options);
  }
  getContentList(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/program/`,
    };
    return ApiService(options);
  }
  getCourseData(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/program/${params}`,
    };
    return ApiService(options);
  }
  getResources(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/resource/`,
    };
    return ApiService(options);
  }
  getCurrencies(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/currency/`,
    };
    return ApiService(options);
  }
  getBanners(params) {
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/banner/`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  saveBannerContent(params) {
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/banner/create`,
      data: params,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  createPortal(params) {
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/portal/create`,
      data: params,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  getPortalEnums(){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/editorial/`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  getPortals(){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/portal/`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  getPortalById(id){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/portal/${id}`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  getLinkDest(){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/editorial/linkDestination`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  getLinkTo(){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/editorial/linkTo`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  getFormFields(){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/formFieldMaster/`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }
  
  
  
}

const contentServiceInstance = new contentService();
export default contentServiceInstance;