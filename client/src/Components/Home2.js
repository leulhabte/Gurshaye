import React from 'react';
import useStyles from '../Styling'
import {Container, Typography, Grid, Card, CardActionArea, CardActions, CardContent, IconButton, Button, CardHeader} from '@material-ui/core';
import {Menu, Info, ContactMail, Create, Airplay, InsertChart, Settings, Person, ExitToApp, BorderColor, Dashboard} from '@material-ui/icons';

const Home = ()=>{

    const classes = useStyles();

    return(
        <div>
           <Container className={classes.container} maxWidth='xl'>
               <Container className={classes.overlay}></Container>
                <Typography component="div" className={classes.title}>
                    <Typography variant='h3' className={classes.mainTitle}>Welcom To Gurshaye</Typography>
                    <Typography variant='h6' className={classes.subTitle}>Betting tip provider</Typography>
                </Typography>
           </Container> 
           <div className={classes.cardMain}>
                <Grid container spacing={2} className={classes.inputHolder}>
                    <Grid item md={3} sm={5}>
                        <Card>
                            <CardHeader
                                title='Gurshaye Provides'
                                className={classes.cardHeader}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h6' component='h4'>Insert Tip<IconButton className={classes.cardIcon}><Create/></IconButton></Typography>
                                    <Typography variant='body2' component='p'>
                                        To provide the user with a best reliable
                                        betting tips of different leagues from 
                                        around the world
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color="primary">Get Started</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={5}>
                        <Card>
                            <CardHeader
                                title='Gurshaye Provides'
                                className={classes.cardHeader2}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h6' component='h4'>View Tip<IconButton className={classes.cardIcon}><Airplay/></IconButton></Typography>
                                    <Typography variant='body2' component='p'>
                                        Allows you to view the betting tips
                                        that are inserted in a clear, sorted and managed way
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color="primary">Get Started</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={5}>
                        <Card>
                            <CardHeader
                                title='Gurshaye Provides'
                                className={classes.cardHeader3}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h6' component='h4'>Manage Tips<IconButton className={classes.cardIcon}><Settings/></IconButton></Typography>
                                    <Typography variant='body2' component='p'>
                                        Allows you to manage the betting tips
                                        inserted easily and efficiently in a more
                                        flexible way 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color="primary">Get Started</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={3} sm={5}>
                        <Card>
                            <CardHeader
                                title='Gurshaye Provides'
                                className={classes.cardHeader4}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant='h6' component='h4'>Statistics<IconButton className={classes.cardIcon}><InsertChart/></IconButton></Typography>
                                    <Typography variant='body2' component='p'>
                                        Provides you with analytical data of 
                                        the betting predictions in a summarized
                                        and graphical way
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color="primary">Get Started</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid> 
           </div>
        </div>
    );
}

export default Home;