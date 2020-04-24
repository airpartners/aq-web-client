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
import {drawerWidth, deviceList, getTabName, isDevicePath} from "./Utils";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
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
    const {t, bottomTab, deviceId, deviceDict, currentPath, setPath} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {deviceList.map((id) => (
                    <ListItem button component={Link}
                              to={process.env.PUBLIC_URL + '/' + id + '/' + getTabName(bottomTab, t)}
                              key={id}
                              selected={(currentPath === '' && id === deviceList[0]) || (isDevicePath(currentPath) && id === deviceId)}
                              onClick={(e) => setPath(e, id + '/' + getTabName(bottomTab, t))}>
                        <ListItemIcon><DeviceIcon/></ListItemIcon>
                        <ListItemText primary={deviceDict[id].name}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                <ListItem button component={Link} to={process.env.PUBLIC_URL + '/about-us'}
                          key='about-us' selected={currentPath === 'about-us'}
                          onClick={(e) => setPath(e, 'about-us')}>
                    <ListItemIcon><InfoIcon/></ListItemIcon>
                    <ListItemText primary={t('DrawerNav.About us')}/>
                </ListItem>
                <ListItem button component={Link} to={process.env.PUBLIC_URL + '/Q&A'}
                          key='Q&A' selected={currentPath === '/Q&A'}
                          onClick={(e) => setPath(e, 'Q&A')}>
                    <ListItemIcon><HelpIcon/></ListItemIcon>
                    <ListItemText primary={t('DrawerNav.Q&A')}/>
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
                        {deviceDict[deviceId].name}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Responsive Drawer. The implementation can be swapped with js to avoid SEO duplication of links. */}
            <nav className={classes.drawer} aria-label="device list">
                {/* Drawer for mobile */}
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{paper: classes.drawerPaper,}}
                        ModalProps={{keepMounted: true,}}>
                        {drawer}
                    </Drawer>
                </Hidden>
                {/* Drawer for desktop and tablet */}
                <Hidden smDown implementation="css">
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
