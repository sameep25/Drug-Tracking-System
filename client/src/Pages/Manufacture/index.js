import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import {FaIndustry} from 'react-icons/fa'

const Manufacture = () => {
  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <FaIndustry size={"30"}/>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}

export default Manufacture