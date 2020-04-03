import React from 'react';
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
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DeviceIcon from '@material-ui/icons/Pages';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import DetailIcon from '@material-ui/icons/BubbleChart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import * as DBHelper from './DBHelper';

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
    const [tabValue, setTabValue] = React.useState(0);
    const [currentPath, setCurrentPath] = React.useState(deviceList[0]);
    const [currentDevice, setCurrentDevice] = React.useState({name: deviceList[0], data: {}});
    const [deviceData, setDeviceData] = React.useState({});
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const fetchDeviceData = (device) => {
        DBHelper.getData(device).then((data) => {
            let newState = deviceData;
            newState[device] = data;
            setDeviceData(newState);
        }).catch((e) => {
            console.log(e);
        })
    };
    const updatePage = (path) => {
        // Update current device
        if (deviceList.includes(path) && path !== currentDevice.name) {
            // Fetch device data if needed
            if (!(path in deviceData)) {
                fetchDeviceData(path);
                console.log(deviceData);
            }
            setCurrentDevice({name: path, data: deviceData[path]});
        }
    };
    const setPath = (event, path) => {
        event.stopPropagation();
        if (currentPath !== path) {
            updatePage(path);
            setCurrentPath(path);
        }
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {deviceList.map((text) => (
                    <ListItem button key={text} selected={currentPath === text} onClick={(e) => setPath(e, text)}>
                        <ListItemIcon><DeviceIcon/></ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                <ListItem button key={aboutUsText} selected={currentPath === aboutUsText}
                          onClick={(e) => setPath(e, aboutUsText)}>
                    <ListItemIcon><InfoIcon/></ListItemIcon>
                    <ListItemText primary={aboutUsText}/>
                </ListItem>
                <ListItem button key={qaaText} selected={currentPath === qaaText} onClick={(e) => setPath(e, qaaText)}>
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
                <div>
                    <div className={classes.content} style={{marginBottom: "56px"}}>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum porttitor justo,
                            vel efficitur justo bibendum a. Ut mollis vel nulla quis pretium. Vestibulum aliquam dapibus
                            lectus, in venenatis ex dictum iaculis. Nulla fermentum ornare tortor, vitae ullamcorper
                            sem. Phasellus est ligula, auctor vel ex in, finibus tincidunt nisl. Suspendisse dictum ex a
                            velit fringilla, sit amet ultricies justo fringilla. Donec consectetur magna eget orci
                            porttitor vestibulum. Donec at luctus lorem. Fusce euismod commodo massa, non ornare nisl
                            cursus sed. Nam bibendum justo odio, non hendrerit lectus dictum at. Cras eros orci,
                            faucibus commodo maximus ac, laoreet a lacus. Nam pulvinar aliquet efficitur. Pellentesque
                            in mattis eros. Mauris vitae metus sapien. Phasellus non turpis sed nisl dignissim
                            efficitur. Phasellus pulvinar turpis at ultrices tempor.
                        </Typography>
                    </div>
                    <BottomNavigation
                        style={{position: "fixed", width: `calc(100% - ${drawerWidth}px)`, bottom: 0}}
                        value={tabValue}
                        onChange={(event, newValue) => {
                            setTabValue(newValue);
                        }}
                        showLabels
                        className={classes.root}>
                        <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
                        <BottomNavigationAction label="Map" icon={<LocationOnIcon/>}/>
                        <BottomNavigationAction label="Detail" icon={<DetailIcon/>}/>
                    </BottomNavigation>
                </div>
            </main>
        </div>
    );
}

export default App;
