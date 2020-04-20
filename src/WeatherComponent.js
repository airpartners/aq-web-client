import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DropletSVG from "./assets/svg/DropletSVG";
import ThermometerSVG from "./assets/svg/ThermometerSVG";
import {Navigation} from "@material-ui/icons";
import Colors from "./assets/Colors";

const useStyles = makeStyles((theme) => ({}));

function WeatherComponent(props) {
    const {t} = props;
    const classes = useStyles();
    const {device} = props;
    return (
        <div>
            {device.data.data &&
            <div>
                <h2>{t('Weather')}</h2>
                <Grid container justify="center">
                    <Grid container item xs alignItems="center">
                        <Grid>
                            <ThermometerSVG/>
                        </Grid>
                        <Grid>
                            <p>{device.data.data[0].temp_manifold + "\u00b0 F"}</p>
                            <p>{t('Temperature')}</p>
                        </Grid>
                    </Grid>
                    <Grid container item xs alignItems="center">
                        <Grid>
                            <DropletSVG/>
                        </Grid>
                        <Grid>
                            <p>{device.data.data[0].rh_manifold + " %"}</p>
                            <p>{t('Humidity')}</p>
                        </Grid>
                    </Grid>
                    <Grid container item xs alignItems="center">
                        <Grid>
                            <Navigation style={{color: Colors.primaryColor, fontSize: 50}}
                                        transform={`rotate(${device.data.data[0].wind_dir})`}/>
                        </Grid>
                        <Grid>
                            <p>{device.data.data[0].wind_speed + " m/s"}</p>
                            <p>{t('Wind')}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </div>}
        </div>);
}

export default WeatherComponent;
