import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductId } from "../redux/reducers/productReducer";
import Product from "./Product";
import { Card, Typography, Box, Button, CardMedia, ButtonGroup } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { addToCartProducts } from "../redux/reducers/cartProductsReducer";
import Rating from "@material-ui/lab/Rating";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles/stylesSingle";
import AliceCarousel from "react-alice-carousel";

//CSS
import "react-alice-carousel/lib/alice-carousel.css";
import "./styles/singleProd.css";

export default function RecipeReviewCard({ id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);
  const products = useSelector((state) => state.products);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [counter, setcounter] = React.useState(1);

  useEffect(() => {
    dispatch(getProductId(id));
  }, [id]);
  useEffect(() => {
    setcounter(1);
  }, [id]);

 


  const handleChange = (e) => {
    dispatch(addToCartProducts(id));
  };

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = products.map((product) => (
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
  console.log("Singleprod", singleProduct);
  return (
    <>
      {singleProduct._id ? (
        <>
          <div className={classes.ro}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                  <FavoriteTwoToneIcon />
                  <CardMedia
                    key={singleProduct._id}
                    className={classes.media}
                    image={singleProduct.img}
                    title={singleProduct.name}
                  />
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className={classes.rating}>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h4"
                  component="h3"
                >
                  {singleProduct.name}
                </Typography>
                <Typography
                  className={classes.subtitle}
                  gutterBottom
                  variant="h6"
                  component="h2"
                >
                  {singleProduct.description}
                </Typography>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h3"
                >
                  Price : {singleProduct.price}
                </Typography>
               
                  <Grid item xs={6} sm={3}>
                    <ButtonGroup variant="outlined">
                      <Button
                        className={classes.button}
                        name="reduce"
                        aria-label="reduce"
                        onClick={() => {
                          setcounter(Math.max(counter - 1, 1));
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Typography className={classes.buttonBox}>
                        {counter}
                      </Typography>
                      <Button
                        className={classes.button}
                        name="increase"
                        aria-label="increase"
                        onClick={() => {
                          setcounter(counter + 1);
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  
                  </Grid>
                
                <Box className={classes.addCart}>
                  <Button onClick={handleChange} variant="contained">
                    ADD TO CART
                  </Button>
                  <Button variant="contained">TO BUY</Button>
                </Box>
              </Grid>
            </Grid>
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
            <AliceCarousel
              responsive={responsive}
              mouseTracking
              items={items}
            />
          </Box>
        </>
      ) : null}
    </>
  );
}
