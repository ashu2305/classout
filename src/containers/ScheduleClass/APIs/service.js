import ApiService from '../../../utils/apiService';
import { API_ROOT_PATH } from '../../../config/apiPath';
class contentService {
    saveContent(params) {
      const options = {
          method: 'POST',
          url: `${API_ROOT_PATH}/program/create`,
          data: params,
      };
      return ApiService(options);
  }
  saveLiveClass(params) {
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/liveProgram/create`,
      data: params,
    };
    return ApiService(options);
  }
  getLanguage(params){
    const options = {
        method: 'GET',
        url: `${API_ROOT_PATH}/language/`,
    };
    return ApiService(options);
  }
  getLevels(params){
    const options = {
        method: 'GET',
        url: `${API_ROOT_PATH}/level/`,
    };
    return ApiService(options);
  }
  getCategories(params){
    const options = {
        method: 'GET',
        url: `${API_ROOT_PATH}/category/`,
    };
    return ApiService(options);
  }
  getSubCategories(params){
    const options = {
        method: 'GET',
        url: `${API_ROOT_PATH}/subCategory/`,
    };
    return ApiService(options);
  }
  getContentList(params){
    const options = {
        method: 'GET',
        url: `${API_ROOT_PATH}/program/`,
    };
    return ApiService(options);
  }
  getCourseData(params){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/program/${params}`,
  };
  return ApiService(options);
  }
  getResources(params){
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

}

const contentServiceInstance = new contentService();
export default contentServiceInstance;