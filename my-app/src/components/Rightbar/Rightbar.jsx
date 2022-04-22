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
      <Box sx={{
        position:"fixed"
      }}>
        <h1>This Right Bar</h1>
      </Box>
    </Box>
  )
}

export default Rightbar
