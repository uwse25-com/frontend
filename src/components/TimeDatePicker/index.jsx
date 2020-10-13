import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import './styles.scss';

function BasicDateTimePicker(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker className="date-time-picker"
        name={props.name}
        label={props.label}
        inputVariant="outlined"
        disablePast
        value={props.value}
        onChange={props.onChange}
        showTodayButton
        minDate={props.minDate}
      />
    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;