import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import useStyles from "./../style";

const ItemComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [sign, setSign] = React.useState("$");
  const classes = useStyles();
  const displayList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className={classes.root}>
        <Link to={`/product/${id}`}>
          <MDBRow
            className="row-cols-1 row-cols-md-4 g-4"
            style={{ width: "18rem" }}
            className="h-100"
          >
            <MDBCol className="h-100">
              <MDBCard className="h-100 hover-zoom" shadow="10">
                <MDBCardImage
                  src={image}
                  alt={title}
                  position="top"
                  className={classes.img}
                />

                <MDBCardBody>
                  <MDBCardTitle style={{ color: "black", fontWeight: "bold" }}>
                    {title}
                  </MDBCardTitle>
                  <MDBCardText style={{ color: "black" }}>
                    {sign}
                    {price}
                  </MDBCardText>
                  <MDBCardText style={{ color: "black" }}>
                    {category}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </Link>
      </div>
    );
  });

  return <>{displayList}</>;
};

export default ItemComponent;
