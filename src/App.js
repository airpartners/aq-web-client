import React, {useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import DeviceIcon from '@material-ui/icons/Pages';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import * as DBHelper from './DBHelper';
import DevicePageComponent from "./DevicePageComponent";
import AboutUsComponent from "./AboutPageComponent";

const drawerWidth = 240;
const deviceList = ['SN000-045', 'SN000-046', 'SN000-049', 'SN000-062', 'SN000-067', 'SN000-072'];
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

function App(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname.replace(process.env.PUBLIC_URL + '/', ''));
    const [currentDevice, setCurrentDevice] = React.useState({name: deviceList[0], data: {}});
    const [deviceMap, setDeviceMap] = React.useState({});
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        let isDevicePath = currentPath.includes('SN') || currentPath === '';
        if (isDevicePath) {
            updateDevicePage(currentPath ? currentPath : deviceList[0]);
        }
    }, []);
    const fetchDeviceData = (device) => {
        DBHelper.getData(device).then((data) => {
            let newState = deviceMap;
            newState[device] = data;
            setDeviceMap(newState);
        }).catch((e) => {
            console.log(e);
        })
    };
    const updateDevicePage = (path) => {
        // Fetch device data if needed
        if (!(path in deviceMap)) {
            fetchDeviceData(path);
            console.log(deviceMap);
        }
        setCurrentDevice({name: path, data: deviceMap[path]});

    };
    const setPath = (event, path) => {
        event.stopPropagation();
        // Update current device if path points to a device path
        if (deviceList.includes(path) && path !== currentDevice.name) {
            updateDevicePage(path);
        }
        setCurrentPath(path);
    };
    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {deviceList.map((device) => (
                    <ListItem button component={Link} to={process.env.PUBLIC_URL + '/' + device}
                              key={device} selected={currentPath === device}
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
        <div className={classes.root}>
            <CssBaseline/>
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

            {/* Main Content */}
            <main>
                <div className={classes.toolbar}/>
                {deviceList.map((device) => (
                    <Route path={process.env.PUBLIC_URL + '/' + device} key={device} render={() => (
                        <DevicePageComponent device={currentDevice}/>
                    )}/>
                ))}
                <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
                    <DevicePageComponent device={currentDevice}/>
                )}/>
                <Route path={process.env.PUBLIC_URL + '/about-us'} key={aboutUsText} render={() => (
                    <AboutUsComponent/>
                )}/>
                <Route path={process.env.PUBLIC_URL + '/Q&A'} key={qaaText} render={() => (
                    <AboutUsComponent/>
                )}/>
            </main>
        </div>
    );
}

export default App;
