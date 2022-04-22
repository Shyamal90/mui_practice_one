import { Box } from '@mui/material'
import React from 'react'
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

function ListItems({listName,listIcon}) {
  return (
    <Box>
      <List>
          <ListItem disablePadding>
            <ListItemButton component = "a" href='#'>
              <ListItemIcon>
                {listIcon}
              </ListItemIcon>
              <ListItemText primary={listName} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  )
}

export default ListItems
