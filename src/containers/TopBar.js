import React, { useState, useEffect } from "react";
import { AppBar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "../style";
import axios from 'axios'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

const TopBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showNavCentred, setShowNavCentred] = useState(false);
  
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
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/" class="Nav_title">
            ZAMSHOP
          </MDBNavbarBrand>

          <MDBNavbarToggler
            data-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavCentred(!showNavCentred)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse
            navbar
            show={showNavCentred}
            center
            id="navbarCenteredExample"
          >
            <MDBNavbarNav className="mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    Change Currency
                  </MDBDropdownToggle>
                  <MDBDropdownMenu 
                  name='convertTo'
                  value={convertTo}
                  onChange={handleSelect}
                  anchorEl={anchorEl}
                  
                  >
                    <MDBDropdownItem>
                     {currencies.map((currency) => 
                     <MDBDropdownLink key={currency} value={currency}>{currency}</MDBDropdownLink>
                     )}
                     </MDBDropdownItem>
                     
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
            <MDBBtn
              tag="a"
              className="m-3"
              color="none"
              style={{ color: "#fff" }}
            >
              <MDBIcon size={22} icon="cart-arrow-down" />
            </MDBBtn>
          </MDBCollapse>

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
          >
            <MenuItem onClick={handleClose}>ZMK</MenuItem>
            <MenuItem onClick={handleClose}>USD</MenuItem>
            <MenuItem onClick={handleClose}>EUR</MenuItem>
          </Menu> */}
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};
export default TopBar;
