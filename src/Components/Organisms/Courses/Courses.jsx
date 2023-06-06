import { Grid } from '@mui/material'
import React from 'react'
import AtomButton from '../../Atoms/Button/Button'
import SectionHead from '../../Molecules/SectionHead/SectionHead'
import CoursesSlider from './CoursesSlider'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import './Courses.css'

function Courses() {
  return (
    <Grid container sx={{ p: '5rem 13.5% 2rem' }} className='Courses' id='Courses'>
        <Grid container alignItems={'center'} sx={{ p: '0rem 2%' }}>
            <Grid item md={12} lg={6}>
                <SectionHead headText={'Our Courses'} headComp={'h2'} text={"Don't let go of this opportunity to see how you can upgrade your skill-set and career. Learn from 300+ quality online courses"} />
            </Grid>
            <Grid item md={12} lg={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <AtomButton text={'View Courses'} variantType={'outlined-primary-btn'} endIcon={< ChevronRightRoundedIcon />} />
            </Grid>
        </Grid>
        <Grid item xs={12} sx={{ p: '0rem 3%' }} className='coursesWrap'> 
          <CoursesSlider />
        </Grid>
    </Grid>

  )
}

export default Courses