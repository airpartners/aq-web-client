import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import WeatherComponent from "./WeatherComponent";
import PollutantsComponent from "./PollutantsComponent";
import AirQualityComponent from "./AirQualityComponent";
import AtAGlanceComponent from "./AtAGlanceComponent";

const useStyles = makeStyles((theme) => ({}));

function DeviceHome(props) {
    const {t} = props;
    const classes = useStyles();
    const {device, deviceDict} = props;
    return (
        <div>
            {/* At a glance */}
            <AtAGlanceComponent device={device} t={t}/>

            {/* Air Quality */}
            <AirQualityComponent device={device} t={t}/>

            {/* Pollutants */}
            <PollutantsComponent device={device} t={t}/>

            {/* Weather */}
            <WeatherComponent device={device} t={t}/>
        </div>);
}

export default DeviceHome;
