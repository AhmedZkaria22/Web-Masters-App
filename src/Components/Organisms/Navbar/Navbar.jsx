import { AppBar, Box, Divider, Drawer, Grid, IconButton, List, ListItem, Toolbar } from '@mui/material'
import React from 'react'
import AtomButton from '../../Atoms/Button/Button'
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { images } from '../../../Assets/AssetHelper';

function Navbar() {
  const navButtons = [
    {
      text: 'Cources',
      href: 'Courses'
    },
    {
      text: 'Student ID-Card',
      href: 'LearnUs'
    },
    {
      text: 'Contact',
      href: 'Footer'
    },
    {
      text: 'Login',
      href: 'StartToday'
    }
  ]
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Grid container item sm={'auto'} sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        <Grid item sm={6}>
          <img src={images.logo} alt='imgLogo' />
        </Grid>
      </Grid>
      <Divider />
      <List>
        {navButtons.map((item, index) => (
          <ListItem key={index} disablePadding>
            <AtomButton text={item.text} key={index} dataLink={true} dataHref={`#${item.href}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container sx={{
            p: '1rem 2rem',
            justifyContent: {sm: 'center', md: 'space-between'},
            display: { xs: 'none', sm: 'flex' }
          }}
          className=''          
          >
            <Grid item sm={'auto'} sx={{ display: 'flex', justifyContent: {sm: 'center', md: 'start'} }}>
              <Grid item sm={8}>
                <img src={images.logo} alt='imgLogo' style={{ maxWidth: '100%' }} />
              </Grid>
            </Grid>
            <Grid item sm={'auto'} className='buttonsWrap'>
                {navButtons.map((btn, index) => (
                  <AtomButton text={btn.text} key={index} dataLink={true} dataHref={`#${btn.href}`} />
                ))}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          className='navbar-mobile'
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar