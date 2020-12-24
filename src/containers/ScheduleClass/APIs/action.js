import cookie from 'react-cookies';
import get from 'lodash/get';
import axios from 'axios';
import contentServiceInstance from './service';
import { ACTION } from './constant';
import { API_ROOT_PATH } from '../../../config/apiPath';
// import { removeUserCookie, saveUserCookie } from '../../../utils/common';
// import LocalStorageServices from '../../../utils/localstorage';
export const getContentList = (cb) => {
  return dispatch => {
      return contentServiceInstance.getContentList().then((response) => {
          if(cb){
              cb(response.data)
          }
          return response.data;
      }).catch((error) => {
          console.log("Got Error with saving content " + error.message);
          return error
      });
  }
};
export const getCourseData = (courseId,cb)=>{
    return dispatch => {
        return contentServiceInstance.getCourseData(courseId).then((response) => {            
          if(cb){
              cb(response.data)
          }
         return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
}
export const saveLiveClass = (data,cb) => {
    return dispatch => {
        return contentServiceInstance.saveLiveClass(data).then((response) => { 
          if(cb){
              cb(response.data);
          }        
            return response.data;
           
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
  };
export const saveContent = (data,cb) => {
  return dispatch => {
      return contentServiceInstance.saveContent(data).then((response) => { 
        if(cb){
            cb();
        }         
          return response.data;
         
      }).catch((error) => {
          console.log("Got Error with saving content " + error.message);
          return error
      });
  }
};
export const getLanguage = (cb) => {
    return dispatch => {
        return contentServiceInstance.getLanguage().then((response) => {            
          if(cb){
              cb(response.data.data)
          }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with getting Language " + error.message);
            return error
        });
    }
  };
  export const getCategories = (cb) => {
    return dispatch => {
        return contentServiceInstance.getCategories().then((response) => {
            if(cb){
                cb(response.data.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
  };
  export const getLevels = (cb) => {
    return dispatch => {
        return contentServiceInstance.getLevels().then((response) => {
            if(cb){
                cb(response.data.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
  };
  export const getSubCategories = (cb) => {
    return dispatch => {
        return contentServiceInstance.getSubCategories().then((response) => {
            if(cb){
                cb(response.data.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
  };
  export const uploadFile = (files,cb)=>dispatch=>{
    
        const config = {
          onUploadProgress: function(progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)           
              dispatch({
              type: ACTION.FILE_UPLOAD_PROGRESS,
              apiResponse: percentCompleted,
          });
          if(cb){
              cb('progress',percentCompleted)
          }
          },
          headers : {
            // 'Authorization':  'Bearer '+ (auth.details.data.jwtToken.accessToken ? auth.details.data.jwtToken.accessToken : cookie.load('accessToken')),
            'Authorization':  'Bearer '+ cookie.load('accessToken'),
            'Cache-Control':  'no-cache'

            }
        }
      
        let data = new FormData()
        data.append('image', files[0])
      
        axios.post(`${API_ROOT_PATH}/resource/upload?type=CONTENT`, data, config)
          .then(res => {
            if(cb){
                cb('completed',res.data)
            }
              console.log(res.data)
            })
          .catch(err => console.log(err))
      
  }
  export const getResources = (cb)=>{
    return dispatch => {
        return contentServiceInstance.getResources().then((response) => {
            if(cb){
                cb(response.data.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
  }
  export const getCurrencies = (cb) => {
    return dispatch => {
        return contentServiceInstance.getCurrencies().then((response) => {
            if(cb){
                cb(response.data.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
  }; 
        


