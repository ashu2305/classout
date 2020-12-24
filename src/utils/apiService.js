import axios from 'axios';
import cookie from 'react-cookies';
import store from '../store';
import { removeUserCookie } from './common';
import LocalStorageServices from './localstorage';
export default function ApiService(config) {
  let axiosInstance = axios.create();
  let { auth } = store.getState();
  if(config.isAuthRequired) {
    if(config.headers) {
        // config.headers['Authorization'] = 'Bearer '+ (auth.details.jwtToken.accessToken ? auth.details.jwtToken.accessToken : cookie.load('auth').access_token);
        // config.headers['Content-Type'] = 'application/json';
        // config.headers['Cache-Control'] = 'no-cache';
    }
    else {
        config.headers = {
            // 'Authorization':  'Bearer '+ (auth.details.data.jwtToken.accessToken ? auth.details.data.jwtToken.accessToken : cookie.load('accessToken')),
            'Authorization':  'Bearer '+ cookie.load('accessToken'),
            'Cache-Control':  'no-cache'
    }
    }
  }

  // if (!config.headers) {
  //   config.headers = {}
  // }
  // if (auth.jwtToken) {
  //   config.headers['Authorization'] = 'Bearer ' + (auth.jwtToken.accessToken ? auth.jwtToken.accessToken : cookie.load('auth').access_token);
  //   config.headers['Content-Type'] = 'application/json';
  //   config.headers['Cache-Control'] = 'no-cache';
  // }

  // debugger;
  // if(config.isAuthRequired) {
  //   debugger;
  //         config.headers['Authorization'] = 'Bearer '+ (auth.details.jwtToken.accessToken ? auth.details.jwtToken.accessToken : cookie.load('auth').access_token);
  //          config.headers['Content-Type'] = 'application/json';
  //          config.headers['Cache-Control'] = 'no-cache';
  //     if(config.headers) {
  //         // config.headers['Authorization'] = 'Bearer '+ (auth.details.jwtToken.accessToken ? auth.details.jwtToken.accessToken : cookie.load('auth').access_token);
  //         // config.headers['Content-Type'] = 'application/json';
  //         // config.headers['Cache-Control'] = 'no-cache';
  //     }
  //     else {
  //         config.headers = {
  //             // 'Authorization':  'Bearer '+ (auth.details.data.jwtToken.accessToken ? auth.details.data.jwtToken.accessToken : cookie.load('accessToken')),
  //             'Authorization':  'Bearer '+ cookie.load('accessToken'),
  //             'Cache-Control':  'no-cache'
  //     }
  //     }
  // }

  return axiosInstance(config)
    .then((_response) => {
      return new Promise((resolve) => {
        //   if (_response && _response.data &&
        //       ((_response.data.status !== undefined && !_response.data.status) || _response.data.error_description)) {
        //       store.dispatch({type: 'SHOW_ERROR',
        //           data: _response.data ? _response.data : {"message":  _response.data.error_description ?
        //           _response.data.error_description : 'Something went wrong'}})
        //       if(_response.data.error_description){
        //           store.dispatch({type: 'LOGOUT', data: _response.data})
        //       }
        //   }

        //   if(_response.data.access_token) {
        //       saveUserCookie(_response.data, '/');
        //   }
        return resolve(_response)
      })
    }).catch(err => {
      return new Promise((resolve, reject) => {
        if (err && err.response && err.response.status === 400) {
          return reject(err.response.data);
        }
        if (err && err.response && err.response.status === 401) {
          LocalStorageServices.setItem('TOKEN', '');
          removeUserCookie();
          store.dispatch({ type: 'LOGOUT' })
        }
        return reject(err);
        // else {
        // store.dispatch({type:'SHOW_ERROR',
        //     data: {"message":  err.response && err.response.data.message ? err.response.data.message :
        //         err.response && err.response.statusText ? err.response.statusText: 'Something went wrong'}});

        // }
      })
    });
}
