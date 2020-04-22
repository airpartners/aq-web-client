import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link, Route, Switch} from "react-router-dom";
import {drawerWidth} from "./Utils";
import DeviceHome from "./DeviceHome";
import DeviceMap from "./DeviceMap";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        marginBottom: '56px',
    },
    botNav: {
        display: 'flex',
        position: 'fixed',
        width: `calc(100% - ${drawerWidth}px)`,
        bottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    }
}));

/**
 * DevicePage is a container for DeviceHome, and DeviceMap
 */
function DevicePage(props) {
    const classes = useStyles();
    const {t, bottomTab, deviceId, deviceDict, setTabValue} = props;
    const device = deviceDict[deviceId];
    const deviceHome = <DeviceHome t={t} device={device}/>;
    const deviceMap = <DeviceMap t={t} deviceId={deviceId} deviceDict={deviceDict}/>;

    return (
        <div>
            <div className={classes.content}>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/' + device.id + '/' + t('BottomNav.Home')}
                           render={() => deviceHome}/>
                    <Route path={process.env.PUBLIC_URL + '/' + device.id + '/' + t('BottomNav.Map')}
                           render={() => deviceMap}/>
                    <Route path={process.env.PUBLIC_URL + '/'}
                           render={() => deviceHome}/>
                </Switch>
            </div>
            <BottomNavigation
                className={classes.botNav}
                value={bottomTab}
                onChange={(event, newValue) => {
                    setTabValue(newValue);
                }}
                showLabels>
                <BottomNavigationAction component={Link} label={t('BottomNav.Home')} icon={<HomeIcon/>}
                                        to={process.env.PUBLIC_URL + '/' + device.id + '/' + t('BottomNav.Home')}/>
                <BottomNavigationAction component={Link} label={t('BottomNav.Map')} icon={<LocationOnIcon/>}
                                        to={process.env.PUBLIC_URL + '/' + device.id + '/' + t('BottomNav.Map')}/>
            </BottomNavigation>
        </div>);
}

export default DevicePage;
