import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import DetailIcon from '@material-ui/icons/BubbleChart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;
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

function DevicePage(props) {
    const [tabValue, setTabValue] = React.useState(0);
    const classes = useStyles();
    const {device} = props;
    return (
        <div>
            <div className={classes.content}>
                <Typography paragraph>
                    {device.name}
                </Typography>
            </div>
            <BottomNavigation
                className={classes.botNav}
                value={tabValue}
                onChange={(event, newValue) => {setTabValue(newValue);}}
                showLabels>
                <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
                <BottomNavigationAction label="Map" icon={<LocationOnIcon/>}/>
                <BottomNavigationAction label="Detail" icon={<DetailIcon/>}/>
            </BottomNavigation>
        </div>);
}

export default DevicePage;
