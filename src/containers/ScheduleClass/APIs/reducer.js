import cookie from 'react-cookies';

import { ACTION } from './constant';

let initialState= {
  fileUploadProgress:0
};

export default function loginReducer(state = cookie.load('auth') ? {details:cookie.load('auth')} : initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN:
          if(action.apiResponse.data){
            return {...state, ...action.apiResponse.data};
          }
          return {...state, ...action.apiResponse};

        case ACTION.LOGOUT:
          return {...initialState};

        case ACTION.CLEAR_LOGIN_STATE:
          return {...initialState};

        case ACTION.ADDITIONAL_DETAILS:
          return { ...initialState, additionalDetailsResponse: action.apiResponse.data };
        
        case ACTION.FORGOT_PASSWORD:
          return {...state, secretLink: action.apiResponse.data};
        
        case ACTION.RESET_PASSWORD:
          return {...state, ...action.apiResponse.data};
        case ACTION.FILE_UPLOAD_PROGRESS:
          return {...state,fileUploadProgress:action.apiResponse}
        default:
          return state;
    }
}