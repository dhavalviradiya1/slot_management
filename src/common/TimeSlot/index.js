import moment from "moment";

export const TimeSlot = (selectTimeZone) => {
  const startTime = moment.utc("08:00 AM", "hh:mm A");
  const endTime = moment.utc("11:00 PM", "hh:mm A");
  if (selectTimeZone === "IST") {
    startTime.local().format("hh:mm A");
    endTime.local().format("hh:mm A");
  }

  const timeSlots = [];
  let currentTime = moment(startTime);

  while (currentTime.isSameOrBefore(endTime)) {
    timeSlots.push(currentTime.format("hh:mm A"));
    currentTime = currentTime.add(30, "minutes");
  }
  return timeSlots;
};
