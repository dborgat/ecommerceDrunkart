import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {
  Card,
  Grid,
  Typography,
  Box,
  Button,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles/account";
const Account = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <CardMedia>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h3"
              component="h3"
            >
              My Account
            </Typography>

            <Typography
              className={classes.title}
              gutterBottom
              variant="h6"
              component="h3"
            >
              You are logging like NAME
            </Typography>
            <hr />
            <Box className={classes.roow}>
            <Card className={classes.cardd}>
              <Button className={classes.roow}>
                <PersonIcon style={{ fontSize: 40 }}/>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h3"
                >
                  MY DATA
                </Typography>
              </Button>
              </Card>
                <Card className={classes.cardd}>
              <Button className={classes.roow}>
                <FavoriteIcon style={{ fontSize: 40 }} />
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h3"
                >
                  MY FAVORITES
                </Typography>
              </Button>
                </Card>
                <Card className={classes.cardd}>
              <Button className={classes.roow}>
              
              <PlaylistAddCheckIcon/>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h3"
                >
                  MY ORDERS
                </Typography>
              </Button>
              </Card>
            </Box>
          </CardMedia>
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <Card>
          <Typography>HOLA</Typography>
        </Card>
        
      </Grid> */}
    </>
    
    
  );
};

export default Account;
