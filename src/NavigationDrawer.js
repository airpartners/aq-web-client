import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import DeviceIcon from '@material-ui/icons/Pages';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from "react-router-dom";

const drawerWidth = 240;
const aboutUsText = 'About Us';
const qaaText = 'Q&A';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function NavigationDrawer(props) {
    const {container, deviceList, currentPath, setPath} = props;
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const classes = useStyles();
    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {deviceList.map((device) => (
                    <ListItem button component={Link} to={process.env.PUBLIC_URL + '/' + device}
                              key={device}
                              selected={currentPath === device || (currentPath === '' && device === deviceList[0])}
                              onClick={(e) => setPath(e, device)}>
                        <ListItemIcon><DeviceIcon/></ListItemIcon>
                        <ListItemText primary={device}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                <ListItem button component={Link} to={process.env.PUBLIC_URL + '/about-us'}
                          key={aboutUsText} selected={currentPath === 'about-us'}
                          onClick={(e) => setPath(e, aboutUsText)}>
                    <ListItemIcon><InfoIcon/></ListItemIcon>
                    <ListItemText primary={aboutUsText}/>
                </ListItem>
                <ListItem button component={Link} to={process.env.PUBLIC_URL + '/Q&A'}
                          key={qaaText} selected={currentPath === qaaText}
                          onClick={(e) => setPath(e, qaaText)}>
                    <ListItemIcon><HelpIcon/></ListItemIcon>
                    <ListItemText primary={qaaText}/>
                </ListItem>
            </List>
        </div>
    );
    return (
        <div>
            {/* App bar */}
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        AIRPARTNERS
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Responsive Drawer */}
            <nav className={classes.drawer} aria-label="device list">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{paper: classes.drawerPaper,}}
                        ModalProps={{keepMounted: true,}}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{paper: classes.drawerPaper,}}
                        variant="permanent"
                        open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>);
}

export default NavigationDrawer;
