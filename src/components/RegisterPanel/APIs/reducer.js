import cookie from 'react-cookies';

import { ACTION } from './constant';

let initialState= {};

export default function registerReducer(state = cookie.load('auth') ? {details:cookie.load('auth')} : initialState, action) {
    switch (action.type) {
        case ACTION.SIGNUP:
          if(action.apiResponse.data){
            return {...state, ...action.apiResponse.data};
          }
          return {...state, ...action.apiResponse};

        default:
          return state;
    }
}