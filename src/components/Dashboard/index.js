import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import get from "lodash/get";
//
// import Chart from "./Chart";
// import MostViewedContent from "./MostViewContent";
// import Timeline from "./timeline";
// import {
//   ChartData,
//   VOD,
//   navMenuItems,
//   userInfo,
//   mostViewedMovies,
//   userCountColor,
//   filterList,
// } from "./api/constant";
// import Filter from "../common/Filter";
// import { toLocaleString, parseNumber } from "../../utils/common";
// import CountUp from "react-countup";

import "./style.scss";
// import {
//   fetchContentTypeWise,
//   fetchRecentContent,
//   fetchUserCount,
//   fetchContentSliderData,
//   fetchGenreContentTypeWise,
// } from "./api/action";
// import {
//   formatChartData,
//   formatRecentContent,
//   formatUserCountData,
//   formatSliderContentData,
//   formatRecentContentFilterData,
//   formatGenreContentWiseData,
// } from "./helper";

class Dashboard extends Component {
  state = {
    chartData: [],
    recentContentData: [],
    userCountData: [],
    sliderContentData: [],
    genreContentWiseData: [],
    selectedContentType: "GENRE",
    selectedPublishFilter: "published",
    selectedRecentContentFilter: "",
    recentContentFilterData: [],
    isLoading: true
  };

  render() {

    return (
        <div className="dashboard">hellodfjdkljfjdkljfkldjklfjkldjklfjkldjklfklj</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        // fetchContentTypeWise,
        // fetchRecentContent,
        // fetchUserCount,
        // fetchContentSliderData,
        // fetchGenreContentTypeWise,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
