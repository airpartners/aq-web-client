import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import DevicePage from "./DevicePage";
import ContactUsPage from "./ContactUsPage";
import NavigationDrawer from "./NavigationDrawer";
import { deviceList, deviceInitData, needUpdate } from "./Utils";
import { getData } from "./FirebaseComponent";
import { parse } from 'query-string';
import * as Translations from "./Translations"

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
    const { path, subPath } = useParams();
    let queryParams = useLocation().search;

    // strip the first two characters of lang queryParam
    const lang = parse(queryParams).lang ? parse(queryParams).lang.slice(0, 2) : "";
    // devices use full language and country code but only "en" and "es" are supported
    // by the web app right now

    const [strings, setStrings] = useState(Translations.en);
    const [bottomTab, setBottomTab] = useState("Home");
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
        if (Translations.supported.includes(lang)) {
            setStrings(Translations[lang]);
        } else {
            queryParams = "";
        }
    }, [lang]);

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
            getData(deviceId).then((data) => {
                newDevice.latest = data.latest;
                newDevice.graph = data.graph;
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
        componentsToRender = <DevicePage queryParams={queryParams} strings={strings} deviceId={deviceId} bottomTab={bottomTab} deviceDict={deviceDict} />;
    } else if (path === "contact-us") {
        componentsToRender = <ContactUsPage strings={strings} />;
    } else {
        // TODO: update this at some point to show something nicer
        componentsToRender = (<h1>404 not found</h1>);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* Navigation Drawer */}
            <div id="webonly">
                <NavigationDrawer
                    queryParams={queryParams}
                    strings={strings}
                    path={path}
                    bottomTab={bottomTab}
                    deviceDict={deviceDict} />
            </div>

            {/* Main Content */}
            <main className={classes.main}>
                <div className={classes.toolbar} />
                {componentsToRender}
            </main>
        </div>
    );
}

export default ContentContainer;