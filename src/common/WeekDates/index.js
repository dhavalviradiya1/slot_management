import moment from "moment";

export const getWeekDates = (currentDate) => {
  const startDate = moment(currentDate).startOf("week");
  const endDate = moment(currentDate).endOf("week");
  const dates = [];
  let currentDates = moment(startDate);

  while (currentDates.isSameOrBefore(endDate)) {
    if (currentDates.isoWeekday() <= 5) {
      dates.push(currentDates.format("YYYY-MM-DD hh:mm"));
    }
    currentDates.add(1, "day");
  }

  return dates;
};
