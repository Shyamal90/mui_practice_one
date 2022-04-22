
import React from 'react'
import { AddBusiness, DarkMode, Group, Home, MenuBook, PermContactCalendar, PersonAdd, Settings } from '@mui/icons-material';
import ListItems from '../ListItems/ListItems';
import { Box, Switch } from '@mui/material';

function Sidebar() {
  return (
    <Box sx={
      {
        // backgroundColor:"red" ,
        flex: "1",
        display: { xs: "none", sm: "block" }
      }
    }>
      <Box sx={{
        position:"fixed"
      }}>
        <ListItems listName={"Home"} listIcon={<Home />} />
        <ListItems listName={"Pages"} listIcon={<MenuBook />} />
        <ListItems listName={"Groups"} listIcon={<Group />} />
        <ListItems listName={"Marketplace"} listIcon={<AddBusiness />} />
        <ListItems listName={"Friends"} listIcon={<PersonAdd />} />
        <ListItems listName={"Settings"} listIcon={<Settings />} />
        <ListItems listName={"Profile"} listIcon={<PermContactCalendar />} />
        <ListItems listName={<Switch />} listIcon={<DarkMode />} />
      </Box>
    </Box>
  )
}

export default Sidebar
