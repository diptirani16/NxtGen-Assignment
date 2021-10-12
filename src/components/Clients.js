import React, { Component } from 'react';
import '../Clients.css';
import { Typography, Container, Card, CardContent, Avatar, CardHeader } from '@mui/material';

class Clients extends Component {
    render() {
        return (
            <div className="container">
                <Container maxWidth="sm">
                    <Typography variant="h4" style={{ fontWeight: 'bolder', letterSpacing: '1px' }} component="div" gutterBottom>
                        What say our clients about our awesome service
                    </Typography>
                    <Typography variant="body2" style={{ letterSpacing: '1px', marginTop: '4vh' }} gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                </Container>
                <Container maxWidth="md">
                    <div style={{ display: 'flex', marginTop: '5vw', marginLeft: '5vw' }}>
                        <Card sx={{ maxWidth: 350 }}>
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <CardHeader avatar={<Avatar alt="profile" sx={{ bgcolor: 'red' }} >M</Avatar>} />
                            </div>
                            <CardContent>
                                <Typography variant="subtitle2" gutterBottom component="div">
                                    <b>Michael Jackson</b>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="caption" display="block" gutterBottom>
                                    CEO Data strategies
                                </Typography>

                                <Typography variant="body2" gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 350, marginLeft: '1vw' }}>
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <CardHeader avatar={<Avatar alt="profile" sx={{ bgcolor: 'green' }} >K</Avatar>} />
                            </div>
                            <CardContent>
                                <Typography variant="subtitle2" gutterBottom component="div">
                                    <b>Katherine Langford</b>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="caption" display="block" gutterBottom>
                                    CEO Data strategies
                                </Typography>

                                <Typography variant="body2" gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Clients;