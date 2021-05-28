import React, {useState} from "react";
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

const TopBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
 /* const [data, setData] = React.useState({
    currencies: ["ZMK", "USD", "EUR", "AED"],
    base: "",
  });
  */
 const [initialState, setSate] = useState({
   currencies: ["USD", "JPY", "EUR", "GBP"],
    base: "USD",
 })
const {currencies, base } = initialState;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.nav_root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="Nav_title">
            ZamShop
          </Typography>

          <Button
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
            name="base"
            value={base}
          > 
          {currencies.map((currency) => {
              return( 
              <>
            <MenuItem onClick={ handleClose } key={currency} value={currency}>{currency}</MenuItem>
            
           </>
              );
        })}        
          
          </Menu> 
  
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default TopBar;
