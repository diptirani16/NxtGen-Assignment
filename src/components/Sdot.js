import { Container, Typography, Grid, Button } from '@mui/material';
import React, { Component } from 'react';
import '../Clients.css';
import image2 from '../assets/undraw_Organizing_projects_0p9a.svg';

class Sdot extends Component {
    render() {
        return (
            <>
                <Container maxWidth="sm">
                    <div className="container">
                        <Typography variant="h4" style={{ fontWeight: 'bolder' }} component="div" gutterBottom>
                            Why Data Science Sdot Data Science for Everyone
                        </Typography>
                    </div>
                </Container>
                <Container maxWidth="md">
                    <Grid container spacing={2} style={{ margin: '8% 0' }}>
                        <Grid item lg={6} md={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Typography variant="h5" style={{ fontWeight: 'bolder' }} component="div" gutterBottom>
                                Data Science sdot is one of the leading platforms providing data science solution
                            </Typography>
                            <Typography variant="body2" style={{ letterSpacing: '1px', marginTop: '3vh' }} gutterBottom component="div">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                            </Typography>

                            <Typography variant="body2" style={{ letterSpacing: '1px', marginTop: '3vh' }} gutterBottom component="div">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                            </Typography>

                            <Button style={{ marginTop: '6vh', width: '12vw', borderRadius: '25px' }} variant="outlined" color="inherit">Learn More</Button>

                        </Grid>
                        <Grid item lg={6} md={4}>
                            <img src={image2} alt="image2" loading="lazy" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}

export default Sdot;