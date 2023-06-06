import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react';
import './CategoriesFacts.css';

function CategoriesFacts({path, text1, text2, ...props}) {
  return (
    <Box as={Grid} {...props} className='categoriesFact'>
      <img
        src={path}
        alt="green iguana"
      />
      <Typography gutterBottom variant="h5" component="p">
        {text1}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {text2}
      </Typography>
    </Box>

  )
}

export default CategoriesFacts