import React from "react";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DatePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        clearable
        value={props.date}
        placeholder={new Date()}
        onChange={props.changeDate}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;