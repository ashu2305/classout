import cookie from 'react-cookies';
import store from '../store';

import {API_ROOT_PATH} from '../config/apiPath';

export const serialize = (obj) => {
  var str = [];
  for (var p in obj)
      if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
  return str.join("&");
};

export const replaceStringWithParams = (str, obj) => {
  for (var j in obj) {
      var regExp = new RegExp(j, 'g');
      str = str.replace(regExp, obj[j]);
  }
  return str;
};

export const isUserloggedIn = () => {
  const state = store.getState();
  let userInfo = state && state.auth;
  
  if (userInfo && (!userInfo.details || (userInfo.details && !userInfo.details.access_token))) {
      userInfo = false;
  }
  return userInfo;
};

export const getAdditionalDetails = () => {
  return cookie.load('additionalDetails');
};

export const removeUserCookie = () => {
  cookie.remove('auth', { path: '/' });
  cookie.remove('accessToken', {path: '/'});
};

export const saveUserCookie = (tokenDetails, path) => {
  cookie.save('auth', tokenDetails, {path: path});
  cookie.save('accessToken', tokenDetails.data.jwtToken.accessToken, {path: path});
};

export const additionalDetailsCookie = (details, appType, path) => {
  const newDetails = {...details};
  delete newDetails.url;
  if (typeof window != 'undefined') {
      window.localStorage.setItem('url', details.url)
  }
  cookie.save('additionalDetails', newDetails, {path: path});
};

export const catchError=(dispatch,type,e)=>{
  return dispatch({
        type:type,
        apiResponse: e,
        isLoading:false,
    });
};

export const getBaseUrl = () => {
  return  API_ROOT_PATH
};

export const toLocaleString=(str)=>{
  return str?Number(str).toLocaleString('en-IN'):''
};

export const parseNumber=(value, defaultValue=0)=>{
  return parseInt(value) || defaultValue
};
