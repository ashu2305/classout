import cookie from 'react-cookies';
import get from 'lodash/get';

import { saveUserCookie } from '../../../utils/common';
import RegisterServiceInstance from './service';
import { ACTION } from './constant';

export const userSignup = (params) => {
  return dispatch => {
      return RegisterServiceInstance.signup(params).then(async(response) => {
          await saveUserCookie(response.data, '/');
          dispatch({
              type: ACTION.SIGNUP,
              apiResponse: response.data,
          });
          return response.data;
      }).catch((error) => {
          console.log("Got Error with signup " + error.message);
          return error
      });
  }
};