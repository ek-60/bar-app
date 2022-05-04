import React from 'react'
import { Box } from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OrderLongDrink from './Orders/OrderLongDrink'

export default function LongDrink() {

  return (
    <div className='LongDrink' id='longDrinks'>
      <Box sx={{ 
        flexGrow: 1, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' }}>
        <Card sx={{ maxWidth: 500 }}>
          {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lonkerot
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Orginal Long Drink
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <OrderLongDrink />
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Orginal Long Drink
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Orginal Long Drink
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Orginal Long Drink
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}
