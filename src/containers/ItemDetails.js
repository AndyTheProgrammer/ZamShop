import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBSpinner, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";
import useStyles from "./../style";

const ItemDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  console.log(product);
  const dispatch = useDispatch();
  const classes = useStyles();

  const getItemDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err ", err);
      });

    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== " ") getItemDetails();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);
  return (
    <div className={classes.root}>
      {Object.keys(product).length === 0 ? (
        <MDBSpinner role="status">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      ) : (
        <MDBContainer className="ui container">
          <div className="ui segment">
            <div className="ui two column stackable center aligned grid">
              <div className="middle aligned row">
                <div className="column lp">
                  <img className={classes.img2} alt={title} src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <MDBBtn rounded size="lg">
                    <div className="visible content"> ADD TO CART</div>
                  </MDBBtn>
                </div>
              </div>
            </div>
          </div>
        </MDBContainer>
      )}
    </div>
  );
};

export default ItemDetails;
