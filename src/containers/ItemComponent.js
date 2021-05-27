import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
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
        <Grid container spacing={0.5}>
          <Grid item xs={12} lg={5}>
            <Link to={`/product/${id}`}>
              <Box className="ui link cards" width={200} height={450}>
                <div className="card">
                  <img src={image} alt={title} className={classes.img} />

                  <div class="Content">
                    <div className="Product_name">{title}</div>
                    <p className="meta price">
                      {sign}
                      {price}
                    </p>
                    <p className="meta">{category} </p>
                  </div>
                </div>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  });

  return <>{displayList}</>;
};

export default ItemComponent;
