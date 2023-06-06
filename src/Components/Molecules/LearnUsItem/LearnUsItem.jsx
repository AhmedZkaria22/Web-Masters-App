import { Typography } from '@mui/material'
import React from 'react';
import './LearnUsItem.css';

function LearnUsItem({head, text}) {
  return (
    <div className='LearnUsItem'>
        <Typography variant={'h5'} component={'h5'} sx={{ mb: 1.25 }} className={`LearnUsItemTitle`}>{head}</Typography>
        <p className='textTypography'>{text}</p>
    </div>
  )
}

export default LearnUsItem