import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import SalePageWrapper from './SalePageWrapper'
import SaleTab from '../../components/SaleTabs'

export default function SalePage() {
  return (
    <SalePageWrapper>
      <CssBaseline />
      <Container maxWidth="lg">
        <SaleTab />
      </Container>
    </SalePageWrapper>
  )
}
