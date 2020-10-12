import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function BasicDateTimePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        label="Start Date"
        inputVariant="outlined"
        value={props.startDate}
        onChange={props.startDateChange}
        showTodayButton
      />
    <DateTimePicker
        label="End Date"
        inputVariant="outlined"
        value={props.endDate}
        disablePast
        onChange={props.endDateChange}
        showTodayButton
        minDate={props.startDate}
    />
    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;