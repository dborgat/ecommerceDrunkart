import React, { useEffect } from "react";
import useStyles from "./styles/cartStyles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartProducts } from "../redux/reducers/cartProductsReducer";
import {
  Typography,
  List,
  Grid,
  Button,
  CssBaseline,
  Divider,
  Paper,
  Card,
  Box,
  CardMedia,
} from "@material-ui/core";
import CartItem from "./CartItem";
import AliceCarousel from "react-alice-carousel";
import Product from './Product';

const Cart = () => {
  const classes = useStyles();
  const [amount, setAmount] = React.useState(500); // deberia venir cuanta plata
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartProducts);
  const products = useSelector((state) => state.products);
  const handleDragStart = (e) => e.preventDefault();
  const suggested = products.map((product) => (
          <Product
              id={product._id}
              onDragStart={handleDragStart}
              name={product.name}
              price={product.price}
              img={product.img}
          />

  ));
  
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1024: { items: 4 },
    1024: { items: 5 },
  };

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);


  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={3} xs={5}>
          <Typography variant="h4">Your Cart</Typography>
          <Grid item container>
            <Paper variant="outlined" className={classes.paper}>
              <List
                style={{ maxHeight: 500, overflow: "auto" }}
                className={classes.list}
              >
                {items.map((item) => (
                  <CartItem item={item} />
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
        <div className={classes.amountSection}>
          <div className={classes.amount1}>
            <Grid container alignItems="center">
              <Grid container direction="column" item xs>
                <Typography gutterBottom variant="h4">
                  Total Amount:
                </Typography>
                <Grid item>
                  <Divider />
                  <Typography
                    className={classes.payment}
                    gutterBottom
                    variant="h5"
                  >
                    {`$ ${amount}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="body2">
              Proceed to chechout clicking this button:
            </Typography>
          </div>
          <div className={classes.amount3}>
            <Link to="/checkout" className={classes.link}>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                color="secondary"
              >
                CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Box className={classes.carousel}>
        <CardMedia>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h3"
          >
            SUGESTED PRODUCTS
          </Typography>
        </CardMedia>
        <AliceCarousel responsive={responsive} mouseTracking items={suggested} />
      </Box>
    </div>
  );
};
export default Cart;
