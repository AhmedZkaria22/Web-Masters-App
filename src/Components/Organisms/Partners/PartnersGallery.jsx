import { Box, Grid } from '@mui/material';
import React from 'react';
import { images } from '../../../Assets/AssetHelper';
import './Partners.css';

function PartnersGallery({...props}) {
  return (
    <Grid className='partnersWrap' {...props}>
        <Box className='partnersWrap-item'>
            <img src={images.partner1} alt="partner1" />
        </Box>
        <Box className='partnersWrap-item'>
            <img src={images.partner2} alt="partner2" />
        </Box>
        <Box className='partnersWrap-item'>
            <img src={images.partner3} alt="partner3" />
        </Box>
    </Grid> 
  )
}

export default PartnersGallery