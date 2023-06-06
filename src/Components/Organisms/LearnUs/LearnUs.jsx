import { Grid } from '@mui/material'
import React from 'react'
import SectionHead from '../../Molecules/SectionHead/SectionHead'
import LearnUsItem from '../../Molecules/LearnUsItem/LearnUsItem'
import { images } from '../../../Assets/AssetHelper';
import './LearnUs.css';

function LearnUs() {
    const LearnUsData = [
        {
            head: '2000 Premium Courses',
            text: 'Choose from a vast collection of courses on all sorts of topics'
        },
        {
            head: 'Study Anytime & Anywhere',
            text: 'Our courses are completely flexible and accessible from any device, from anywhere'
        },
        {
            head: 'Support From Expert Instructors',
            text: 'You get tutor support with every course to guide you in every step of the way'
        }
    ]
  return (
    <Grid container sx={{ p: '5rem 8.4% 2rem' }} className='LearnUs' id='LearnUs'>
        <Grid item md={6} xs={12}>
            <img src={images.learn} alt='Learn us img' className='learnImg' />
        </Grid>
        <Grid item md={6} xs={12}>
            <SectionHead headText={'Find Out Why You Should Learn with us'} headComp={'h2'} text={"We offer accredited online courses that are available for anyone wishing to acquire new skills and gain professional certification to take their career to the next level."} />
            {
                LearnUsData.map( (item, index) => {
                    return(
                        <LearnUsItem head={item.head}  text={item.text} key={index} />
                    )
                } )
            }
        </Grid>
    </Grid>
  )
}

export default LearnUs