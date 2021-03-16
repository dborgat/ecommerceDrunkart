import React from 'react';
import { Button, TextField, FormControlLabel, Checkbox,Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useInput } from "../hooks/useInput";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import useStyles from './styles/checkoutStyles';


const Checkout = () => {
    const dispatch = useDispatch();
    const history = useHistory(); 
    const classes = useStyles();
    const firstName = useInput('firstName');
    const lastName = useInput('lastName');
    const email = useInput('email');
    const state = useInput('state');
    const postalCode = useInput('postalCode')
    const city = useInput('city')
    const address = useInput('address')
    const paymentMethod = useInput('paymentMethod') // no sé que tipo de input sería.

    // Que ruta sería la del checkout? 

        const handleSubmit = (e) => {
            e.preventDefault()

            setTimeout(()=>{
                history.push('/')
            }, 4000)    
        }; 

    return (
        
    <div>
        <Box className={classes.form}>
            <Grid item xs={12} sm={6}>
                <Box>
                    <Typography variant="h3" gutterBottom>
                        Billing address
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...firstName}
                                id="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...lastName}
                                required
                                id="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...email}
                                required
                                id="city"
                                label="Email"
                                fullWidth
                                autoComplete="shipping address-level2"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...address}
                                required
                                id="address"
                                label="Address"
                                fullWidth
                                autoComplete="shipping address"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...city}
                                required
                                id="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                            {...state}
                            id="state" 
                            label="State/Province/Region" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                {...postalCode}
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping postal-code"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                {...paymentMethod}
                                label="Payment Method"
                                fullWidth
                                autoComplete="shipping postal-code"
                            />
                        </Grid>
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Payment method
                            </Typography>
                        </Box>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="creditCard" value="yes" />}
                                label="Credit Card"
                            />
                            <TextField                               
                                label="Card Number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="debitCard" value="yes" />}
                                label="Debit Card"
                            />
                            <TextField                               
                                label="Card Number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="cash" value="yes" />}
                                label="Cash"                               
                            />
                            <TextField                               
                                label="Amount"
                            />
                        </Grid>
                        
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Confirm Payment
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

export default Checkout
