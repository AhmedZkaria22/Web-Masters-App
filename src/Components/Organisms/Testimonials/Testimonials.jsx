import { Grid, Typography } from '@mui/material'
import React from 'react'
import TestimonialsSlider from './TestimonialsSlider'
import './Testimonials.css';
import { icons, images } from '../../../Assets/AssetHelper';

function Testimonials() {
  return (
    <Grid container sx={{ p: '3rem 8.4% 12rem' }} className='Testimonials'>
        <Grid item lg={6} sm={8} xs={10}>
            <div className='sectionHead'>
                <Typography variant={'h2'} component={'h2'} sx={{ mb: 3 }} className={`sectionHead-h2 sectionHeadTitle`}>
                  We Value Our Students <img src={icons.comma} className='commaDown' alt='comma down' /> <p>Let<img src={icons.comma} className='commaUp' alt='comma up' />s</p> Hear from them
                </Typography>
            </div>
            
            <TestimonialsSlider />

            <img src={images.person1} alt="person1" className='person1' />
            <img src={images.person2} alt="person2" className='person2' />
            <img src={images.person3} alt="person3" className='person3' />
            <img src={images.person4} alt="person4" className='person4' />
            <img src={images.person5} alt="person5" className='person5' />
            <img src={images.person6} alt="person6" className='person6' />
            <img src={images.rectangle1} alt="rectangle1" className='rectangle1' />
            <img src={images.rectangle2} alt="rectangle2" className='rectangle2' />
        </Grid>
    </Grid>
  )
}

export default Testimonials