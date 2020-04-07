import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import * as DBHelper from './DBHelper';
import DevicePage from "./DevicePage";
import AboutPage from "./AboutPage";
import NavigationDrawer from "./NavigationDrawer";
import {detailText, deviceList, getTabId, homeText, isDevicePath, mapText} from "./Utils";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));

function App(props) {
    const {container} = props;
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
        let tabName = metaData.length > 1 ? metaData[1] : homeText;
        if (!deviceList.includes(deviceName)) {
            deviceName = deviceList[0];
        }
        if (![homeText, mapText, detailText].includes(tabName)) {
            tabName = homeText;
        }
        return [deviceName, getTabId(tabName)];
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
        <div className={classes.root}>
            <CssBaseline/>
            {/* Navigation Drawer */}
            <NavigationDrawer container={container}
                              currentDevice={currentDevice}
                              currentPath={currentPath}
                              setPath={(e, path) => setPath(e, path)}/>

            {/* Main Content */}
            <main>
                <div className={classes.toolbar}/>
                <Switch>
                    {deviceList.map((device) => (
                        <Route path={process.env.PUBLIC_URL + '/' + device} key={device} render={() => (
                            <DevicePage device={currentDevice}
                                        setTabValue={(val) => setTabValue(val)}/>
                        )}/>
                    ))}
                    <Route path={process.env.PUBLIC_URL + '/about-us'} render={() => (
                        <AboutPage/>
                    )}/>
                    <Route path={process.env.PUBLIC_URL + '/Q&A'} render={() => (
                        <AboutPage/>
                    )}/>
                    <Route path={process.env.PUBLIC_URL + '/'} render={() => (
                        <DevicePage device={currentDevice}
                                    setTabValue={(val) => setTabValue(val)}/>
                    )}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
