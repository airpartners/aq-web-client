import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import * as DBHelper from './DBHelper';
import DevicePage from "./DevicePage";
import AboutPage from "./AboutPage";
import NavigationDrawer from "./NavigationDrawer";
import {withNamespaces} from 'react-i18next';
import {deviceList, getTabId, isDevicePath} from "./Utils";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Colors from "./assets/Colors";

// Create our own theme
const theme = createMuiTheme({
        palette: {
            primary: {
                main: Colors.primaryColor,
            },
        }
    },
)

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    main: {
        width: '100%',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));

function App(props) {
    const {t} = props;
    const classes = useStyles();
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname.replace(process.env.PUBLIC_URL + '/', ''));
    const [currentDevice, setCurrentDevice] = React.useState({name: deviceList[0], data: {}, tab: 0});
    const [deviceDict, setDeviceDict] = React.useState({});
    useEffect(() => {
        if (isDevicePath(currentPath)) {
            updateDevicePage(currentPath);
        }
    }, []);
    const getDeviceMetaData = (path) => {
        let metaData = path.split('/').filter(el => el); // Split and filter out null/empty string
        let deviceName = metaData.length > 0 ? metaData[0] : deviceList[0];
        let tabName = metaData.length > 1 ? metaData[1] : t('BottomNav.Home');
        if (!deviceList.includes(deviceName)) {
            deviceName = deviceList[0];
        }
        if (![t('BottomNav.Home'), t('BottomNav.Map'), t('BottomNav.Detail')].includes(tabName)) {
            tabName = t('BottomNav.Home');
        }
        return [deviceName, getTabId(tabName, t)];
    };
    const updateDevicePage = (path) => {
        let [device, tabId] = getDeviceMetaData(path);
        setCurrentDevice(prevState => ({...prevState, tab: tabId, name: device}));
        // Fetch device data if needed
        if (!(device in deviceDict)) {
            DBHelper.getData(device).then((data) => {
                let newState = deviceDict;
                newState[device] = data;
                setDeviceDict(newState);
                setCurrentDevice(prevState => ({...prevState, data: newState[device]}));
            }).catch((e) => {
                console.log(e);
            });
        } else {
            setCurrentDevice(prevState => ({...prevState, data: deviceDict[device]}));
        }
    };
    const setPath = (event, path) => {
        event.stopPropagation();
        setCurrentPath(path);
        // Update current device if path points to a device path
        if (isDevicePath(path)) {
            updateDevicePage(path);
        }
    };
    const setTabValue = (tab) => {
        setCurrentDevice(prevState => {
            return {...prevState, tab: tab};
        });
    };

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline/>
                {/* Navigation Drawer */}
                <NavigationDrawer t={t}
                                  currentDevice={currentDevice}
                                  currentPath={currentPath}
                                  setPath={(e, path) => setPath(e, path)}/>

                {/* Main Content */}
                <main className={classes.main}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        {deviceList.map((device) => (
                            <Route path={process.env.PUBLIC_URL + '/' + device} key={device} render={() => (
                                <DevicePage t={t}
                                            device={currentDevice}
                                            deviceDict={deviceDict}
                                            setTabValue={(val) => setTabValue(val)}/>
                            )}/>
                        ))}
                        <Route path={process.env.PUBLIC_URL + '/about-us'} render={() => (
                            <AboutPage t={t}/>
                        )}/>
                        <Route path={process.env.PUBLIC_URL + '/Q&A'} render={() => (
                            <AboutPage t={t}/>
                        )}/>
                        <Route path={process.env.PUBLIC_URL + '/'} render={() => (
                            <DevicePage t={t}
                                        device={currentDevice}
                                        deviceDict={deviceDict}
                                        setTabValue={(val) => setTabValue(val)}/>
                        )}/>
                    </Switch>
                </main>
            </div>
        </MuiThemeProvider>
    );
}

export default withNamespaces()(App);
