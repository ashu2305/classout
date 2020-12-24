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
            if (cb) {
                cb(response.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
};
export const getCourseData = (courseId, cb) => {
    return dispatch => {
        return contentServiceInstance.getCourseData(courseId).then((response) => {
            if (cb) {
                cb(response.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
}
export const saveEduContent = (data,cb) => {
  return dispatch => {
      return contentServiceInstance.saveEduContent(data).then((response) => { 
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
export const saveNonEduContent = (data, cb) => {
    return dispatch => {
        return contentServiceInstance.saveNonEduContent(data).then((response) => {
            if (cb) {
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
            if (cb) {
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
            if (cb) {
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
            if (cb) {
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
            if (cb) {
                cb(response.data.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
};
export const uploadFile = (files, cb) => dispatch => {

    const config = {
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            dispatch({
                type: ACTION.FILE_UPLOAD_PROGRESS,
                apiResponse: percentCompleted,
            });
            if (cb) {
                cb('progress', percentCompleted)
            }
        },
        headers: {
            // 'Authorization':  'Bearer '+ (auth.details.data.jwtToken.accessToken ? auth.details.data.jwtToken.accessToken : cookie.load('accessToken')),
            'Authorization': 'Bearer ' + cookie.load('accessToken'),
            'Cache-Control': 'no-cache'

        }
    }

    let data = new FormData()
    data.append('image', files[0])

    axios.post(`${API_ROOT_PATH}/resource/upload?type=CONTENT`, data, config)
        .then(res => {
            if (cb) {
                cb('completed', res.data)
            }
            console.log(res.data)
        })
        .catch(err => console.log(err))

}
export const getResources = (cb) => {
    return dispatch => {
        return contentServiceInstance.getResources().then((response) => {
            if (cb) {
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
            if (cb) {
                cb(response.data.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
};

export const getBanner = (cb) => {
    return dispatch => {
        return contentServiceInstance.getBanners().then((response) => {
            if (cb) {
                cb(response.data.data)
            }
            return response.data;
        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
}

export const saveBannerContent = (data, cb) => {
    return dispatch => {
        return contentServiceInstance.saveBannerContent(data).then((response) => {
            if (cb) {
                cb(response);
            }
            return response.data;

        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
};
export const createPortal = (data,cb)=>{
    return dispatch => {
        return contentServiceInstance.createPortal(data).then((response) => {
            if (cb) {
                cb(response.data);
            }
            return response.data;

        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
}
export const getPortalEnums = (cb)=>{
    return dispatch => {
        return contentServiceInstance.getPortalEnums().then((response) => {
            if (cb) {
                cb(response.data);
            }
            return response.data;

        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
}
export const getPortals = (cb)=>{
    return dispatch => {
        return contentServiceInstance.getPortals().then((response) => {
            if (cb) {
                cb(response.data);
            }
            return response.data;

        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
}
export const getPortalById = (id,cb)=>{    
    return dispatch => {
        return contentServiceInstance.getPortalById(id).then((response) => {
            if (cb) {
                cb(response.data);
            }
            return response.data;

        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }

}
export const getLinkDest = (cb)=>{    
    return dispatch => {
        return contentServiceInstance.getLinkDest().then((response) => {
            if (cb) {
                cb(response.data);
            }
            return response.data;

        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }

}
export const getLinkTo= (cb)=>{    
    return dispatch => {
        return contentServiceInstance.getLinkTo().then((response) => {
            if (cb) {
                cb(response.data);
            }
            return response.data;

        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
}

export const getFormFields= (cb)=>{    
    return dispatch => {
        return contentServiceInstance.getFormFields().then((response) => {
            if (cb) {
                cb(response.data);
            }
            return response.data;

        }).catch((error) => {
            console.log("Got Error with saving content " + error.message);
            return error
        });
    }
}





