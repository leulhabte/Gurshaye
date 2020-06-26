import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import {IconButton} from '@material-ui/core';
import axios from 'axios';
import Loading from './Loading';
import useStyles from '../../Styling';
import {Equalizer, AddCircle, Cancel} from '@material-ui/icons';
import {Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper, Container, Grid, Typography, Tooltip, Checkbox} from '@material-ui/core'


const InTable = ()=>{

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [check, setCheck] = React.useState(false);
    const [loadingProgress, setProgress] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [ids, setIds] = React.useState([])
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const handleClick = ()=>{
        if(check === true){
            var x;
            if(ids.length > 0){
                setProgress(true);
                setSuccess(false);
                for(x of ids){
                    console.log(x);
                    callApi(x)
                }
            }

            console.log(ids)
        }

    }

    const callApi = (id)=>{
        axios.post('http://localhost:8000/incorrect/'+id)
        .then(res=>{
            setProgress(false);
            setSuccess(true);
            console.log(res.data);
        });
    }

    const getList = ()=>{
        axios.get('http://localhost:8000/unchecked')
        .then(res=>{
            setData(res.data.tip);
            if(res.data.tip.length === 0){
                setCheck(false);
            }else{
                setCheck(true)
            }
            setLoading(true)
            console.log(res.data)
        })
    }


    React.useEffect(()=>{
        getList();
    },[])
  
    return (
        <div>
            {loading ? 
            <Container maxWidth='xl' className={classes.tableHolder}>
                <Grid container spacing={3} className={classes.subHeading}>
                    <Grid item md={4} xs={12}>
                        <Paper className={classes.paperHeading}>
                            <div className="d-flex">
                                <Equalizer className="ml-2"/>
                                <Typography component='h4' className="ml-5">Total Prediction</Typography>
                            </div>
                            <Typography component='h4' className="mr-4">{'totalCount'}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Paper className={classes.paperHeading2}>
                            <div className="d-flex">
                                <Equalizer className="ml-2"/>
                                <Typography component='h4' className="ml-5">All Predictions can be updated </Typography>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>               
                <TableContainer component={Paper} className={classes.tableContainer}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>Time</TableCell>
                            <TableCell className={classes.tableHead} align='center'>League</TableCell>
                            <TableCell className={classes.tableHead} align='center'>Date</TableCell>
                            <TableCell className={classes.tableHead} align='center'>Match</TableCell>
                            <TableCell className={classes.tableHead}>Tip</TableCell>
                            <TableCell className={classes.tableHead} align='center'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(data=>(
                            <TableRow key={data._id}>
                                <TableCell>{data.time.slice(11,16)}</TableCell>
                                <TableCell align='center'>{data.league}</TableCell>
                                <TableCell align='center'>{data.date.slice(0,10)}</TableCell>
                                <TableCell align='center'>{data.team1} vs {data.team2}</TableCell>
                                <TableCell>{data.tip}</TableCell>
                                <TableCell align='center'>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />                                     
                                    {/* <IconButton
                                        onClick={()=>{
                                            var flag= false;
                                            var x;
                                            for(x of ids){
                                                if(data._id === x){
                                                    flag = true;
                                                }
                                            }
                                            if(flag === false){
                                                setIds(ids.concat(data._id));
                                            }   
                                        }}
                                    ><AddCircle/></IconButton>
                                    <IconButton
                                        onClick={()=>{
                                            for(var i=0; i< ids.length; i++){
                                                if(ids[i] === data._id){
                                                    ids.splice(i, 1);
                                                }
                                            }                                            
                                        }}
                                    ><Cancel/></IconButton> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <Container maxWidth='xl' className={classes.fabHolder}>
                    <div className={classes.fabSub}>
                        <div className={classes.wrapper}>
                            <Tooltip
                                title='Submit'
                                arrow
                            >
                                <Fab
                                    color='primary'
                                    onClick={handleClick}
                                >
                                    {success ? <CheckIcon/> : <SaveIcon/>}
                                </Fab>
                            </Tooltip>


                            {loadingProgress && <CircularProgress size={60} color='secondary' className={classes.fabbtn}/>}
                        </div>                        
                    </div>

                </Container>

            </Container> 
            : <Loading/>}
               
        </div>
    );
}

export default InTable;