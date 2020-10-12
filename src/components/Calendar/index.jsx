import React, { useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import Popover from "../Popover/popover";
import eventList from "../../helpers/events";
import moment from "moment";
import _ from "lodash";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

//Setup localizer
const localizer = momentLocalizer(moment);

//Adding drag + drop feature to Calendar
const DnDCalendar = withDragAndDrop(Calendar);

const propTypes = {};

const CreateEvent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [events, setEvents] = useState(_.cloneDeep(eventList));
  const [dayLayoutAlgorithm] = useState("no-overlap");
  const popoverOpen = Boolean(anchorEl);
  const popoverId = popoverOpen ? "simple-popver" : undefined;

  const handleSelectEvent = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event Name");
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };
  return (
    <>
      <DnDCalendar
        selectable
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2020, 6, 12)}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        dayLayoutAlgorithm={dayLayoutAlgorithm}
      />
      <Popover
        open={popoverOpen}
        id={popoverId}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </>
  );
};

CreateEvent.propTypes = propTypes;

export default CreateEvent;
