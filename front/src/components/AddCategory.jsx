import React from 'react'
import { Button, TextField, Box, Grid, Typography, Select, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useInput } from "../hooks/useInput";
// import {  } from '../redux/reducers/categoryReducer' // el Post de categories.
import { useDispatch} from 'react-redux';
import useStyles from './styles/addProductStyles';

// Debería renderizarse sólo para los ADMIN
const AddCategory = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const categoryName = useInput('categoryName');


/*     const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addAdminProduct({
            name: productName.value,
            price: price.value,
            img: productImg.value,
            description: productDescription.value,
            category: productCategory.value
        }))
        setTimeout(()=>{
            history.push('/')
        }, 4000)
    
        }; */

    return (
        <div>
        <Box className={classes.form}>
            <Grid item xs={12} sm={6}>
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Add a new category
                    </Typography>
                </Box>
                <form noValidate>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...categoryName}
                                required
                                id="productName"
                                label="Category Name"
                                fullWidth
                            />
                        </Grid>
                
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Add new Category
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

export default AddCategory
