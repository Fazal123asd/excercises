import React, { Component } from 'react'
import { DialogTitle, Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form'


export default class extends Component {

    state = {
        open: false,

    }

    handleToggle = () => {
        this.setState((prevState) => ({ open: !prevState.open }))
    }

    handleFormSubmit = exercise => {
        this.handleToggle()
        this.props.onCreate(exercise)
      }


    render() {
        const { open } = this.state,
            { muscles, exercises } = this.props

        return (
            <React.Fragment>

                <Fab color="secondary" onClick={this.handleToggle} aria-label="add">
                    <AddIcon />
                </Fab>

                <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create New Excercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Plrase fill the form
  </DialogContentText>
                        <Form muscles={muscles}  onSubmit={this.handleFormSubmit} exercises={exercises}/>
                    </DialogContent>

                </Dialog>
            </React.Fragment>
        )
    }
}

