import React from 'react';
import axios from 'axios'
import useStyles from '../../Styling';
import {Grid, Typography, Paper, Card, CardContent, CardHeader, Container, IconButton} from '@material-ui/core'
import {DoneAll, HighlightOff, Grain} from '@material-ui/icons'

const StatHeader = ()=>{

    const [correct, setData] = React.useState(0);
    const [incorrect, setDataIn] = React.useState(0);
    const callApi = ()=>{
        axios.get('http://localhost:8000/overall')
        .then(res=>{
            setData(res.data.correct);
            setDataIn(res.data.Incorrect)
        });
    }

    const classes = useStyles();

    React.useEffect(()=>{callApi()},[])

    return(
        <div>
            <Container maxWidth='xl'>
                <Typography className="mt-5 mb-3" variant='h6'>Summary</Typography>
                <Grid container spacing={2} className={classes.subHeading}>
                    <Grid item md={4} xs={12}>
                    <Paper className='d-flex flex-column'>
                            <Paper className={classes.paperHeading}>
                                <div className="d-flex">
                                    <DoneAll className="ml-2"/>
                                    <Typography component='h4' className="ml-5">Correct Predictions</Typography>
                                </div>
                            </Paper>
                            <Card>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}className={classes.correctCounter}>
                                        <Typography variant='h3'>{correct}</Typography>
                                    </Grid>
                                    <Grid item xs={9}><p>Gurshaye Statistics Total of Correct 
                                        Predictions</p></Grid>
                                </Grid>
                            </CardContent>
                            </Card>
                    </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <Paper className='d-flex flex-column'>
                            <Paper className={classes.paperHeading3}>
                                <div className="d-flex">
                                    <HighlightOff className="ml-2"/>
                                    <Typography component='h4' className="ml-5">Incorrect Predictions</Typography>
                                </div>
                            </Paper>
                            <Card>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}className={classes.correctCounter}>
                                        <Typography variant='h3'>{incorrect}</Typography>
                                    </Grid>
                                    <Grid item xs={9}><p>Gurshaye Statistics Total of Incorrect 
                                        Predictions</p></Grid>
                                </Grid>
                            </CardContent>
                            </Card>
                    </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <Paper className='d-flex flex-column'>
                            <Paper className={classes.paperHeading3} style={{backgroundColor: 'rgb(128, 188, 49)'}}>
                                <div className="d-flex">
                                    <Typography component='h4' className="ml-5">Statistics Menu</Typography>
                                </div>
                            </Paper>
                            <Card>
                            <CardContent style={{paddingBottom: '2.4rem'}}>
                                <Typography variant='h5'>Select Incorrect Tips <IconButton><Grain/></IconButton></Typography>
                            </CardContent>
                            </Card>
                    </Paper>
                    </Grid>
                </Grid> 
            </Container>
                         
        </div>
    );
}

export default StatHeader;