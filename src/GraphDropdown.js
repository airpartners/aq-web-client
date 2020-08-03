import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { pollutantsToShow, pollutantAbbreviationHTML } from './Utils'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      display: "none",
    },
  },
}));

const pollutants = pollutantsToShow;

export default function GraphDropdown(props) {
  const classes = useStyles();
  const { strings, currentIndex, parentHandleMenuItemClick } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(currentIndex);

  useEffect(() => {
    setSelectedIndex(currentIndex);
  }, [currentIndex])

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    parentHandleMenuItemClick(event, index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label={strings["Graph"]["GraphDropdown"]["ListAriaLabel"]}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="pollutant-menu"
          aria-label={strings["Graph"]["GraphDropdown"]["ListItemAriaLabel"]}
          onClick={handleClickListItem}
        >
          <ListItemText primary={strings["Graph"]["GraphDropdown"]["ListItemText"]} secondary={pollutantAbbreviationHTML(pollutants[selectedIndex])} />
        </ListItem>
      </List>
      <Menu
        id="pollutant-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {pollutants.map((pollutant, index) => (
          <MenuItem
            key={pollutant}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {pollutantAbbreviationHTML(pollutant)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
