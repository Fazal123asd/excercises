import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../Excercises/Dialog/Create'

const Header = ({muscles, onExcerciseCreate, exercises}) => {
    return (

        <AppBar position="static" >
            <Toolbar >
                <Typography variant="h6" color='inherit' style={{flex: 1}}>
                    Excercise DataBase
      </Typography>
        <CreateDialog muscles={muscles} onCreate={onExcerciseCreate} exercises={exercises}/>

            </Toolbar>
        </AppBar>

    )
}

export default Header;