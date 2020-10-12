import React, { useState } from "react";
import { Calendar, Views, momentLocalizer, dateFnsLocalizer } from "react-big-calendar";
import eventList from "../../helpers/events";
import moment from "moment";
import _ from "lodash";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Modal from '../Modal/index';

//Setup localizer
const localizer = momentLocalizer(moment);

//Adding drag + drop feature to Calendar
const DnDCalendar = withDragAndDrop(Calendar);

const propTypes = {};

const CreateEvent = () => {
  //Calendar State
  const [events, setEvents] = useState(_.cloneDeep(eventList));
  const [dayLayoutAlgorithm] = useState("no-overlap");
  //Calendar Event State
  const [taskStartDate, setTaskStartDate] = useState(new Date());
  const [taskEndDate, setTaskEndDate] = useState(new Date());
  const [taskProgress, setTaskProgress] = useState(null);
  const [taskNote, setTaskNote] = useState(null);
  //Modal State
  const [open, setOpen] = useState(false);

  //Date State Changes
  const handleStartDateChange = (date) => {
    setTaskStartDate(date);
  }
  const handleEndDateChange = (date) => {
    setTaskEndDate(date);
  }

  //Modal State Changes
  const onClose = () => {
    setOpen(false);
  };

  const handleSelectEvent = () => {
    setOpen(true);
  }
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
        defaultDate={new Date()}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        dayLayoutAlgorithm={dayLayoutAlgorithm}
      />
      <Modal 
        open={open}
        onClose={onClose}
        //Date Input
        startDate={taskStartDate}
        startDateChange={handleStartDateChange}
        endDate={taskEndDate}
        endDateChange={handleEndDateChange}
      />
    </>
  );
};

CreateEvent.propTypes = propTypes;

export default CreateEvent;
