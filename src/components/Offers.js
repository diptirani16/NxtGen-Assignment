import React, { Component } from 'react';
import { Container, Typography, Card, CardContent, Button, CardHeader, Avatar, CardActions } from '@mui/material';
import { EventNote, PieChart, EmojiObjects, AutoStories, ArrowRightAlt } from '@mui/icons-material';

class Offers extends Component {
    render() {
        return (
            <>
                <Container maxWidth="sm">
                    <div className="container">
                        <Typography variant="h4" style={{ fontWeight: 'bolder' }} component="div" gutterBottom>
                            Our offer Data Science and Analytics Services
                        </Typography>
                        <Typography variant="body2" style={{ letterSpacing: '1px', marginTop: '3vh' }} gutterBottom component="div">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur.
                        </Typography>
                    </div>
                </Container>

                <Container maxWidth="lg" style={{ display: 'flex', marginTop: '6vh' }}>
                    <Card sx={{ maxWidth: 250, ml: 4 }}>
                        <CardHeader avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    <EventNote />
                                </Avatar>
                            } />
                        <CardContent>
                            <Typography variant="caption" fontSize="0.7rem" color="InfoText">
                                Start your AI
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="subtitle1" gutterBottom component="div">
                                Data strategies to Start your AI  
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <ArrowRightAlt style={{ fontSize: "3rem" }} />
                        </CardActions>

                    </Card>
                    <Card sx={{ maxWidth: 250, ml: 2, bgcolor: "#f4e9e9" }}>
                        <CardHeader avatar={
                                <Avatar sx={{ bgcolor: 'green' }} aria-label="recipe">
                                   <PieChart />
                                </Avatar>
                            } />
                        <CardContent>
                            <Typography variant="caption" fontSize="0.7rem" color="InfoText">
                                Data Analysis
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="subtitle1" gutterBottom component="div">
                                Digital Data Consulting for Science lab
                            </Typography>
                            <CardActions>
                                <ArrowRightAlt style={{ fontSize: "3rem" }} />
                            </CardActions>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 250, ml: 2, bgcolor: "#f4e9e9" }}>
                        <CardHeader avatar={
                                <Avatar sx={{ bgcolor: 'violet' }} aria-label="recipe">
                                    <EmojiObjects />
                                </Avatar>
                            } />
                        <CardContent>
                            <Typography variant="caption" fontSize="0.7rem" color="InfoText">
                                Data Intelligence
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="subtitle1" gutterBottom component="div">
                                Bussiness Intelligence for Data Science
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ArrowRightAlt style={{ fontSize: "3rem" }} />
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 250, ml: 2, bgcolor: "#f4e9e9" }}>
                        <CardHeader avatar={
                                <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                                    <AutoStories />
                                </Avatar>
                            } />
                        <CardContent>
                            <Typography variant="caption" fontSize="0.7rem" color="InfoText">
                                Machine Learning
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="subtitle1" gutterBottom component="div">
                                Machine Learning is a method Data Analysis
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ArrowRightAlt style={{ fontSize: "3rem" }} />
                        </CardActions>
                    </Card>
                </Container>
                <Container maxWidth="sm">
                <div className="container">
                    <Button style={{ marginTop: '5vh', width: '12vw', borderRadius: '25px' }} variant="contained" color="primary">More Services</Button>
                </div>
                </Container>

            </>
        )
    }
}

export default Offers;