import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import DetailIcon from '@material-ui/icons/BubbleChart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link, Route, Switch} from "react-router-dom";
import {drawerWidth} from "./Utils";
import DeviceHome from "./DeviceHome";
import DeviceDetail from "./DeviceDetail";
import DeviceMap from "./DeviceMap";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginBottom: "56px",
    },
    botNav: {
        display: 'flex',
        position: "fixed",
        width: `calc(100% - ${drawerWidth}px)`,
        bottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    }
}));

/**
 * DevicePage is a container for DeviceDetail, DeviceHome, and DeviceMap
 */
function DevicePage(props) {
    const classes = useStyles();
    const {t, device, deviceDict, setTabValue} = props;
    return (
        <div>
            <div className={classes.content}>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/' + device.name + '/' + t('BottomNav.Home')} render={() => (
                        <DeviceHome t={t} device={device} deviceDict={deviceDict}/>
                    )}/>
                    <Route path={process.env.PUBLIC_URL + '/' + device.name + '/' + t('BottomNav.Map')} render={() => (
                        <DeviceMap t={t} device={device} deviceDict={deviceDict}/>
                    )}/>
                    <Route path={process.env.PUBLIC_URL + '/' + device.name + '/' + t('BottomNav.Detail')} render={() => (
                        <DeviceDetail t={t} device={device} deviceDict={deviceDict}/>
                    )}/>
                    <Route path={process.env.PUBLIC_URL + '/'} render={() => (
                        <DeviceHome t={t} device={device} deviceDict={deviceDict}/>
                    )}/>
                </Switch>
            </div>
            <BottomNavigation
                className={classes.botNav}
                value={device.tab}
                onChange={(event, newValue) => {setTabValue(newValue);}}
                showLabels>
                <BottomNavigationAction component={Link} label={t('BottomNav.Home')} icon={<HomeIcon/>}
                                        to={process.env.PUBLIC_URL + '/' + device.name + '/' + t('BottomNav.Home')}/>
                <BottomNavigationAction component={Link} label={t('BottomNav.Map')} icon={<LocationOnIcon/>}
                                        to={process.env.PUBLIC_URL + '/' + device.name + '/' + t('BottomNav.Map')}/>
                <BottomNavigationAction component={Link} label={t('BottomNav.Detail')} icon={<DetailIcon/>}
                                        to={process.env.PUBLIC_URL + '/' + device.name + '/' + t('BottomNav.Detail')}/>
            </BottomNavigation>
        </div>);
}

export default DevicePage;
