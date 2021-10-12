import React, { Component } from 'react';
import { Grid, Container, Typography, Paper, TextField, Button } from '@mui/material';

class Quotes extends Component {
    render() {
        return (
            <div>
                <Container maxWidth="lg">
                    <Grid container spacing={6} style={{ margin: '6% 11%' }} >
                        <Grid item lg={4} >
                            <Typography variant="h3" style={{ fontWeight: 'bolder', letterSpacing: '2px', marginTop: '4vh' }} component="div" gutterBottom>
                                Get Ready to Started.
                                It's Free & Very Easy
                            </Typography>
                            <Typography variant="body2" style={{ letterSpacing: '1px', marginTop: '5vh' }} gutterBottom component="div">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur.
                            </Typography>
                        </Grid>
                        <Grid item lg={8} >
                            <Paper sx={{ maxWidth: 300, padding: '8vh 2vw' }} style={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h5" gutterBottom component="div">
                                    <b>Subscribe for Quote</b>
                                </Typography>
                                <TextField style={{ marginTop: '3vh' }} type="text" label="Name" defaultValue="Mahfuj Riad" variant="standard" />
                                <TextField style={{ marginTop: '5vh' }} type="password" label="Password" defaultValue="Mahfuj Riad" variant="standard" />
                                <Button style={{ marginTop: '5vh' }} variant="contained" color="primary">Get a Quote</Button>
                                <Typography style={{ marginTop: '3vh' }} variant="caption" gutterBottom>
                                    Let's do great things together Free <b style={{ color: 'red' }}>Sign up</b>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Quotes;