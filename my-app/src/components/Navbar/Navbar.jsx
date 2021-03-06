import React from 'react'
import styled from '@emotion/styled'
import { AppBar, Badge, Box, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Profile from '../Profile/Profile'



function Navbar() {
  const StyleToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  });


  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    width: "40%",
    padding: "5px 10px",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }))


  const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "6px",
    // border:"1px solid white"
  }))



  const UserBox = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    
    // border:"1px solid white"
  }))

  return (
    <AppBar position='sticky'>
      <StyleToolBar>

        <Typography varient="h1" sx={{
          display: {
            xs: "none",
            sm: "block"
          },
          fontSize: "1.4rem"
        }}>SS</Typography>


        <AppleIcon sx={{
          display: {
            xs: "block",
            sm: "none"
          }
        }} />

        <Search><InputBase placeholder='Search...' fullWidth={true} /><SearchIcon color="primary" /></Search>
        <Icons sx={{
          display:{
            xs:"none",
            sm:"flex"
          }
        }}>
          <IconButton sx={{
            color: "white"
          }}>
            <Badge badgeContent={14} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton sx={{
            // margin:"0 1em",
            color: "white"
          }} >
            <Badge badgeContent={14} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Profile/>
        </Icons>

        <UserBox sx={{
          display:{
            xs:"flex",
            sm:"none"
          }
        }}>
          <Profile/>
          <Typography varient="h1">Shyam</Typography>
        </UserBox>

        

      </StyleToolBar>
    </AppBar>
  )
}

export default Navbar
