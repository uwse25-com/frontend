import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DateTimePicker from '../TimeDatePicker/index'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TransitionModal = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <form onSubmit={props.onSubmit}>
                <input type="text" id="transition-modal-title task-title" name="task-title" value={props.taskName}></input>
                <DateTimePicker
                    startDate={props.startDate}
                    startDateChange={props.startDateChange}
                    endDate={props.endDate}
                    endDateChange={props.endDateChange}
                />
                <input type="text" id="task-progress" name="task-progress" value={props.taskProgress}></input>
                <input type="text" id="task-note-to-self" name="task-note-to-self" value={props.taskNote}></input>
                <input type="submit" id="task-submit" value="Save Task"></input>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionModal