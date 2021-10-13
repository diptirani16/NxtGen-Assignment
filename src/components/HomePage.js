import React from 'react';
import { Component } from 'react';
import { Container, Box, AppBar, Toolbar, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Check } from '@mui/icons-material'
import logo from '../assets/logo.png';
import image1 from '../assets/undraw_feeling_proud_qne1.svg';
import '../HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <>
                <Container fixed>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" color="transparent" style={{ boxShadow: '0px 0px' }}>
                            <Toolbar>
                                <img src={logo} alt="logo" loading="lazy" style={{ width: '7%' }} />
                                <Box sx={{ flexGrow: 0.1 }} />
                                <List component="nav" aria-label="secondary mailbox folder" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <ListItemButton >
                                        <ListItemText primary="Home" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="About" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Services" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Page" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Cases" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Blog" />
                                    </ListItemButton>
                                </List>
                                <Box sx={{ flexGrow: 1 }} />
                                <List component="nav" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <ListItemButton variant="contained" style={{ borderRadius: '25px', backgroundColor: 'black', color: 'white' }}>Get in Touch</ListItemButton>
                                    <ListItemButton>Sign in</ListItemButton>
                                </List>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Grid container spacing={2} style={{ margin: '5% 11%' }}>
                        <Grid item lg={6} md={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Typography variant="h3" style={{ fontWeight: 'bolder', letterSpacing: '2px' }} component="div" gutterBottom>
                                Data Analytics solutions for startup Agency
                            </Typography>
                            <Typography variant="body2" style={{ letterSpacing: '1px' }} gutterBottom component="div">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                            </Typography>
                            <Typography variant="caption" style={{ display: 'flex', alignItems: 'flex-end', marginTop: '2%' }} gutterBottom>
                                <Check size="small" />Learn with our comprehensive curriculum and exprienced
                            </Typography>
                            <Typography variant="caption" style={{ display: 'flex', alignItems: 'flex-end' }} gutterBottom>
                                <Check size="small" />Step into the world of practical data science.
                            </Typography>

                            <List component="nav" style={{ display: 'flex', flexDirection: 'row' }}>
                                <ListItemButton variant="contained" style={{ borderRadius: '25px', backgroundColor: 'blue', color: 'white', marginTop: '5vh' }}>Learn more</ListItemButton>
                                <ListItemButton color="transparent" style={{ color: 'red', fontSize: '0.6em', width: '30vw', marginTop: '5vh' }}>Learn about our latest work intro</ListItemButton>
                            </List>
                        </Grid>
                        <Grid item lg={6} md={4}>
                            <img src={image1} alt="image1" loading="lazy" style={{ width: '70%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}

export default HomePage;