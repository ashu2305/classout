import ApiService from '../../../utils/apiService';
import {API_ROOT_PATH} from '../../../config/apiPath';

class UserService {

  uploadImage(data){
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/core/document/upload?type=${data.type}`,
      isAuthRequired: true,
      data: data.params
    }
    return ApiService(options);
  }

  deleteImage(id){
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/core/document/delete/${id}`,
      isAuthRequired: true,
    }
    return ApiService(options);
  }

  updateUserDetails(params){
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/user/create`,
      isAuthRequired: true,
      data: params,
    }
    return ApiService(options);
  }

    viewProfile(params){
    const options = {
      method: 'GET',
      url: `${API_ROOT_PATH}/currentUser/viewProfile`,
      isAuthRequired: true,
      data: params,
    }
    return ApiService(options);
  }

  changePassword(params){
    const options = {
      method: 'POST',
      url: `${API_ROOT_PATH}/currentUser/changePassword`,
      isAuthRequired: true,
      data: params
    }
    return ApiService(options);
  }

}

const UserServiceInstance = new UserService();
export default UserServiceInstance;