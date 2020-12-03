import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherComponent from "./WeatherComponent";
import PollutantsComponent from "./PollutantsComponent";
import AtAGlanceComponent from "./AtAGlanceComponent";
import Paper from "@material-ui/core/Paper";
import { ClipLoader } from "react-spinners";

const useStyles = makeStyles((theme) => ({
    content: {
        margin: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
    }
}));

function DeviceHome(props) {
    const classes = useStyles();
    const { strings, device } = props;
    return (
        <div className={classes.content}>
            {/* At a glance */}
            <Paper className={classes.paper} key="at-a-glance">
                {device.latest ?
                    (<AtAGlanceComponent device={device} strings={strings} />) :
                    (<ClipLoader size={150} />)}
            </Paper>

            {/* Pollutants */}
            <Paper className={classes.paper} key="pollutants">
                {device.graph ?
                    (<PollutantsComponent device={device} strings={strings} />) :
                    (<ClipLoader size={150} />)}
            </Paper>

            {/* Weather */}
            <Paper className={classes.paper} key="weather">
                {device.latest ?
                    (<WeatherComponent device={device} strings={strings} />) :
                    (<ClipLoader size={150} />)}
            </Paper>
        </div>);
}

export default DeviceHome;
