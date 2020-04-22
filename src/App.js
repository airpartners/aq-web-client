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
import {deviceList, deviceInitData, isDevicePath, needUpdate, getDeviceMetaData} from "./Utils";
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
    const [bottomTab, setBottomTab] = React.useState(0);
    const [currentDevice, setCurrentDevice] = React.useState(deviceList[0]);
    const [deviceDict, setDeviceDict] = React.useState(deviceInitData);
    useEffect(() => {
        if (isDevicePath(currentPath)) {
            updateDevicePage(currentPath);
        }
    }, []);
    const updateDevicePage = (path) => {
        let [deviceId, tabId] = getDeviceMetaData(path, t);
        setCurrentDevice(deviceId);
        setBottomTab(tabId);
        // Fetch device data if needed
        if (needUpdate(deviceDict, deviceId)) {
            DBHelper.getData(deviceId).then((data) => {
                let newDevice = deviceDict[deviceId];
                newDevice.data = data.data;
                newDevice.meta = data.meta;
                newDevice.lastUpdated = new Date();
                setDeviceDict(prevState => ({...prevState, deviceId: newDevice}));
            }).catch((e) => {
                console.log(e);
            });
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
    const devicePage = <DevicePage t={t}
                                   bottomTab={bottomTab}
                                   deviceId={currentDevice}
                                   deviceDict={deviceDict}
                                   setTabValue={(val) => setBottomTab(val)}/>;
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline/>
                {/* Navigation Drawer */}
                <NavigationDrawer t={t}
                                  bottomTab={bottomTab}
                                  deviceId={currentDevice}
                                  deviceDict={deviceDict}
                                  currentPath={currentPath}
                                  setPath={(e, path) => setPath(e, path)}/>

                {/* Main Content */}
                <main className={classes.main}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        {deviceList.map((device) => (
                            <Route path={process.env.PUBLIC_URL + '/' + device} key={device} render={() => devicePage}/>
                        ))}
                        <Route path={process.env.PUBLIC_URL + '/about-us'} render={() => (
                            <AboutPage t={t}/>
                        )}/>
                        <Route path={process.env.PUBLIC_URL + '/Q&A'} render={() => (
                            <AboutPage t={t}/>
                        )}/>
                        <Route path={process.env.PUBLIC_URL + '/'} render={() => devicePage}/>
                    </Switch>
                </main>
            </div>
        </MuiThemeProvider>
    );
}

export default withNamespaces()(App);
