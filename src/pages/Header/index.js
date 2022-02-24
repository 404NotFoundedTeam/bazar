import { Box } from '@mui/material'
import React from 'react'
import MainHeader from './MainHeader'
import TopHeader from './TopHeader'

function Header() {
  return (
    <Box component={"header"}>
        <TopHeader/>
        <MainHeader/>
    </Box>
  )
}

export default Header