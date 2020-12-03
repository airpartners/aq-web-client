import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { pollutantsToShow, Pollutants, pollutantAbbreviationHTML } from './Utils';
import InfoIconPopover from './InfoIconPopover';
import ThresholdBar from './ThresholdBar';

const useStyles = makeStyles((theme) => ({
    now: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        [theme.breakpoints.up('lg')]: {

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

function AtAGlanceComponent(props) {
    let { strings, device } = props;
    let n = pollutantsToShow.length;
    const classes = useStyles();
    const lastUpdatedDateTime = device.latest && new Date(device.latest.timestamp_local);
    console.log(pollutantsToShow.slice(Math.ceil(n/2)));
    return (
        <div>
            {device.latest &&
                <div>
                    <h2>{strings['AtAGlance']['Now']}</h2>
                    <Grid className={classes.now} container>
                        {pollutantsToShow.map(pollutant => {
                            let val = (typeof device.latest[Pollutants[pollutant].id] != 'undefined') ? device.latest[Pollutants[pollutant].id] : strings['AtAGlance']['Data not available'];
                            return (
                                    <PollutantBarComponent key={pollutant} pollutant={pollutant} strings={strings} val={val}/>)
                        })}
                    </Grid>
                    <Grid container justify='flex-end'>
                        <p>{strings['AtAGlance']['Last updated'] + ': ' + lastUpdatedDateTime.toLocaleString(strings['code'], {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                        })}</p>
                    </Grid>
                </div>}
        </div>);
}

export default AtAGlanceComponent;
