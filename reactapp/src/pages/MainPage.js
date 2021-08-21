import './App.css';
import React, { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import styles from '../styles.js'

export default function MainPage() {


    //const paperStyle={padding :20,height:'40vh', marginLeft:"35vw"} 
    //const paperItemStyle={height:'4vh', marginLeft:"36.5vw",marginTop:"-30vh",marginRight:"2vh",width:"52vh"} 
    const [link, setLink] = useState('');
    let url = '/';
    let inter = 'paste?ur=';

    const [resp, setResp] = useState('');
    var send = () => {
        console.log("kek");
        axios.post(url + inter + link)
            .then(response => setResp(response.data))
            .catch(error => console.log(error));
    };

    /*
  const submitLink = (event) => {
      const myLink = link;

      console.log(link);

      event.preventDefault();
      
      axios.get('http://127.0.0.1:5000/'+link).then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
  };
      */



    const useStyles = makeStyles(styles);
    const classes = useStyles();


    
    //const avatarStyle={backgroundColor:'#1bbd7e'}
    //const btnstyle={margin:'8px 0'}
    return (
        <Grid container direction="column" xs={11} sm={11} md={11} lg={5} xl={8}
            className={classes.root}
            spacing={2}
            alignItems="center"
        >
            <Grid item className={classes.link} >
                <Paper>
                    <TextField
                        label='Product URL'
                        placeholder='Enter URL'
                        value={link}
                        onChange={(event) => { setLink(event.target.value); }}
                        fullWidth required />

                </Paper>

            </Grid>
            <Grid item className={classes.buttons} >
                <Paper >
                    <Button
                        type='submit'
                        color='primary'
                        variant="contained"
                        onClick={send}
                        fullWidth>Enter Link
          </Button>
                </Paper>

            </Grid>

            <Grid item className={classes.buttons} >
                <Paper >
                    <Button component={Link} to="/Products"
                        type='submit'
                        color='secondary'
                        variant="contained"
                        fullWidth style={{ color: "white", backgroundColor: "#FFE033" }} >Products</Button>
                </Paper>
            </Grid>
        </Grid>

    )
}
