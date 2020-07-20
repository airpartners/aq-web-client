import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DropletSVG from "./assets/svg/DropletSVG";
import ThermometerSVG from "./assets/svg/ThermometerSVG";
import { Navigation } from "@material-ui/icons";
import Colors from "./assets/Colors";

const useStyles = makeStyles((theme) => ({}));

function WeatherComponent(props) {
    const classes = useStyles();
    const { strings, device } = props;
    return (
        <div>
            {device.data &&
                <div>
                    <h2>{strings['Weather']}</h2>
                    <Grid container justify="center">
                        {/* Temperature status */}
                        <Grid container item xs alignItems="center">
                            <Grid>
                                <ThermometerSVG />
                            </Grid>
                            <Grid>
                                <p>{device.data[0].temp_manifold + "\u00b0 F"}</p>
                                <p>{strings['Temperature']}</p>
                            </Grid>
                        </Grid>
                        {/* Humidity status */}
                        <Grid container item xs alignItems="center">
                            <Grid>
                                <DropletSVG />
                            </Grid>
                            <Grid>
                                <p>{device.data[0].rh_manifold + " %"}</p>
                                <p>{strings['Humidity']}</p>
                            </Grid>
                        </Grid>
                        {/* Wind status */}
                        <Grid container item xs alignItems="center">
                            <Grid>
                                <Navigation style={{ color: Colors.primaryColor, fontSize: 50 }}
                                    transform={`rotate(${device.data[0].wind_dir})`} />
                            </Grid>
                            <Grid>
                                <p>{device.data[0].wind_speed + " m/s"}</p>
                                <p>{strings['Wind']}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>}
        </div>);
}

export default WeatherComponent;
