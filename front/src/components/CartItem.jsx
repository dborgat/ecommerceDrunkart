import React from "react";
import {
  List,
  ListItem,
  Divider,
  Button,
  ButtonGroup,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from "./styles/cartStyles";

//import { useSelector, useDispatch } from 'react-redux';

export default function CartItem({ item }) {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  return (
    <div>
      <ListItem className={classes.item} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.img} />
        </ListItemAvatar>
        <ListItemText
        
          primary={
          <React.Fragment>
              <Typography
                variant='h6'
                color="textPrimary"
              >
                {item.name}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
              className={classes.price}
                variant='h6'
                component="span"
                className={classes.inline}
                /* color="textPrimary" */
                variant="subtitle1"
              >
                Price: {item.price}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction className={classes.buttonSec}>
          <ButtonGroup variant='outlined'>
            <Button
            className={classes.button}
              name="reduce"
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 1));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Typography className={classes.buttonBox} >{count}</Typography>
            <Button
            className={classes.button}
              name="increase"
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
            <IconButton aria-label="delete" className={classes.padding}>
              <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}
