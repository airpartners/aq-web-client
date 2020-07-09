import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import DevicePage from "./DevicePage";
import AboutPage from "./AboutPage";
import QuestionPage from "./QuestionPage";
import NavigationDrawer from "./NavigationDrawer";
import { deviceList, deviceInitData, needUpdate } from "./Utils";
import { getData } from "./FirebaseComponent";

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

function ContentContainer(props) {
    const { t } = props;
    const { path, subPath } = useParams();
    const [bottomTab, setBottomTab] = useState(t('Routes.Home'));
    const [deviceDict, setDeviceDict] = useState(deviceInitData);
    const [isFetching, setIsFetching] = useState(deviceList.reduce((o, key) => ({ ...o, [key]: false }), {}));
    const classes = useStyles();

    useEffect(() => {
        if (deviceList.includes(path)) {
            updateDeviceIfNeeded(path);
        }
    }, [path]);

    useEffect(() => {
        if (subPath) {
            setBottomTab(subPath);
        }
    }, [subPath]);

    useEffect(() => {
        // only runs once due to empty dependency array
        for (let deviceId of deviceList) {
            updateDeviceIfNeeded(deviceId);
        }
    }, []);

    const updateDeviceIfNeeded = (deviceId) => {
        if (needUpdate(deviceDict, deviceId) && !isFetching[deviceId]) {
            setIsFetching(prevState => ({ ...prevState, [deviceId]: true }));
            // make deep copy so references aren't shared with old state
            const newDevice = JSON.parse(JSON.stringify(deviceDict[deviceId]));
            // getData(deviceId).then((data) => {
            getData('SN000-088').then((data) => { // TODO: temp until east boston sensors are back online
                newDevice.data = [data];
                newDevice.lastUpdated = new Date();
                // have to set states here since fetch is async
                setDeviceDict(prevState => ({ ...prevState, [deviceId]: newDevice }));
                setIsFetching(prevState => ({ ...prevState, [deviceId]: false }));
            }).catch((e) => {
                console.log(e);
            });
        }
    }

    let componentsToRender;
    if (deviceList.includes(path)) {
        const deviceId = path;
        componentsToRender = <DevicePage t={t} deviceId={deviceId} bottomTab={bottomTab} deviceDict={deviceDict} />;
    } else if (path === t('Routes.About us')) {
        componentsToRender = <AboutPage t={t} />;
    } else if (path === t('Routes.Q&A')) {
        componentsToRender = <QuestionPage t={t} />;
    } else {
        // TODO: update this at some point to show something nicer
        componentsToRender = (<h1>404 not found</h1>);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* Navigation Drawer */}
            <NavigationDrawer t={t}
                path={path}
                bottomTab={bottomTab}
                deviceDict={deviceDict} />

            {/* Main Content */}
            <main className={classes.main}>
                <div className={classes.toolbar} />
                {componentsToRender}
            </main>
        </div>
    );
}

export default ContentContainer;