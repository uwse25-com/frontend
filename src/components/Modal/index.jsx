import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import DateTimePicker from '../TimeDatePicker/index'
import {BasicTextField, NoteToSelf} from '../TextField/index'
import ProgressBar from '../ProgressBar/index'

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

  //Task Event State
  const [task, setTask] = useState({
      title: [],
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 30 * 60000),
      progress: 0,
      note: [],
  })

  //Save Information
  const save = () => {

  }

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
            <form onSubmit={console.log(task)}>
                <BasicTextField
                    name="title"
                    onChange={e => {setTask({
                        ...task,
                        [e.target.name] : e.target.value,
                    })}}
                />
                <DateTimePicker
                    name="startDate"
                    label="Start Date"
                    value={task.startDate}
                    onChange={date => {setTask({
                        ...task,
                        "startDate": date,
                    })}}
                    minDate={new Date()}
                />
                <DateTimePicker
                    name="endDate"
                    label="End Date"
                    value={task.endDate}
                    onChange={date => {setTask({
                        ...task,
                        "endDate": date,
                    })}}
                    minDate={task.startDate}
                />
                <ProgressBar 
                    name="progress"
                    onChange={(e,val) => {setTask({
                        ...task,
                        "progress": val,
                    })}}
                />
                <NoteToSelf
                    name="note"
                    onChange={e => {setTask({
                        ...task,
                        [e.target.name]: e.target.value,
                    })}}
                />
                <Button onClick={save} variant="outlined" color="primary">
                    Save
                </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionModal