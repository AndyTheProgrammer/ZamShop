import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemComponent from "./ItemComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { Container, Typography } from "@material-ui/core";

import useStyles from "../style";

const ItemListing = () => {
  const classes = useStyles();

  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const getItems = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products?limit=10")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  const getCurrency = async () => {
      const result = await axios
      .get("http://api.exchangeratesapi.io/latest?access_key=42197ecdd09c577e37a6b6b0489e860d")
      .catch((err)=> {
          console.log("Err", err);
      })
      console.log("rates", result.data)
  }

  useEffect(() => {
    getItems();
    getCurrency();
  }, []);

  console.log("Products: ", products);
  return (
    <main>
      <div className={classes.container}>
        <Container maxWidth="100%">
          <Typography variant="h3" align="center" color="textPrimary">
            {" "}
            Welcome to ZamShop
          </Typography>
          <div className="ui grid container">
            <ItemComponent />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default ItemListing;
