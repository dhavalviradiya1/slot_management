import React, { useState } from "react";
import moment from "moment";
import { getWeekDates } from "../../common/WeekDates";
import { TimeSlot } from "../../common/TimeSlot";

const TimeSheet = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectTimeZone, setSelectTimeZone] = useState("UTC");

  const handleTimeZoon = (event) => {
    setSelectTimeZone(event.target.value);
  };

  const handlePreviousWeek = () => {
    const previousWeek = moment(currentDate).subtract(1, "week");
    setCurrentDate(previousWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = moment(currentDate).add(1, "week");
    setCurrentDate(nextWeek);
  };

  const weekDates = getWeekDates(currentDate);
  const timeSlot = TimeSlot(selectTimeZone);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => handlePreviousWeek()}
        >
          Previous Week
        </button>
        <div>{moment().format("MMMM DD YYYY")}</div>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => handleNextWeek()}
        >
          Next Week
        </button>
      </div>
      <div className="TimezoneClass mb-4">
        <label>TimeZone:</label>
        <select
          className="form-select form-select-sm"
          onChange={(event) => handleTimeZoon(event)}
        >
          <option value="UTC">Universal Time Coordinated</option>
          <option value="IST">India Standard Time</option>
        </select>
      </div>
      <div className="tableClassMain">
        {weekDates.map((item, index) => {
          return (
            <div key={index} className="d-flex tableClass py-3">
              <div className="weekDateClass">
                <div className="dayRowClass"> {moment(item).format("ddd")}</div>
                <div>{moment(item).format("DD/MM")}</div>
              </div>
              {moment().diff(moment(item.replace(/-/g, "-")), "minutes") * -1 <
              0 ? (
                "Past"
              ) : (
                <div className="d-flex timeSlotClass">
                  {timeSlot.map((slots, indexSlot) => {
                    return (
                      <div key={indexSlot} className="d-flex px-2">
                        <div className="px-1">
                          <input type="checkbox" className="form-check-input" />
                        </div>
                        <div>{slots}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TimeSheet;
