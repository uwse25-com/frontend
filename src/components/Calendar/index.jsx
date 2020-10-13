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
  
  //Modal State
  const [open, setOpen] = useState(false);

  //Modal State Changes
  const onClose = () => {
    setOpen(false);
  };

  const handleSelectEvent = () => {
    setOpen(true);
  }
  const handleSelectSlot = ({ start, end }) => {
    setOpen(true);
    const title = window.prompt('New Event name')
    if (title)
      setEvents({
        events: [
          ...events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

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
      />
    </>
  );
};

CreateEvent.propTypes = propTypes;

export default CreateEvent;
