import { Typography } from '@mui/material'
import React from 'react';
import './SectionHead.css';

function SectionHead({headText, headComp, text}) {
  return (
    <div className='sectionHead'>
        <Typography variant={headComp} component={'h2'} sx={{ mb: 3 }} className={`sectionHead-${headComp} sectionHeadTitle`}>{headText}</Typography>
        {text && <p className='textTypography'>{text}</p>}
    </div>
  )
}

export default SectionHead