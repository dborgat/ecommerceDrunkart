import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartProducts } from "../redux/reducers/cartProductsReducer";
import { getProductId, getProductName } from "../redux/reducers/productReducer";
import axios from "axios";

//MATERIAL UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InputBase from "@material-ui/core/InputBase";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { UserContext } from "../index";
import { log, success, error } from "../utils/logs";

import { auth } from "../firebase";

//CSS
import useStyles from "./styles/Header";

export default function ButtonAppBar() {
  const productName = useSelector((state) => state.productName);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const cart = useSelector((state) => state.cartProducts);
  const { user, setUser } = useContext(UserContext);
  const [inputSearch, setInputSearch] = useState("");
  const [state, setState] = React.useState({
    categories: false,
  });

  const onChange = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearch.length > 0) {
      history.push(`/products/search/${inputSearch}`)
    }
  };
  
  // .then(() => setInputSearch(""))
  // .then(()=> console.log("PRODUCTNAME", productName))
  // .then(() => {
  //   if(productName.length>0){
  //     console.log("PRODUCTNAMEeeeeeeee-----", productName);
  //  return  history.push(`/products/${productName[0].name}`)
  // }
  // })
  

  //FIREBASE LOGOUT
  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  useEffect(() => {}, [user]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "categories",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Beer", "whisky", "Wine"].map((text, index) => (
          <ListItem button key={text}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/category/${text.toLowerCase()}`}
            >
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const handleLogout = async () => {
    log("logout attempt...");
    try {
      await axios.post("/api/user/logout");
      setUser({});
      success("logged out");
      history.push("/");
    } catch ({ response }) {
      error(response.status, response.statusText);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <Typography variant="h6" className={classes.title}>
              Drunkart
            </Typography>
          </Link>
          <form onSubmit={handleSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={onChange}
                value={inputSearch}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </form>
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: 1100,
                }}
                onClick={toggleDrawer(anchor, true)}
              >
                Categories
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          {user.email ? (
            <div>
              {" "}
              <Button onClick={handleLogout} color="inherit">
                LOGOUT
              </Button>
            </div>
          ) : (
            <div>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </Link>
            </div>
          )}

          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/register"
          >
            <Button color="inherit">Register</Button>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart">
            <Button color="inherit">
              <ShoppingCartIcon />

              <span>{cart.length}</span>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
