import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloudSVG from "./assets/svg/CloudSVG";
import Colors from "./assets/Colors";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function AtAGlanceComponent(props) {
    let { strings, device, cloudWidth } = props;
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
                return strings['Bad'];
            case 'SN000-046':
                return strings['Fine'];
            case 'SN000-049':
                return strings['Good'];
            case 'SN000-062':
                return strings['Fine'];
            case 'SN000-067':
                return strings['Bad'];
            case 'SN000-072':
                return strings['Good'];
            default:
                return strings['Good'];
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
            case strings['Bad']:
                return Colors.red;
            case strings['Fine']:
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
            case strings['Bad']:
                return strings['Recommendation']['Bad'];
            case strings['Fine']:
                return strings['Recommendation']['Fine'];
            default:
                return strings['Recommendation']['Good'];
        }
    };
    return (
        <div>
            {device.data &&
                <div>
                    <h2>{strings['Now']}</h2>
                    <Grid className={classes.cloud} container justify="center" direction="column" alignItems="center">
                        <CloudSVG size={cloudWidth} color={getColor(airQuality)} />
                        <h2 style={{ color: getColor(airQuality) }}>{airQuality}</h2>
                    </Grid>
                    <Grid className={classes.cloud} container justify="flex-end">
                        <p>{strings['Last updated at'] + " " + device.lastUpdated.toLocaleTimeString(navigator.language, {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</p>
                    </Grid>
                    <h2>{strings['Recommendations']}</h2>
                    <p>{getRecommendation(airQuality)}</p>
                </div>}
        </div>);
}

export default AtAGlanceComponent;
