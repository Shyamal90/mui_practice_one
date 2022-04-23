import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'
import AlignItemsList from '../AlignItemsList/AlignItemsList'
import QuiltedImageList from '../ImageLists/QuiltedImageList'

function Rightbar() {
  return (
    <Box sx={
      {
        // backgroundColor:"red",
        flex: "2",
        display: { xs: "none", sm: "block" }
      }
    }>
      <Box sx={{
        position: "fixed",
        width:"300"
      }}>
        <Typography varient="h6" fontSize="1.4rem" fontWeight="200">Online Friends</Typography>
        <AvatarGroup total={24} sx={{ display:"flex" ,justifyContent:"left"}}>
          <Avatar alt="Remy Sharp" src={ `https://avatars.githubusercontent.com/u/93374924?v=4` }/>
          <Avatar alt="Travis Howard" src={`https://avatars.githubusercontent.com/u/49594530?v=4`} />
          <Avatar alt="Agnes Walker" src={`https://avatars.githubusercontent.com/u/86275315?v=4`} />
          <Avatar alt="Trevor Henderson" src={`https://avatars.githubusercontent.com/u/28913316?v=4`} />
        </AvatarGroup>


        <Typography varient="h6" fontSize="1.4rem" fontWeight="200" mt={4}>Latest Posts</Typography>
        <QuiltedImageList/>


        <Typography varient="h6" fontSize="1.4rem" fontWeight="200" mt={4}>Latest Conversions</Typography>
        <AlignItemsList/>
      </Box>

        
    </Box>
  )
}

export default Rightbar
