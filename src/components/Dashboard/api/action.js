import { ACTION } from "./constant";
import DashboardServiceInstance from "./service";

export const fetchContentTypeWise = (params) => {
  return (dispatch) => {
    return DashboardServiceInstance.fetchContentTypeWise();
  };
};

export const fetchRecentContent = (params = {}) => {
  return (dispatch) => {
    return DashboardServiceInstance.fetchRecentContent(params);
  };
};

export const fetchUserCount = () => {
  return (dispatch) => {
    return DashboardServiceInstance.fetchUserCount();
  };
};

export const fetchContentSliderData = () => {
  return (dispatch) => {
    return DashboardServiceInstance.fetchContentSliderData();
  };
};

export const fetchGenreContentTypeWise = (data) => {
  return (dispatch) => {
    return DashboardServiceInstance.fetchGenreContentTypeWise(data);
  };
};
