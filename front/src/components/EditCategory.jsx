import React from 'react'
import { Button, TextField, Box, Grid, Typography, Select, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useInput } from "../hooks/useInput";
import { getCategories, getCategoryByName } from '../redux/reducers/categoryReducer'
import { useDispatch} from 'react-redux';
import useStyles from './styles/addProductStyles';

// Este componente debería renderizar todas las categorías de bebidas
// Poder seleccionar una y modificarla
// Debería renderizarse sólo para los ADMIN
const EditCategory = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const categoryName = useInput('categoryName');

    // Buscaría todas las categorías (getCategories), seleccionarías a categoría a editar (getCategoryByName o ID) y editarías esa categoría (ruta de editar categoría)
    // Finalmente te redirigiría a la categoría editada?

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
                        Edit a category
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
                                Edit Category
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

export default EditCategory
