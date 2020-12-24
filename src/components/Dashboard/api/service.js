import ApiService from "../../../utils/apiService";
import { API_ROOT_PATH } from "../../../config/apiPath";

class DashboardService {
  fetchContentTypeWise() {
    const options = {
      method: "GET",
      url: `${API_ROOT_PATH}/core/data/dashboard/contentTypeWise`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }

  fetchRecentContent(params) {
    const options = {
      method: "GET",
      url: `${API_ROOT_PATH}/core/data/dashboard/recentContent${
        params.contentType ? "?contentType=" + params.contentType : ""
      }`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }

  fetchUserCount() {
    const options = {
      method: "GET",
      url: `${API_ROOT_PATH}/user/userCount`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }

  fetchContentSliderData() {
    const options = {
      method: "GET",
      url: `${API_ROOT_PATH}/content/entityAttribute/exposed`,
      isAuthRequired: true,
    };
    return ApiService(options);
  }

  fetchGenreContentTypeWise(body) {
    const options = {
      method: "POST",
      url: `${API_ROOT_PATH}/core/data/dashboard/genreContentTypeWise`,
      isAuthRequired: true,
      data: body,
    };
    return ApiService(options);
  }
}

const DashboardServiceInstance = new DashboardService();
export default DashboardServiceInstance;
