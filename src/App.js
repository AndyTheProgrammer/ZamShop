import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./containers/TopBar";
import ItemListing from "./containers/ItemListing";
import ItemDetails from "./containers/ItemDetails";
import { ShoppingCartIcon } from "@material-ui/icons/ShoppingCart";
import useStyles from "./style";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        <TopBar />

        <Switch>
          <Route path="/" exact component={ItemListing} />
          <Route path="/product/:productId" exact component={ItemDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
