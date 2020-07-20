import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherComponent from "./WeatherComponent";
import PollutantsComponent from "./PollutantsComponent";
import AirQualityComponent from "./AirQualityComponent";
import AtAGlanceComponent from "./AtAGlanceComponent";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    content: {
        margin: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3)
    }
}));

function DeviceHome(props) {
    const classes = useStyles();
    const { strings, device } = props;
    return (
        <div className={classes.content}>
            {/* At a glance */}
            <Paper elevation={1} className={classes.paper}>
                <AtAGlanceComponent device={device} strings={strings} />
            </Paper>

            {/* Air Quality */}
            <Paper elevation={1} className={classes.paper}>
                <AirQualityComponent device={device} strings={strings} />
            </Paper>

            {/* Pollutants */}
            <Paper elevation={1} className={classes.paper}>
                <PollutantsComponent device={device} strings={strings} />
            </Paper>

            {/* Weather */}
            <Paper elevation={1} className={classes.paper}>
                <WeatherComponent device={device} strings={strings} />
            </Paper>
        </div>);
}

export default DeviceHome;
