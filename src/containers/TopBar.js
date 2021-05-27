import React from 'react'
import { AppBar, CssBaseline, Typography, Toolbar} from '@material-ui/core'
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import useStyles from '../style';
const TopBar = () => {
    const classes = useStyles(); 
    return (
        <>
        <CssBaseline />
        <AppBar position= "relative" > 
        <Toolbar>
            <ShoppingCartIcon className={classes.icon}/>
            <Typography variant ="h6"  style={{color:'#fff',}}>ZamShop</Typography>
            </Toolbar>
            </AppBar>
        </>
    )
}
export default TopBar