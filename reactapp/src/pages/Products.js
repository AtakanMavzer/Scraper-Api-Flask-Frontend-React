import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import styles from '../styles.js'
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import Product from './Product'
import { Button, BottomNavigation } from '@material-ui/core';

function Products() {

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [but, setBut] = useState('');
  const [clicked, setClick] = useState(true);

  let url = '/products';

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  var isclicked = true;
  const setLMAO = () => {

    isclicked = false;
    console.log("look", isclicked);

  }
  const example = [
    { "id": 1, "ProductName": "Brass or Silver Leaf Bookmark Set", "image": "https://i.etsystatic.com/12149676/r/il/b96248/2959017777/il_794xN.2959017777_t44r.jpg", "Price": "\u00a39.50" },
    { "id": 2, "ProductName": "Brass or Silver Leaf Bookmark Set", "image": "https://i.etsystatic.com/12149676/r/il/b96248/2959017777/il_794xN.2959017777_t44r.jpg", "Price": "\u00a39.50" }
  ]

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 180
    },
    {
      field: 'ProductName',
      headerName: 'Product Name',
      width: 800,
      editable: false,
    },
    {
      field: 'image',
      headerName: 'Image Link',
      width: 300,
      editable: false,
    },
    {
      field: 'Price',
      headerName: 'Price',
      width: 150,
      editable: false,
    },/*
    {
      field: "",
      headerName: "Go",
      disableClickEventBubbling: true,
      renderCell: () => {

        return <Button key={ass + 1} >Menu item 1</Button>

      }
    }*/
  ];

  console.log(but);
  /*
      return (
      <div>
        <DoneTodoProvider>
          {isPreview? 
            <TodoRemaining />
          :
            <ToDoDone />
          }
        </DoneTodoProvider>
        <Button onClick={() => setIsPreview(!isPreview)}>flip</Button>
       </div>
    );
    style={{ height: '100vh', width: '100%' }}
  */
  return (

    <div >

      {clicked ?
        <DataGrid className={classes.root}
          rows={data}
          columns={columns}
          pageSize={20}
          checkboxSelection
          onSelectionModelChange={itm => { setBut(data[itm - 1]); setClick(false) }}
        />
        :
        <Router>
          <Switch>

            <Route path="/Products" >
              <Product props={but} />
            </Route>
            
            
          </Switch>
        </Router>
      }
    </div>

    /*
     <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(usr => (
                <tr key={usr.id}>
                  <div>
                    {usr.id}
                  </div>
                </tr>
              ))
            }

          </tbody>
        </table>*/
  );
}
export default Products;