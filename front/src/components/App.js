import React, { useContext, useEffect } from "react";
import Register from "./Register";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Login from "./Login";
import Account from "./Account";
import Checkout from "./Checkout";
import Products from './Products'
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../index";
import { log, success, error } from "../utils/logs";
import { auth } from "../firebase";
//Components
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

import CategoryProduct from "./CategoryProduct";

import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

const App = () => {
  const { setUser, user } = useContext(UserContext);
  useEffect(() => {
    log(`fetching user...`);
    axios
      .get("/api/user/me")
      .then((res) => res.data)
      .then((user) => {
        success(`found user ${user.email}`);
        setUser(user);
      })
      .catch(({ response }) => {
        error(response.status, response.statusText);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => <SingleProduct id={match.params.id} />}
        />
        
         <Route
          exact
          path="/products/search/:name"
          render={({ match  }) => <Products name={match.params.name} />}
        />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/category/:id"
          render={({ match }) => <CategoryProduct id={match.params.id} />}
        />
        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/EditProduct" component={EditProduct} />
        <Route exact path="/addcategory" component={AddCategory} />
        <Route exact path="/editcategory" component={EditCategory} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
