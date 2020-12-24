import { ACTION } from './constants';

let initialState = {

};

export default function UserProfileReducer(state = initialState, action){
  switch(action.type){
    case ACTION.VIEW_PROFILE:
      return {...state,  userDetails: action.apiResponse.data}
    case ACTION.FORGOT_PASSWORD_EMAIL:
      return {...state,forgotPasswordEmail:action.email}
    default:
        return state;
  }
}