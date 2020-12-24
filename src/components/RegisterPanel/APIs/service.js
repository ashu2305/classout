import ApiService from '../../../utils/apiService';
import { API_ROOT_PATH } from '../../../config/apiPath';
class RegisterService {
  signup(params) {
      const options = {
          method: 'POST',
          url: `${API_ROOT_PATH}/signup`,
          data: params,
      };
      return ApiService(options);
  }
}

const RegisterServiceInstance = new RegisterService();
export default RegisterServiceInstance;