import cookie from 'react-cookies';
import get from 'lodash/get';

import LoginServiceInstance from './service';
import { ACTION } from './constant';
import { removeUserCookie, saveUserCookie } from '../../../utils/common';
import LocalStorageServices from '../../../utils/localstorage';

export const userLogin = (params) => {
  return dispatch => {
      return LoginServiceInstance.login(params).then(async(response) => {
          await saveUserCookie(response.data, '/');
          dispatch({
              type: ACTION.LOGIN,
              apiResponse: response.data,
          });
          return response.data;
      }).catch((error) => {
          console.log("Got Error with login " + error.message);
          return error
      });
  }
};

export const logoutUser = () => {
    LocalStorageServices.setItem('TOKEN','');
    removeUserCookie();
    return { type: ACTION.LOGOUT }
};

export function clearLoginState() {
  return { type: ACTION.CLEAR_LOGIN_STATE }
}

export const forgotPassword = (params) => {
    return dispatch => {
        return LoginServiceInstance.forgotPassword(params).then((response) => {
            dispatch({
                type: ACTION.FORGOT_PASSWORD,
                apiResponse: response.data,
            });
            return response.data;
        }).catch((error) => {
            console.log("Got Error with user forgot password: " + error)
        });
    }
  };

  export const resetPassword = (params) => {
    return dispatch => {
        return LoginServiceInstance.resetPassword(params).then((response) => {
            dispatch({
                type: ACTION.RESET_PASSWORD,
                apiResponse: response.data,
            });
            return response.data;
        }).catch((error) => {
            console.log("Got Error with user reset password: " + error)
        });
    }
  };
