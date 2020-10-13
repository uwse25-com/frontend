import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4, 0),
      width: '38ch',
    },
  },
}));

export function BasicTextField(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        name={props.name}
        id="standard-basic" 
        label="Task Name" 
        variant="outlined"
        onChange={props.onChange}
        />
    </form>
  );
}

export function NoteToSelf(props){
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField 
            name={props.name}
            id="outlined-basic" 
            label="Note To Self" 
            variant="outlined" 
            onChange={props.onChange}
        />
        </form>
      );
}