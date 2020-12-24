import React from "react";
import PieChart from "react-minimal-pie-chart";
import CountUp from "react-countup";

import { toLocaleString } from "../../../utils/common";

import "./style.scss";

function Chart(props) {
  const formatNumber = (value) => {
    return toLocaleString(value);
  };

  const { live_content, contentTitle, contentType } = props;
  const backgroundColor = [
    "#c044ae",
    "#4fba6f",
    "#f9df83",
    "#e8745d",
    "#5449d4",
    "brown",
  ];
  const pieData = [];
  let i = 0;
  for (var key in contentType) {
    pieData.push({
      title: key,
      value: contentType[key],
      color: backgroundColor[i],
    });
    i = i + 1;
  }
  return (
    <div className="chart">
      <PieChart
        className="pie_chart"
        data={pieData}
        animate
        animationDuration={1000}
      />
      <div className="pie_content">
        <div className="content_heading">
          <CountUp
            end={live_content}
            duration={2}
            formattingFn={formatNumber}
          />
          <p>{contentTitle}</p>
        </div>
        <ul className="list">
          {pieData.map((item, index) => {
            return (
              <li key={index}>
                <span
                  className="dot"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Chart;
