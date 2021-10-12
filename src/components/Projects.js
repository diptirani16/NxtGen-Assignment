import React, { Component } from 'react';
import image2 from '../assets/undraw_Organizing_projects_0p9a.svg';
import { Grid, Container, Typography, Button } from '@mui/material';

class Projects extends Component {
    render() {
        return (
            <>
                <Container maxWidth="lg">
                    <Grid container spacing={2} style={{ margin: '10% 0' }}>
                        <Grid item lg={6}>
                            <img src={image2} alt="image2" loading="lazy" style={{ width: '70%' }} />
                        </Grid>
                        <Grid item lg={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Typography sx={{ mb: 3 }} variant="subtitle1" style={{ display: 'flex', alignItems: 'flex-end', marginTop: '2%', fontWeight: 'bolder', color: 'blue' }} gutterBottom>
                                10+ Recent Case
                            </Typography>
                            <Typography variant="h3" style={{ fontWeight: 'bolder', letterSpacing: '2px' }} component="div" gutterBottom>
                                #1 Data Analytics strategy projects
                            </Typography>
                            <Typography variant="body2" style={{ letterSpacing: '1px' }} gutterBottom component="div">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                            </Typography>
                            
                            <Button style={{ marginTop: '5vh', width: '12vw', borderRadius: '25px' }} variant="outlined" color="inherit">View Projects</Button>
                            
                        </Grid>
                        
                    </Grid>
                </Container>
            </>
        )
    }
}

export default Projects;