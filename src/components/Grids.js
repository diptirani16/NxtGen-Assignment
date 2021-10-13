import React, { Component } from 'react';
import { Container, Paper, Typography } from '@mui/material';

class Grids extends Component {
    render() {
        return (
            <>
                <Container maxwidth="md" style={{ display: 'flex', height: '80vh', width: '70vw', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Paper elevation={0} style={{ backgroundColor: '#f1f0f0', textAlign: 'center'  }}>
                        <Typography variant="h4" style={{ fontWeight: 'bolder', color: 'red' }}>
                            +15k
                        </Typography>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bolder' }}>
                            Successful work
                        </Typography>
                    </Paper>
                    <Paper elevation={0} style={{ backgroundColor: '#f1f0f0', textAlign: 'center'  }}>
                        <Typography variant="h4" style={{ fontWeight: 'bolder', color: 'blue' }}>
                            07%
                        </Typography>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bolder' }}>
                            Increase in upgrade conversion 
                        </Typography>
                    </Paper>
                    <Paper elevation={0} style={{ backgroundColor: '#f1f0f0', textAlign: 'center'  }}>
                        <Typography variant="h4" style={{ fontWeight: 'bolder', color: 'black' }}>
                            +40k
                        </Typography>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bolder' }}>
                            Data Management
                        </Typography>
                    </Paper>

                </Container>
            </>
        )
    }
}

export default Grids;