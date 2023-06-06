import { Grid, Typography } from '@mui/material';
import React from 'react';
import AtomButton from '../../Atoms/Button/Button'
import SectionHead from '../../Molecules/SectionHead/SectionHead';
import './Partners.css';
import PartnersGallery from './PartnersGallery';

function Partners() {
    const headText = 'Get certified with Your trusted Partners',
          headComp = 'h2',
          text = "We are a company who is best known for offering awarding body accredited courses for anyone who wishes to take their professional life to the next level.";
  return (
    <Grid container sx={{ p: '5rem 15.4% 2rem' }} className='Partners'>
        <Grid item lg={6} md={6} xs={12}>
            <SectionHead headText={headText} headComp={headComp} text={text} />
            <div className='sectionHead'>
                <Typography variant={headComp} component={'h2'} sx={{ mb: 3 }} className={`sectionHead-${headComp} sectionHeadTitle`}>{headText}</Typography>
                <PartnersGallery />
                {text && <p className='textTypography'>{text}</p>}
            </div>
            <AtomButton text={'View Courses'} variantType={'primary-btn'} />
        </Grid>
        <PartnersGallery item lg={6} md={6} xs={12} />   
    </Grid>
  )
}

export default Partners