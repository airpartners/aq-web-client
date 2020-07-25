import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { pollutantsToShow, Pollutants } from "./Utils";

const useStyles = makeStyles((theme) => ({
    now: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        [theme.breakpoints.up('md')]: {
            alignItems: 'center',
        },
    },
    val: {
        color: theme.palette.secondary.main,
    }
}));

function truncateVal(value, pollutant) {
    let ret;
    switch (pollutant) {
        case "PM25":
            ret = parseInt(value);
            break;
        case "CO":
            ret = parseInt(value);
            break;
        case "NO2":
            ret = parseInt(value);
            break;
        case "O3":
            ret = parseInt(value);
            break;
        default:
            ret = "??"
    }
    return ret;
}

function AtAGlanceComponent(props) {
    let { strings, device } = props;
    const classes = useStyles();
    const lastUpdatedDateTime = device.latest && new Date(device.latest.timestamp_local);

    return (
        <div>
            {device.latest &&
                <div>
                    <h2>{strings['AtAGlance']['Now']}</h2>
                    <Grid className={classes.now} container>
                        {pollutantsToShow.map(pollutant => {
                            let val = (typeof device.latest[Pollutants[pollutant].id] != 'undefined') ? device.latest[Pollutants[pollutant].id] : "Not available";
                            return <h3 key={pollutant}>
                                {`${strings['PollutantText'][pollutant + " Full Name"]} (${strings['PollutantText'][pollutant]}): `}
                                <span className={classes.val}>
                                    {`${truncateVal(val, pollutant)} ${Pollutants[pollutant].unit}`}
                                </span>
                            </h3>
                        })}
                    </Grid>
                    <Grid container justify="flex-end">
                        <p>{strings['AtAGlance']['Last updated at'] + " " + lastUpdatedDateTime.toLocaleTimeString(navigator.language, {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</p>
                    </Grid>
                </div>}
        </div>);
}

export default AtAGlanceComponent;
