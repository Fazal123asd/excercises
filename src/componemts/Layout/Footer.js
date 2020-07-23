import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'

const Footer = ({muscles, catogory, onSelect, width}) =>{
  
    const index = catogory
    ?
     muscles.findIndex(group=> group === catogory) + 1
     : 0
    return(
        <Paper >
        <Tabs
          value={index}
          onChange={(e, index)=>{
              onSelect(index === 0 ? '': muscles[index - 1] )
          }}
          indicatorColor="primary"
          textColor="primary"
          centered = {width !== 'xs'}
          variant={width === 'xs'?"scrollable": null}
        >
            <Tab label="All" />
            {muscles.map(muscles =>  <Tab key={muscles} label={muscles} />)}

        </Tabs>
      </Paper>
    )
}

export default withWidth()(Footer);