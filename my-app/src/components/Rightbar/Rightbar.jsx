import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box sx={
      {
        backgroundColor:"red",
        flex : "2",
        display: {xs:"none",sm:"block"}
      }
    }>
      <h1>This Right Bar</h1>
    </Box>
  )
}

export default Rightbar
