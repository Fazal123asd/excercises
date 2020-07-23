import React from 'react'
import { Grid, Paper, ListItemSecondaryAction, Typography, List, ListItem, ListItemText, IconButton, withStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import Form from '../Excercises/Form'


const style = theme => ({
    paper: { padding: 20,
         marginTop: 10, 
         marginBottom: 10, 
         height: 500, 
         overflow: 'auto' 
        }
})

const Excercises = ({ 
    classes,
    exercises,
    catogory,
    onselect,
    onDelete,
    onselectEdit,
    editMode,
    muscles,
    onEdit,
    exercise,
    exercise: { title = ' Welcome!',
        description = ' Please select the excercise.' }
}) => {
  
    return (
        <Grid container >
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    {exercises.map(([group, exercises]) =>
                        !catogory || catogory === group ?

                            <React.Fragment>
                                <Typography key={group} variant='h6' style={{ textTransform: 'capitalize' }} >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) =>
                                        <ListItem button onClick={() => onselect(id)}>
                                            <ListItemText primary={title} />


                                            <ListItemSecondaryAction>
                                                <IconButton onClick={() => onselectEdit(id)}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => onDelete(id)}>
                                                    <DeleteIcon />
                                                </IconButton>



                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )}
                                </List>
                            </React.Fragment> : null

                    )}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                    {editMode ? <Form 
                    muscles={muscles} 
                    exercise = {exercise}
                    onSubmit = {onEdit}/> :
                        <React.Fragment>
                            <Typography variant='h6'>
                                {title}
                            </Typography>
                            <Typography variant="body2">
                                {description}
                            </Typography>
                        </React.Fragment>
                    }

                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(Excercises) ;