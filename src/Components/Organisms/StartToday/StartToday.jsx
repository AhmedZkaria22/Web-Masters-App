import React from 'react'
import { Grid, Typography } from '@mui/material'
import './StartToday.css'

function StartToday() {
  return (
    <Grid container sx={{ p: '4rem calc(2rem + 17.7vw)' }} className='StartToday' id='StartToday'>
        <Grid item md={6} xs={12}>
            <Typography variant={'h2'} component={'h2'}>
                Bring your career on the right track.
            </Typography>
            <Typography variant={'h2'} component={'h2'} style={{fontWeight: 'bold'}}>
                Start today!
            </Typography>
        </Grid>
        
        <Grid item md={6} xs={12} sx={{ px: 5 }}>
            <a className='atomButton' href='#'>
                Get Started
            </a>
        </Grid>
    </Grid>
  )
}

export default StartToday