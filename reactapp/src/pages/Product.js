import styles from '../styles.js'
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core';
import axios from 'axios';



var Product = (props) => {

    const [data, setData] = useState('');
    
    let url='/';
    let inter ='paste?prod='
    useEffect( ()=>{
          axios.get(url+inter+props.props.id)
          .then(response=> setData(response.data))
          .catch(error=> console.log(error));
      },[]);
    

    console.log("IM in product2", data.id);
    const useStyles = makeStyles(styles);
    const classes = useStyles();


    //console.log("name", this.props.ProductName);


    return (
        <Grid container direction="column"
            className={classes.root}
            spacing={2}
            alignItems="center"
        >
            <Grid item className={classes.images} >
               
                    <div>
                        <img src={data.image} height="480px" width="480px"/>
                            
                        
                    </div>
               
            </Grid>
            <Grid item className={classes.buttons} >
            <Paper>
                    <div>
                        <h1>
                            {"PRODUCT ID:    "+data.id}
                        </h1>
                    </div>
                    </Paper>
            </Grid>
            <Grid item className={classes.buttons} >
            <Paper>
                    <div>
                        <h1>
                            {"Product Name:    "+data.ProductName}
                        </h1>
                    </div>
                    </Paper>
            </Grid>
            <Grid item className={classes.buttons} >
                <Paper>
                    <div>
                        <h1>
                            {"Price:   "+data.Price}
                        </h1>
                    </div>
                    </Paper>
            </Grid>

        </Grid>

    )
}
export default Product;