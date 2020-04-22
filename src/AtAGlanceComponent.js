import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CloudSVG from "./assets/svg/CloudSVG";
import Colors from "./assets/Colors";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    cloud: {
        [theme.breakpoints.down('xs')]: {
            width: CloudSVG.medium,
        },
        width: CloudSVG.large,
    }
}));

function AtAGlanceComponent(props) {
    const {t} = props;
    const classes = useStyles();
    const {device} = props;
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const cloudWidth = isMobile ? CloudSVG.medium : CloudSVG.large;

    const getAirQuality = (device) => {
        // TODO: Update this func to work with real data
        let r = Math.floor((Math.random() * 3) + 1);
        switch (r) {
            case 1:
                return t('Bad');
            case 2:
                return t('Fine');
            default:
                return t('Good');
        }
    };
    const airQuality = getAirQuality(device);
    const getColor = (indicator) => {
        switch (indicator) {
            case t('Bad'):
                return Colors.red;
            case t('Fine'):
                return Colors.yellow;
            default:
                return Colors.green;
        }
    };
    const getRecommendation = (indicator) => {
        switch (indicator) {
            case t('Bad'):
                return t('Recommendation.Bad');
            case t('Fine'):
                return t('Recommendation.Fine');
            default:
                return t('Recommendation.Good');
        }
    };
    return (
        <div>
            {device.data &&
            <div>
                <h2>{t('Now')}</h2>
                <Grid className={classes.cloud} container justify="center">
                    <CloudSVG size={cloudWidth} color={getColor(airQuality)}/>
                    <h2 style={{color: getColor(airQuality)}}>{airQuality}</h2>
                </Grid>
                <h2>{t('Recommendations')}</h2>
                <p>{getRecommendation(airQuality)}</p>
            </div>}
        </div>);
}

export default AtAGlanceComponent;
