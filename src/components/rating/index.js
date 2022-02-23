import * as React from 'react'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

export default function RatingSIze({ score }) {
  return (
    <Stack spacing={1}>
      <Rating size="small" defaultValue={score} readOnly />
    </Stack>
  )
}
