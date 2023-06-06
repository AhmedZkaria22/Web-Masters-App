import { Grid } from '@mui/material'
import React from 'react'
import { icons } from '../../../Assets/AssetHelper'
import SectionHead from '../../Molecules/SectionHead/SectionHead';
import CategoriesFacts from '../../Molecules/CategoriesFacts/CategoriesFacts';
import './Categories.css';

function Categories() {
    const categoriesList = [
        {
            text1: "Graphic Design",
            text2: "22 Courses",
            path: icons.categories1
        },
        {
            text1: "Content Writing",
            text2: "10 Courses",
            path: icons.categories2
        },
        {
            text1: "Business",
            text2: "15 Courses",
            path: icons.categories3
        },
        {
            text1: "Marketing",
            text2: "10 Courses",
            path: icons.categories4
        },
        {
            text1: "Technology",
            text2: "10 Courses",
            path: icons.categories5
        },
        {
            text1: "HR & Leadership",
            text2: "15 Courses",
            path: icons.categories6
        }
    ]
  return (
    <Grid container sx={{ p: '5rem 8.4% 2rem' }} className='Categories'>
        <Grid item xs={12} sx={{ px: '7%' }}>
            <SectionHead headText={'Course Categories'} headComp={'h2'} text={"These companies release their own versions of the operating systems with minor changes, and yet always with the same bottom line."} />
        </Grid>
        <Grid container item xs={12} sx={{ px: '10%' }} className='categoriesFacts'>
            {
                categoriesList.map( (item, index) => {
                    return(
                        <CategoriesFacts item xs={10} sm={6} md={4} lg={3} key={index} path={item.path} text1={item.text1}  text2={item.text2} />
                    )
                } )
            }
        </Grid>
    </Grid>
  )
}

export default Categories