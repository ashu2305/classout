import { ACTION } from './constants';
import UserServiceInstance from './service';

export const uploadImage = (params,type) => {
  return dispatch => {
    return UserServiceInstance.uploadImage({params,type}).then((response)=>{
        dispatch({
            type: ACTION.UPLOAD_IMAGE,
            apiResponse: response.data,
        });
        return response.data;
    }).catch((error) => {
        console.log("Got error in upload image ", error);
    });
  }
}

export const deleteImage = (id) => {
  return dispatch => {
    return UserServiceInstance.deleteImage(id).then((response)=>{
        dispatch({
            type: ACTION.DELETE_IMAGE,
            apiResponse: response.data,
        });
        return response.data;
    }).catch((error) => {
        console.log("Got error in delete image ", error);
    });
  }
}

export const updateUserDetails = (params) => {
  return dispatch => {
    return UserServiceInstance.updateUserDetails(params).then((response)=>{
        dispatch({
            type: ACTION.UPDATE_USER_DETAILS,
            apiResponse: response.data,
        });
        return response.data;
    }).catch((error) => {
        console.log("Got error in updating user profile ", error);
    });
  }
}

export const viewProfile = (params) => {
  return dispatch => {
    return UserServiceInstance.viewProfile(params).then((response)=>{
        dispatch({
            type: ACTION.VIEW_PROFILE,
            apiResponse: response.data,
        });
        return response.data;
    }).catch((error) => {
        console.log("Got error in getting user profile ", error);
    });
  }
}

export const changePassword = (params) => {
  return dispatch => {
    return UserServiceInstance.changePassword(params).then((response)=>{
        dispatch({
            type: ACTION.CHANGE_PASSWORD,
            apiResponse: response.data,
        });
        return response.data;
    }).catch((error) => {
        console.log("Got error in updating user password ", error);
    });
  }
}
export const forgotPasswordEmail = (email)=>{
  return dispatch => {
    dispatch({
      type: ACTION.FORGOT_PASSWORD_EMAIL,
      email: email,
  });
}  
}



