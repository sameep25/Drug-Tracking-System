import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

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
          <img style={{ width: '48px' }} src='/img/NcbLogo.png' alt="Ncb" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}

export default Manufacture