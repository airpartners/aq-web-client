import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    thresholdBar: {
        margin: '20px 20%',
    },
    bar: {
        float: 'left',
        height: '10px'
    }
}));


function ThresholdBar(props) {
    let {value, threshold} = props;
    const classes = useStyles();
    if (value <= threshold) {
        return(
        <div className={classes.thresholdBar}>
            <div className={classes.bar} style={{'border-top-left-radius': '5px', 'border-bottom-left-radius': '5px', 'backgroundColor': '#6FCF97', 'width': String(value) + '%'}}  key={0}></div>
            <div className={classes.bar} style={{'backgroundColor': '#6FCF97', 'opacity': '0.5', 'width': String(threshold - value) + '%'}}  key={1}></div>
            <div className={classes.bar} style={{'backgroundColor': 'Black', 'width': '1px'}} key={2}></div>
            <div className={classes.bar} style={{'border-top-right-radius': '5px', 'border-bottom-right-radius': '5px', 'backgroundColor': '#6FCF97', 'opacity': '0.5', 'width': String(99 - (threshold)) + '%'}}  key={3}></div>
        </div>);
    } else {
        return(
        <div className={classes.thresholdBar}>
            <div className={classes.bar} style={{'border-top-left-radius': '5px', 'border-bottom-left-radius': '5px','backgroundColor': '#F2994A', 'width': String(threshold) + '%'}}  key={0}></div>
            <div className={classes.bar} style={{'backgroundColor': 'Black', 'width': '1px'}}  key={1}></div>
            <div className={classes.bar} style={{'backgroundColor': '#F2994A', 'width': String(value-threshold) + '%'}}  key={2}></div>
            <div className={classes.bar} style={{'border-top-right-radius': '5px', 'border-bottom-right-radius': '5px', 'backgroundColor':'#F2994A', 'opacity': '0.5', 'width': String(99 - threshold) + '%'}}  key={3}></div>
        </div>);
    };
}


export default ThresholdBar;