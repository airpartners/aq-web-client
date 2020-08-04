import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { pollutantsToShow, Pollutants, pollutantAbbreviationHTML } from './Utils';
import InfoIconPopover from './InfoIconPopover';

const useStyles = makeStyles((theme) => ({
    now: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        [theme.breakpoints.up('lg')]: {
            alignItems: 'center',
        },
    },
    pollutantFullInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    pollutantVal: {
        color: theme.palette.secondary.main,
    },
    pollutantName: {
        opacity: '0.5',
    },
    pollutantHeaderBreak: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    }
}));

function truncateVal(value, pollutant) {
    let ret;
    switch (pollutant) {
        case 'PM25':
            ret = parseFloat(value.toFixed(3));
            break;
        default:
            ret = parseInt(value);
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
                            let val = (typeof device.latest[Pollutants[pollutant].id] != 'undefined') ? device.latest[Pollutants[pollutant].id] : strings['AtAGlance']['Not available'];
                            return (
                                <div key={pollutant} className={classes.pollutantFullInfo}>
                                    {Pollutants[pollutant].showInfo &&
                                        <InfoIconPopover content={strings['PollutantText'][pollutant + ' Info']} />}
                                    <h3>
                                        {pollutantAbbreviationHTML(pollutant)}
                                        {`: `}
                                        <span className={classes.pollutantVal}>
                                            {(val === strings['AtAGlance']['Not available']) ? val : `${truncateVal(val, pollutant)} ${Pollutants[pollutant].unit}`}
                                        </span>
                                        <br className={classes.pollutantHeaderBreak} />
                                        <span className={classes.pollutantName}>
                                            {` - `}
                                            {strings['PollutantText'][pollutant + ' Full Name']}
                                        </span>
                                    </h3>
                                </div>)
                        })}
                    </Grid>
                    <Grid container justify='flex-end'>
                        <p>{strings['AtAGlance']['Last updated at'] + ' ' + lastUpdatedDateTime.toLocaleTimeString(navigator.language, {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</p>
                    </Grid>
                </div>}
        </div>);
}

export default AtAGlanceComponent;
