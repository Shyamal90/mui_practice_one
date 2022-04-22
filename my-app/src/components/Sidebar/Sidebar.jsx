import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box sx={
      {
        backgroundColor:"red" ,
        flex : "1" ,
        display: {xs:"none",sm:"block"}
      }
    }>
      <h1>This is side bar</h1>
    </Box>
  )
}

export default Sidebar
