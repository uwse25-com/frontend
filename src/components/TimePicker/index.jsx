import React, { useState } from "react";
import { KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function TimePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
            label="Start Time"
            placeholder={new Date()}
            mask="__:__ _M"
            value={props.startTime}
            minutesStep="1"
            onChange={props.changeStartTime}
        />
        <KeyboardTimePicker
            label="End Time"
            placeholder={new Date()}
            mask="__:__ _M"
            minutesStep="1"
            value={props.endTime}
            onChange={props.changeEndTime}
            
        />
      </MuiPickersUtilsProvider>
    
  );
}

export default TimePicker;