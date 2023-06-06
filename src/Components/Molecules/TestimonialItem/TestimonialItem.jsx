import { Typography } from '@mui/material'
import React from 'react'

function TestimonialItem({text, name, index}) {
  return (
    <div className={`TestimonialItem TestimonialItem-${index}`}>
        <p>{text}</p>
        <Typography variant={'h5'} component={'h5'}>- {name}</Typography>
    </div>
  )
}

export default TestimonialItem