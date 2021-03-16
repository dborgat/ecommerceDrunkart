import { Link } from "react-router-dom";
import React,{useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getProductName} from '../redux/reducers/productReducer'
import { UserContext } from "../index";
import axios from 'axios'
import {
    Typography,
    Card,
    
    CardContent,
    CardMedia,
    Grid,
    Container,
    Button
  } from "@material-ui/core";
  import Box from '@material-ui/core/Box';
 
  
  import useStyles from "../components/styles/Products";
  import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
const Products = ({name}) => {
  
    const productName = useSelector((state) => state.productName);
    const classes = useStyles();
   
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductName(name));
      
    }, [name]);
   
  

      const onClick=()=>{
       console.log("Estoy haciendo click")
      }
    return (
        <main  className={classes.paperContainer}>
        <div className={classes.paperContainer} >
          <Container  maxWidth="sm">
            <Typography
              variant="h4"
              align="center"
              color="testPrimary"
              gutterBottom
            >
             <Typography component="div">
      <Box  boxShadow={40} letterSpacing={6} m={1}>
      Alcohol may be man's worst enemy
      </Box>
      <Box boxShadow={8}fontStyle="italic" letterSpacing={5} m={1}>
      BUT the Bible says love your enemy
      </Box>
    </Typography>
              
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={8}>
            {productName.length>0 ?productName.map((product)=>(
              <Grid item key={product._id} xs={12} sm={3}>
              
                  <Button className={classes.ButtonFav}>
                  <FavoriteTwoToneIcon onClick={onClick} />
                  </Button>
              <Link className={classes.link} to = {`/products/${product._id}`}>
              <Card  >
                <CardMedia
                  className={classes.cardMedia}
                  image={product.img}
                  
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h7">
                  {product.name}
                  </Typography>
                  
              
                
                </CardContent>
              </Card>
            </Link>
            </Grid>



            )): null}
          </Grid>
        </Container>
      </main>
      
    );
};

export default Products;