import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloudSVG from "./assets/svg/CloudSVG";
import Colors from "./assets/Colors";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function AtAGlanceComponent(props) {
    let { t, device, cloudWidth } = props;
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('xs'));
    if (!cloudWidth)
        cloudWidth = isMobile ? CloudSVG.medium : CloudSVG.large;

    const useStyles = makeStyles((theme) => ({
        cloud: {
            width: cloudWidth,
        }
    }));
    const classes = useStyles();

    /**
     * Get the Air Quality condition from device data
     * @param device: a device instance
     * @returns {string}: translated text of air quality condition
     */
    const getAirQuality = (device) => {
        // TODO: Update this func to work with real data
        // let r = Math.floor((Math.random() * 3) + 1);
        switch (device.id) {
            case 'SN000-045':
                return t('Bad');
            case 'SN000-046':
                return t('Fine');
            case 'SN000-049':
                return t('Good');
            case 'SN000-062':
                return t('Fine');
            case 'SN000-067':
                return t('Bad');
            case 'SN000-072':
                return t('Good');
            default:
                return t('Good');
        }
    };
    const airQuality = getAirQuality(device);

    /**
     * Get corresponding color from the indicator
     * @param indicator: translated text for bad, fine and good
     * @returns {string} HEX color
     */
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

    /**
     * Get corresponding recommendations from the indicator
     * @param indicator: translated text for bad, fine and good
     * @returns {string} translated recommendations
     */
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
                    <Grid className={classes.cloud} container justify="center" direction="column" alignItems="center">
                        <CloudSVG size={cloudWidth} color={getColor(airQuality)} />
                        <h2 style={{ color: getColor(airQuality) }}>{airQuality}</h2>
                    </Grid>
                    <Grid className={classes.cloud} container justify="flex-end">
                        <p>{t('Last updated at') + " " + device.lastUpdated.toLocaleTimeString(navigator.language, {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</p>
                    </Grid>
                    <h2>{t('Recommendations')}</h2>
                    <p>{getRecommendation(airQuality)}</p>
                </div>}
        </div>);
}

export default AtAGlanceComponent;
