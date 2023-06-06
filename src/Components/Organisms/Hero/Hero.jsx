import { Box, Grid } from '@mui/material'
import React from 'react';
import SectionHead from '../../Molecules/SectionHead/SectionHead';
import CategoriesFacts from '../../Molecules/CategoriesFacts/CategoriesFacts';
import './Hero.css';
import { icons, images } from '../../../Assets/AssetHelper';
import AtomForm from '../../Molecules/Form/AtomForm';

function Hero() {
  return (
    <Grid container sx={{ p: '8rem 0% 2rem 8.4%' }} className='Hero' id='Hero'>
        <Grid item md={5} xs={12} className='heroContent'>
            <SectionHead headText={'Engaging & Accessible Online Courses For All'} headComp={'h1'} text={"We offer a range of excellent training and certification courses suitable for everyone and anywhere."} />
            <AtomForm placeHolder={'Search For Courses'} btnText={'Search'} type={'header'} />
        </Grid>
        <Grid item md={7} xs={12} className='heroFacts'>
          <Box className='heroFacts-item'>
            <CategoriesFacts path={icons.courses} text1={'300 +'}  text2={'Interactice Courses'} />
          </Box>
          <Box className='heroFacts-item'>
            <CategoriesFacts path={icons.student} text1={'2K +'}  text2={'Actice Students'} />
          </Box> 
          <img src={images.hero} alt='hero image' />
        </Grid>    
        <Grid item xs={12} sx={{ alignItems: 'center', mt: '2rem' }} className='heroSmForm'>
            <AtomForm placeHolder={'Search For Courses'} btnText={'Search'} type={'header'} />
        </Grid>
    </Grid>
  )
}

export default Hero