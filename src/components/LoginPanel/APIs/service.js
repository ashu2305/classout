import ApiService from '../../../utils/apiService';
import { API_ROOT_PATH } from '../../../config/apiPath';
class LoginService {
  login(params) {
      const options = {
          method: 'POST',
          url: `${API_ROOT_PATH}/signIn`,
          data: params,
      };
      return ApiService(options);
  }
  
  logout(){
      const options = {
          method: 'GET',
          url: `${API_ROOT_PATH}/logout`,
          isAuthRequired: true,
      };
      return ApiService(options);
  }

  forgotPassword(params){
      const options = {
          method: 'GET',
          url: `${API_ROOT_PATH}/forgetPassword?email=${params}`,
      }
      return ApiService(options);
  }

  resetPassword(params){
    const options = {
        method: 'GET',
        url: `${API_ROOT_PATH}/resetPassword?newPassword=${params.newPassword}&token=${params.token}`,
    }
    return ApiService(options);
  }
}

const LoginServiceInstance = new LoginService();
export default LoginServiceInstance;