import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import RatingSIze from '../rating'
import { Box } from '@mui/system'
import { FaPlus } from 'react-icons/fa'
import { Grid, IconButton } from '@mui/material'

export default function MainCard({ data }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ width: '100%', mt: 2, boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px' }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={data.img}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {data.name}
          </Typography>

          <RatingSIze score={data.score} />
          <Box
            component="div"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'between',
              alignItems: 'center',
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography color="primary" variant="body1">
                {data.price}$
              </Typography>
              <IconButton size="small" color="primary" variant="outlined">
                <FaPlus />
              </IconButton>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
