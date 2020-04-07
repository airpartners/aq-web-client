import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import DetailIcon from '@material-ui/icons/BubbleChart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link, Route, Switch} from "react-router-dom";
import {detailText, drawerWidth, homeText, mapText} from "./Utils";
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
    const {device, setTabValue} = props;
    return (
        <div>
            <div className={classes.content}>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/' + device.name + '/' + homeText} render={() => (
                        <DeviceHome device={device}/>
                    )}/>
                    <Route path={process.env.PUBLIC_URL + '/' + device.name + '/' + mapText} render={() => (
                        <DeviceMap device={device}/>
                    )}/>
                    <Route path={process.env.PUBLIC_URL + '/' + device.name + '/' + detailText} render={() => (
                        <DeviceDetail device={device}/>
                    )}/>
                    <Route path={process.env.PUBLIC_URL + '/'} render={() => (
                        <DeviceHome device={device}/>
                    )}/>
                </Switch>
            </div>
            <BottomNavigation
                className={classes.botNav}
                value={device.tab}
                onChange={(event, newValue) => {setTabValue(newValue);}}
                showLabels>
                <BottomNavigationAction component={Link} label={homeText} icon={<HomeIcon/>}
                                        to={process.env.PUBLIC_URL + '/' + device.name + '/' + homeText}/>
                <BottomNavigationAction component={Link} label={mapText} icon={<LocationOnIcon/>}
                                        to={process.env.PUBLIC_URL + '/' + device.name + '/' + mapText}/>
                <BottomNavigationAction component={Link} label={detailText} icon={<DetailIcon/>}
                                        to={process.env.PUBLIC_URL + '/' + device.name + '/' + detailText}/>
            </BottomNavigation>
        </div>);
}

export default DevicePage;
