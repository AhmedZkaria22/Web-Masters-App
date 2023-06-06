import { Badge, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import AtomButton from '../../Atoms/Button/Button';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './CourseItem.css';

function CourseItem({img, text, badge1, badge2, index}) {
  return (
  <Card sx={{ maxWidth: 345 }} className='CourseItem'>
    <Box className='CourseItem-fig'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="165"
        image={img}
      />
      <Badge color="primary" className='CourseItem-fig-badge'>
        <StarIcon color="action" />
        <Typography component="span">{badge1}</Typography>
      </Badge>
    </Box>
    <CardContent className='CourseItem-content'>
      <Typography gutterBottom variant="h5" component="div">
        {text}
      </Typography>
      <Box className='CourseItem-content-wrap'>
        <Box className='CourseItem-content-badgesWrap'>
          <Badge color="primary" className='CourseItem-content-badge'>
            <PeopleIcon color="action" />
            <Typography component="span">{`${badge2} Students`}</Typography>
          </Badge>
          <Badge color="primary" className='CourseItem-content-badge'>
            <WorkspacePremiumRoundedIcon color="action" />
            <Typography component="span">CPD Accrediated</Typography>
          </Badge>
        </Box>
        <CardActions>
          <AtomButton text={'Add to card'} startIcon={<ShoppingCartOutlinedIcon />} />
        </CardActions>
      </Box>
    </CardContent>
  </Card>
  )
}

export default CourseItem