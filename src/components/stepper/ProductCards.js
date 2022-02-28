import { Button, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa'

export default function ProductCards({ data }) {
  const [dataP, setDataP] = useState(data)
  const [value, setValue] = useState(0)
  const remove = (id) => {
    const temp = Object.entries(dataP)

    const t = temp[0].filter((i) => i.id !== id)
    console.log(t)
    return setDataP(t)
  }
  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: 2,
        py: 1,
        background: '#fff',
        my: 3,
        borderRadius: '4px',
        boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)',
      }}
    >
      <Grid item xs={3} sx={{ bg: 'red' }}>
        <img src={dataP.img} width="100%" height="100%" alt={dataP.name} />
      </Grid>
      <Grid item xs={9}>
        <Box
          sx={{
            px: 1,
            py: 2,
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6">{dataP.name}</Typography>
          <IconButton
            onClick={() => remove(dataP.id)}
            aria-label="delete"
            color="error"
          >
            <FaTimes />
          </IconButton>
        </Box>
        <Box
          sx={{
            px: 1,
            py: 4,
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2">${dataP.price}*</Typography>
            <Typography variant="body2">{value}</Typography>
            <Typography variant="body1" sx={{ mx: 1 }} color={'error'}>
              ${value * dataP.price}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="outlined primary button group"
          >
            <>
              <Button
                variant="outlined"
                color="error"
                disabled={value <= 0}
                onClick={() => setValue(value - 1)}
                sx={{
                  minWidth: '0px',
                  px: '8px',
                  py: '0px',
                  svg: {
                    fontSize: '30px',
                    fontWeight: 'bold',
                  },
                }}
              >
                <FaMinus />
              </Button>

              <Typography
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: 1,
                }}
              >
                {value}
              </Typography>
            </>

            <Button
              variant="outlined"
              color="error"
              sx={{
                minWidth: '0px',
                px: '8px',
                py: '0px',
                svg: {
                  fontSize: '30px',
                  fontWeight: 'bold',
                },
              }}
              onClick={() => setValue(value + 1)}
            >
              <FaPlus />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
