import React from 'react'
import { Button, TextField, Box, Grid, Typography, Select, MenuItem } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useInput } from "../hooks/useInput";
import { editAdminProduct } from '../redux/reducers/adminReducer'
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles/addProductStyles';

// Este componente debería tener como valores default los valores del producto que se quiere editar (con un getProductById, o algo así)
// Debería renderizarse sólo para los ADMIN
const EditProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const productName = useInput('productName');
    const price = useInput('price');
    const origin = useInput('origin');
    const flavour = useInput('flavour');
    const productImg = useInput('productImg');
    const productDescription = useInput('productDescription');
    const productCategory = useInput('productCategory'); 

  /*   const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editAdminProduct({
            name: productName.value,
            price: price.value,
            origin: origin.value,
            flavour: flavour.value,
            img: productImg.value,
            description: productDescription.value,
            category: productCategory.value
        }))
        etTimeout(()=>{
            history.push('/')
        }, 4000) 
    
        }; */

    return (
        <div>
        <Box className={classes.form}>
            <Grid item xs={12} sm={6}>
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Edit a product
                    </Typography>
                </Box>
                <form noValidate>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...productName}
                                required
                                id="productName"
                                label="Product title"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...price}
                                required
                                id="price"
                                label="Price"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...origin}
                                required
                                id="Origin"
                                label="Origin"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...flavour}
                                required
                                id="lavour"
                                label="Flavour"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...productImg}
                                required
                                id="city"
                                label="Product image"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...productDescription}
                                multiline
                                rows={2}
                                rowsMax={4}
                                required
                                id="productDescription"
                                label="Product Description"
                                fullWidth
                            />
                        </Grid>
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Product Category
                            </Typography>
                        </Box>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        {...productCategory} 
                        className={classes.selectCategory} 
                        >
                            <MenuItem value={'Beer'}>Beer</MenuItem>
                            <MenuItem value={'Wine'}>Wine</MenuItem>
                            <MenuItem value={'Whisky'}>Whisky</MenuItem>
                        </Select>                       
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Edit product
                        </Button>                    
                    </Grid>
                </form>
            </Grid>
        </Box>
        <Grid item xs={12} sm={6}>
        </Grid>
    </div>
    )
}

export default EditProduct
