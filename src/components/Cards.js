import React, { Component } from 'react';
import { Container, Card, CardContent, Typography, CardActions } from '@mui/material';
import { ArrowRightAlt } from '@mui/icons-material';

class Cards extends Component {
    render() {
        return (
            <>
                <Container maxWidth="lg" style={{ display: 'flex', height: '80vh', width: '70vw', alignItems: 'center' }}>
                    <Card sx={{ maxWidth: 300, marginTop: '8vh', bgcolor: "#e9e9f4" }}>
                        <CardContent>
                            <Typography variant="caption" fontSize="0.7rem" color="InfoText">
                                Solutions Visualization
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="h6" gutterBottom component="div">
                                Data Visualization Practices to Improve 
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <ArrowRightAlt style={{ fontSize: "3rem" }} />
                        </CardActions>

                    </Card>
                    <Card sx={{ maxWidth: 300, ml: 3, bgcolor: "#f4e9e9" }}>
                        <CardContent>
                            <Typography variant="caption" fontSize="0.7rem" color="InfoText">
                                Data Consulting
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="h6" gutterBottom component="div">
                                Consulting on invoice data capture 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ArrowRightAlt style={{ fontSize: "3rem" }} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 300, ml: 3, bgcolor: "#e2f1f2", marginTop: '8vh' }}>
                        <CardContent>
                            <Typography variant="caption" fontSize="0.7rem" color="InfoText">
                                Data Case Studies
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="h6" gutterBottom component="div">
                                Delivering the insights Data Case
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ArrowRightAlt style={{ fontSize: "3rem" }} />
                        </CardActions>
                    </Card>
                </Container>
            </>
        )
    }
}

export default Cards;