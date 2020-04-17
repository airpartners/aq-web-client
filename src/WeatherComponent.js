import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
                <Grid container justify="center" spacing={3}>
                    <Grid item xs>
                        <p>{device.data.data[0].temp_manifold + "\u00b0 F"}</p>
                        <p>{t('Temperature')}</p>
                    </Grid>
                    <Grid item xs>
                        <p>{device.data.data[0].rh_manifold + " %"}</p>
                        <p>{t('Humidity')}</p>
                    </Grid>
                    <Grid item xs>
                        <p>{device.data.data[0].wind_speed + " m/s"}</p>
                        <p>{t('Wind')}</p>
                    </Grid>
                </Grid>
            </div>}
        </div>);
}

export default WeatherComponent;
