import { parseNumber } from "../../utils/common";
import get from "lodash/get";
import moment from "moment";

export const formatChartData = (data) => {
  let formattedList =
    (data &&
      data.length &&
      data.map((item) => {
        const total = parseNumber(item.total, 1);
        const published = Math.floor(
          (parseNumber(item.published) / total) * 100
        );
        const unpublished = Math.floor(
          (parseNumber(item.unpublished) / total) * 100
        );
        return {
          live_content: total,
          contentTitle: item.type,
          contentType: {
            published: published,
            unpublished: unpublished,
          },
        };
      })) ||
    [];
  return formattedList;
};

export const formatRecentContent = (data) => {
  let formattedList =
    (data &&
      data.length &&
      data.map((item) => {
        let date = new Date(get(item, "meta.lastUpdated", ""))
          ? moment(get(item, "meta.lastUpdated", "")).format("DD/MM/YYYY")
          : "";
        let time = new Date(get(item, "meta.lastUpdated", ""))
          ? moment(get(item, "meta.lastUpdated", "")).format("hh:mm A")
          : "";
        return {
          title: get(item, "meta.title", ""),
          banner: get(item, "meta.posterImage", ""),
          category: `#${get(item, "meta.contentType", "")}`,
          date: date,
          time: time,
          published: get(item, "meta.published", false)
        };
      })) ||
    [];
  return formattedList;
};

export const formatUserCountData = (data={}) => {
  let userArr = [
    { title: "all users", key: "total" },
    { title: "active users", key: "active" },
    { title: "inactive users", key: "inactive" },
  ];
  let formattedList =
    userArr.map((item) => {
      return {
        ...item,
        count: (data && data[item.key]) || 0,
      };
    }) || [];
  return formattedList;
};


export const formatSliderContentData = (data) => {
  let formattedList =
    (data &&
      data.length &&
      data.map((item) => {
        return {
          ...item,
          labelName: get(item, "name", ""),
          linkName: get(item, "name", ""),
        };
      })) ||
    [];
  return formattedList;
};

export const formatRecentContentFilterData = (data) => {
  let formattedList =
    (data &&
      data.length &&
      data.map((item) => {
        return {
          ...item,
          id: get(item, "name", ""),
        };
      })) ||
    [];
  return formattedList;
};


export const formatGenreContentWiseData  = (data) => {
  const maxValue =
    data &&
    data.length &&
    data.reduce(
      (max, p) =>
        parseNumber(p.count) > parseNumber(max)
          ? parseNumber(p.count)
          : parseNumber(max),
      1
    );
  let formattedList =
    (data &&
      data.length &&
      data.map((item) => {
        const gradientBarWidth = `${Math.ceil(
          (parseNumber(item.count) / maxValue) * 100
        )}%`;
        return {
          ...item,
          gradientBarWidth: gradientBarWidth,
        };
      })) ||
    [];
  return formattedList;
};
