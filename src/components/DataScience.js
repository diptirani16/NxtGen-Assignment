import React, { Component } from 'react';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import image3 from '../assets/undraw_Designer_re_5v95.svg';
import image4 from '../assets/undraw_visionary_technology_33jy.svg';
import image5 from '../assets/undraw_Personal_goals_re_iow7.svg';

class DataScience extends Component {
    render() {
        return (
            <>
                <Container maxWidth="sm">
                    <div className="container">
                        <Typography variant="h4" style={{ fontWeight: 'bolder' }} component="div" gutterBottom>
                            Latest Data Science and our Company news
                        </Typography>
                        <Typography variant="body2" style={{ letterSpacing: '1px', marginTop: '3vh' }} gutterBottom component="div">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur.
                        </Typography>
                    </div>
                </Container>

                <Container maxWidth="md" style={{ display: 'flex', marginTop: '6vh' }}>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardMedia component="img" height="194" image={image3} alt="Paella dish" />
                        <CardContent>
                            <Typography variant="caption" color="error" fontSize="0.7rem">
                                Data Science
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="subtitle1" gutterBottom component="div">
                                Data Engineer, Data Analyst, Data Scientist
                            </Typography>
                            <Typography variant="caption" fontSize="0.6rem" color="InfoText">
                                May 21, 2001, 0 comments
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 250, ml: 4 }}>
                        <CardMedia component="img" height="194" image={image4} alt="Paella dish" />
                        <CardContent>
                            <Typography variant="caption" color="error" fontSize="0.7rem">
                                Data Science
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="subtitle1" gutterBottom component="div">
                                How Artificial Intelligence is changing the industry 
                            </Typography>
                            <Typography variant="caption" fontSize="0.6rem" color="InfoText">
                                May 21, 2001, 0 comments
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 250, ml: 4 }}>
                        <CardMedia component="img" height="194" image={image5} alt="Paella dish" />
                        <CardContent>
                            <Typography variant="caption" color="error" fontSize="0.7rem">
                                Data Science
                            </Typography>
                            <Typography sx={{ mt: 1 }} variant="subtitle1" gutterBottom component="div">
                                What are Service Graph Connectors in ServiceNow
                            </Typography>  
                            <Typography variant="caption" fontSize="0.6rem" color="InfoText">
                                May 21, 2001, 0 comments
                            </Typography> 
                        </CardContent>
                    </Card>
                </Container> 
            </>
        )
    }
}

export default DataScience;