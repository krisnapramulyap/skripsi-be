const dashboardModel = require("./dashboardModel");
const helperWrapper = require("../../helpers/wrapper");
const moment = require("moment");

const listDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const listMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "august",
  "september",
  "October",
  "November",
  "December",
];

const sortListDataDay = (listDay, data) => {
  const result = [];
  for (const i of listDay) {
    let res = 0;
    for (const j of data) {
      if (i === j.day) {
        res += 1;
        result.push({ day: j.day, total: j.total });
      }
    }
    if (res === 0) {
      result.push({ day: i, total: 0 });
    }
  }
  return result;
};

const sortListDataMonth = (listMonth, data) => {
  const result = [];
  for (const i of listMonth) {
    let res = 0;
    for (const j of data) {
      if (i === j.month) {
        res += 1;
        result.push({ month: j.month, total: j.total });
      }
    }
    if (res === 0) {
      result.push({ month: i, total: 0 });
    }
  }
  return result;
};

module.exports = {
  getDashboard: async (req, res) => {
    try {
      let { filter } = req.query;

      filter = filter || "monthly";

      if (filter === "daily") {
        const result = await dashboardModel.getDashboard(filter);
        let newResult = result.map((item) => {
          return {
            total: Number(item.total),
            day: moment(item.day).format("dddd"),
          };
        });

        newResult = sortListDataDay(listDay, newResult);
        return helperWrapper.response(
          res,
          200,
          "Success get data dashboard",
          newResult
        );
      } else if (filter === "weekly") {
        const result = await dashboardModel.getDashboard(filter);
        let newResult = result.map((item) => {
          return {
            total: Number(item.total),
            month: moment(item.month).format("MMMM"),
          };
        });
        newResult = sortListDataMonth(listMonth, newResult);
        return helperWrapper.response(
          res,
          200,
          "Success get data dashboard",
          newResult
        );
      } else if (filter === "monthly") {
        const result = await dashboardModel.getDashboard(filter);
        let newResult = result.map((item) => {
          return {
            total: Number(item.total),
            month: moment(item.month).format("MMMM"),
          };
        });

        newResult = sortListDataMonth(listMonth, newResult);
        return helperWrapper.response(
          res,
          200,
          "Success get data dashboard",
          newResult
        );
      } else {
        const result = await dashboardModel.getDashboard(filter);
        const newResult = sortListDataMonth(listMonth, result);
        return helperWrapper.response(
          res,
          200,
          "Success get data dashboard",
          newResult
        );
      }
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad Request ${error.message}`,
        null
      );
    }
  },
};
