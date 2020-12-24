import ApiService from '../../../utils/apiService';
import { API_ROOT_PATH } from '../../../config/apiPath';
class contentService {    
  getResources(params){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/resource/`,
  };
  return ApiService(options);
  }
  
}

const contentServiceInstance = new contentService();
export default contentServiceInstance;