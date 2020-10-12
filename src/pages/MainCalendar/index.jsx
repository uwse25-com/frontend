import React from "react";
import CreateEvent from "../../components/Calendar";
import "./styles.scss";

const MainCalendar = () => {
  return (
    <div className="main-calendar-wrap">
      <CreateEvent />
    </div>
  );
};

export default MainCalendar;
