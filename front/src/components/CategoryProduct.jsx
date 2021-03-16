import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getCategoryByName } from "../redux/reducers/categoryReducer";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./styles/CategoryProduct.css";
import Product from "./Product";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    overflow: 'hidden',
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: '#fbfbfbfb'
  },
}));

function CategoryProduct({ id }) {
  const categoryProducts = useSelector((state) => state.singleCategory.data);
  const dispatch = useDispatch();

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {items && items.map(item  => (
           <Grid item xs={4}>
           <Paper elevation={3} className={classes.paper}>{item}</Paper>
         </Grid>
        ))}
      </React.Fragment>
    );
  }

  useEffect(() => {
    dispatch(getCategoryByName(id));
  }, [id]);
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = categoryProducts?.map((product) => (
    <Product
      id={product._id}
      onDragStart={handleDragStart}
      name={product.name}
      price={product.price}
      img={product.img}
    />
  ));
    
  return (
    <div>
      <h1 className="title">
        {categoryProducts ? (
          categoryProducts[0].category[0].name.toUpperCase()
        ) : (
          <LinearProgress />
        )}
      </h1>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CategoryProduct;