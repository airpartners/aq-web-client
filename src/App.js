import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import * as DBHelper from './DBHelper';
import DevicePage from "./DevicePage";
import AboutPage from "./AboutPage";
import QuestionPage from "./QuestionPage";
import NavigationDrawer from "./NavigationDrawer";
import { withNamespaces } from 'react-i18next';
import { deviceList, deviceInitData, isDevicePath, needUpdate, getDeviceMetaData } from "./Utils";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Colors from "./assets/Colors";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
    const { t } = props;
    const classes = useStyles();
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname.replace(process.env.PUBLIC_URL + '/', ''));
    const [bottomTab, setBottomTab] = React.useState(0);
    const [currentDevice, setCurrentDevice] = React.useState(deviceList[0]);
    const [deviceDict, setDeviceDict] = React.useState(deviceInitData);
    useEffect(() => {
        updateDevicePage(currentPath);
        getAllData();
    }, []);
    const getAllData = () => {
        for (let deviceId of deviceList) {
            getDeviceData(deviceId);
        }
    }
    const getDeviceData = (deviceId) => {
        if (needUpdate(deviceDict, deviceId)) {
            DBHelper.getData(deviceId).then((data) => {
                let newDevice = deviceDict[deviceId];
                newDevice.data = data.data;
                newDevice.meta = data.meta;
                newDevice.lastUpdated = new Date();
                setDeviceDict(prevState => ({ ...prevState, deviceId: newDevice }));
            }).catch((e) => {
                console.log(e);
            });
        }
    }
    const updateDevicePage = (path) => {
        console.log(path);
        let [deviceId, tabId] = getDeviceMetaData(path, t);
        setCurrentDevice(deviceId);
        setBottomTab(tabId);
        console.log(tabId)
        // Fetch device data if needed
        getDeviceData(deviceId);
    };
    const setPath = (event, path) => {
        event.stopPropagation();
        setCurrentPath(path);
        // Update current device if path points to a device path
        // if (isDevicePath(path)) {
        //     updateDevicePage(path);
        // }
    };
    const devicePage = (deviceId) => {
        if (deviceId) {
            console.log(deviceId);
            updateDevicePage(deviceId);
        } else {
            updateDevicePage(deviceList[0]);
        }
        return (
            <DevicePage t={t}
                bottomTab={bottomTab}
                deviceId={currentDevice}
                deviceDict={deviceDict}
                setTabValue={(val) => setBottomTab(val)} />);
    };
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                {/* Navigation Drawer */}
                <NavigationDrawer t={t}
                    bottomTab={bottomTab}
                    deviceId={currentDevice}
                    deviceDict={deviceDict}
                    currentPath={currentPath}
                    setPath={(e, path) => setPath(e, path)} />

                {/* Main Content */}
                <main className={classes.main}>
                    <div className={classes.toolbar} />
                    <Switch>
                        {deviceList.map((deviceId) => (
                            <Route path={process.env.PUBLIC_URL + '/' + deviceId} key={deviceId} render={() => devicePage(deviceId)} />
                        ))}
                        <Route path={process.env.PUBLIC_URL + '/about-us'} render={() => (
                            <AboutPage t={t} />
                        )} />
                        <Route path={process.env.PUBLIC_URL + '/Q&A'} render={() => (
                            <QuestionPage t={t} />
                        )} />
                        <Route path={process.env.PUBLIC_URL + '/'} render={() => devicePage()} />
                    </Switch>
                </main>
                {/* The core Firebase JS SDK is always required and must be listed first */}
                <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

                {/* TODO: Add SDKs for Firebase products that you want to use
                    https://firebase.google.com/docs/web/setup#available-libraries */}
                <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script>

                <script>
                // Your web app's Firebase configuration
                var firebaseConfig = {
                    apiKey: "AIzaSyByyEO8A3-mCIjcTYoVXC6_9C2NGskBvzA",
                    authDomain: "ade-airparnters.firebaseapp.com",
                    databaseURL: "https://ade-airparnters.firebaseio.com",
                    projectId: "ade-airparnters",
                    storageBucket: "ade-airparnters.appspot.com",
                    messagingSenderId: "831140017575",
                    appId: "1:831140017575:web:33b93a1383a9367ae6f282",
                    measurementId: "G-4W9PM87VRH"
                };
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);
                firebase.analytics();
                </script>
            </div>
        </MuiThemeProvider>
    );
}

export default withNamespaces()(App);
