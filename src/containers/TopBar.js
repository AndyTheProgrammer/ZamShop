import React, { useState, useEffect } from "react";
import { AppBar, CssBaseline, Typography } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "../style";
import axios from "axios";

const TopBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  /* const [data, setData] = React.useState({
     currencies: ["ZMK", "USD", "EUR", "AED"],
     base: "",
   });
   */
  const [initialState, setState] = useState({
    currencies: ["USD", "JPY", "EUR", "GBP"],
    base: "USD",
    convertTo: "",
    amount: "",
    result: "",
  })
  const { currencies, base, amount, convertTo, result } = initialState;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCurrencyConveter = async () => {
        const response = await axios
          .get(`http://api.exchangeratesapi.io/latest?access_key=42197ecdd09c577e37a6b6b0489e860d`);
        console.log('response ==>', response)
        const result = (response.data.rates[convertTo] * amount).toFixed(3);
        console.log(result);
        setState({
          ...initialState,
          result,
        })
      };
      getCurrencyConveter()
    }
  }, [amount, base, convertTo])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (e) => {

    setState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null,


    });
  }
  return (
    <div className={classes.nav_root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="Nav_title">
            ZamShop
          </Typography>

           {/* <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
            className={classes.nav_left}
          >
            Change Currency
          </Button>
          
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onChange={handleSelect}
            name="convertTo"
            value={convertTo}
          > 
          {currencies.map((currency) => {
              return( 
              <>
            <MenuItem onClick={ handleClose } key={currency} value={currency}>{currency}</MenuItem>
            
           </>
              );
        })}        
          
          </Menu> 
           

      */}
     {/* <> <div className={classes.nav_left}>Change Currency </div> </> */}
          <select id='simple-menu'className={classes.nav_left}
            name="convertTo"
            value={convertTo}
            onChange={handleSelect}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}

          </select>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default TopBar;
