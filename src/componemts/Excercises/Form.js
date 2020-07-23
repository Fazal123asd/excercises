import React, { Component } from 'react'
import { Button, Select, MenuItem, InputLabel, FormControl, TextField, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: 250,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
})

export default withStyles(styles)(class extends Component {

    state = this.getInitState()

    getInitState() {
        const { exercise } = this.props

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }
    componentWillReceiveProps({ exercise }) {
        this.setState({
            ...exercise
        })
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = () => {

        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state
        })

        this.setState(this.getInitState())
    }
    render() {
        const { title, description, muscles } = this.state,
            { classes,exercise, muscles: catogory } = this.props
        return <form>
            <TextField className={classes.formControl} id="standard-basic" label="Title" value={title} onChange={(event) => this.handleChange('title', event)} />
            <br />
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Muscles</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={muscles}
                    onChange={(e) => this.handleChange('muscles', e)}
                >
                    {catogory.map(catogory => <MenuItem value={catogory}>{catogory}</MenuItem>)}
                </Select>
            </FormControl>
            <br />
            <TextField className={classes.formControl} id="standard-basic" multiline rows={4} label="description" value={description} onChange={(event) => this.handleChange('description', event)} />
            <br />
            <Button
                color="primary"
                onClick={this.handleSubmit}
            >
                {exercise ? 'Edit' : 'Create'}
            </Button>

        </form>
    }
})