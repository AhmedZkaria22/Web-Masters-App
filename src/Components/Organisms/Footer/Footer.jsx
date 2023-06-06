import { Grid, Typography } from '@mui/material'
import React from 'react'
import { icons, images } from '../../../Assets/AssetHelper'
import AtomForm from '../../Molecules/Form/AtomForm';
import './Footer.css'


function Footer() {
    const footerLinks = {
        contact: [
            { text: icons.facebook, href: '#' },
            { text: icons.linkedin, href: '#' },
            { text: icons.twitter, href: '#' }
        ],
        help: [
            { text: 'Home', href: '#Hero' },
            { text: 'About', href: '#' }, 
            { text: 'All Courses', href: '#Courses' },
            { text: 'Events', href: '#' },
            { text: 'Terms of use', href: '#' },
            { text: 'Contact', href: '#Footer' }
        ],
        important: [
            { text: 'Free Courses', href: '#' },
            { text: 'Our Blogs', href: '#' }
        ],
        privacy: [
            { text: 'Terms of conditions',  href: '#'},
            { text: 'Policies', href: '#'},
            { text: 'Sitemap',  href: '#'}
        ]
    };
  return (
    <Grid container sx={{ p: '4rem 10%' }} className='Footer' id='Footer'>
        <Grid item md={3} xs={12}>
            <img src={images.logo} alt='footer-logo' className='footer-logo'/>
            <p className='textTypography'> 3645 Maud Street, Newcastle Delaware-19720 </p>
            <div className="footer-contact-links">{
                footerLinks.contact.map( (lnk, l) => {
                    return  <a href={lnk.href} key={l}> <img src={lnk.text}  alt={`${lnk.text}-icon`} /> </a>
                } )
            }</div>
        </Grid>
        <Grid item md={2} xs={12}>
            <Typography variant={'h6'} component={'h6'} sx={{ mb: 3 }}> Help Links </Typography>
            <div className="footer-help-links">{
                footerLinks.help.map( (lnk, l) => {
                    return  <a href={lnk.href} key={l}>{lnk.text}</a>
                } )
            }</div>
        </Grid>
        <Grid item md={2} xs={12}>
        <Typography variant={'h6'} component={'h6'} sx={{ mb: 3 }}> Important Links </Typography>
            <div className="footer-important-links">{
                footerLinks.important.map( (lnk, l) => {
                    return  <a href={lnk.href} key={l}>{lnk.text}</a>
                } )
            }</div>
        </Grid>
        <Grid item md={3} xs={12}>
            <Typography variant={'h6'} component={'h6'} sx={{ mb: 3 }}> Contact Us </Typography>
            <AtomForm placeHolder={'Enter Your Number'} btnText={'Request a Callback'} type={'footer'} />
        </Grid>

        <Grid container item>
            <Grid item md={6} xs={12}>
                <div className="footer-privacy-links">{
                    footerLinks.privacy.map( (lnk, l) => {
                        return  <a href={lnk.href} key={l}>{lnk.text}</a>
                    } )
                }</div>
            </Grid>
            <Grid item md={6} xs={12}>
                <p className='textTypography'> Copywrite <span>©</span> 2021 Web Masters, Inc. </p>                
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Footer