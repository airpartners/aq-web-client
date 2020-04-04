import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import * as DBHelper from './DBHelper';
import DevicePage from "./DevicePage";
import AboutPage from "./AboutPage";
import NavigationDrawer from "./NavigationDrawer";

const deviceList = ['SN000-045', 'SN000-046', 'SN000-049', 'SN000-062', 'SN000-067', 'SN000-072'];

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
    const [currentDevice, setCurrentDevice] = React.useState({name: deviceList[0], data: {}});
    const [deviceMap, setDeviceMap] = React.useState({});
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

    return (
        <div className={classes.root}>
            <CssBaseline/>
            {/* Navigation Drawer */}
            <NavigationDrawer container={container}
                              deviceList={deviceList}
                              currentPath={currentPath}
                              setPath={(e, path) => setPath(e, path)}/>

            {/* Main Content */}
            <main>
                <div className={classes.toolbar}/>
                <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
                    <DevicePage device={currentDevice}/>
                )}/>
                {deviceList.map((device) => (
                    <Route path={process.env.PUBLIC_URL + '/' + device} key={device} render={() => (
                        <DevicePage device={currentDevice}/>
                    )}/>
                ))}
                <Route path={process.env.PUBLIC_URL + '/about-us'} render={() => (
                    <AboutPage/>
                )}/>
                <Route path={process.env.PUBLIC_URL + '/Q&A'} render={() => (
                    <AboutPage/>
                )}/>
            </main>
        </div>
    );
}

export default App;
