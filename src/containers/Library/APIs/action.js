import cookie from 'react-cookies';
import get from 'lodash/get';
import axios from 'axios';
import contentServiceInstance from './service';
import { ACTION } from './constant';
import { API_ROOT_PATH } from '../../../config/apiPath';

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
        


