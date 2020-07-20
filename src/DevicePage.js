import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { drawerWidth } from "./Utils";
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
        width: '100%',
        bottom: 0,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    }
}));

/**
 * DevicePage is a container for DeviceHome and DeviceMap
 */
function DevicePage(props) {
    const classes = useStyles();
    const { queryParams, strings, deviceId, bottomTab, deviceDict } = props;
    const device = deviceDict[deviceId];

    let componentsToRender;
    let value;

    if (bottomTab === "Home") {
        componentsToRender = <DeviceHome strings={strings} device={device} />;
        value = 0;
    } else if (bottomTab === "Map") {
        componentsToRender = <DeviceMap strings={strings} deviceId={deviceId} deviceDict={deviceDict} />;
        value = 1;
    } else {
        // TODO: update this at some point to show something nicer
        componentsToRender = (<h1>404 not found</h1>);
    }

    return (
        <div>
            {/* Main content: either DeviceHome or DeviceMap */}
            <div className={classes.content}>
                {componentsToRender}
            </div>

            {/* Bottom Navigation to switch between DeviceHome and DeviceMap*/}
            <BottomNavigation
                className={classes.botNav}
                value={value}
                showLabels>
                <BottomNavigationAction component={Link} label={strings["BottomNav"]["Home"]} icon={<HomeIcon />}
                    to={`${process.env.PUBLIC_URL}/${device.id}/Home${queryParams}`} />
                <BottomNavigationAction component={Link} label={strings["BottomNav"]["Map"]} icon={<LocationOnIcon />}
                    to={`${process.env.PUBLIC_URL}/${device.id}/Map${queryParams}`} />
            </BottomNavigation>
        </div>);
}

export default DevicePage;
