import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const styles = withStyles((theme) => ({
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


class TransitionModal extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          open: false,
        }
    }

    handleOpen(){
        this.setState({
            open: true,
        })
    };

    handleClose(){
        this.setState({
            open: false,
        })
    };

    render ()
    {
        const { classes } = this.props;
        return (
            <div>
i
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={this.open}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={this.open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                </div>
                </Fade>
            </Modal>
            </div>
        );
    }
    
}

export default withStyles(styles, { withTheme: true })(TransitionModal)