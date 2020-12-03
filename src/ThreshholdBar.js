import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    thresholdBar: {
        margin: '20px 20%',
    },
    graduation: {
        float: 'left',
        textAlign: 'center'
    },
    bar: {
        float: 'left',
        height: '10px'
    }
}));


function ThreshholdBar(props) {
    let {value, threshhold} = props;
    const classes = useStyles();
    if (value <= threshhold) {
        return(
        <div className={classes.threshholdBar}>
            <div className={classes.bar} style={{'border-top-left-radius': '5px', 'border-bottom-left-radius': '5px', 'backgroundColor': '#6FCF97', 'width': String(value) + '%'}}  key={0}></div>
            <div className={classes.bar} style={{'backgroundColor': '#6FCF97', 'opacity': '0.5', 'width': String(threshhold - value) + '%'}}  key={1}></div>
            <div className={classes.graduation} style={{'color': 'Black'}}  key={2}>|</div>
            <div className={classes.bar} style={{'border-top-right-radius': '5px', 'border-bottom-right-radius': '5px', 'backgroundColor': '#6FCF97', 'opacity': '0.5', 'width': String(100 - (threshhold+.5)) + '%'}}  key={3}></div>
        </div>);
    } else {
        return(
        <div className={classes.threshholdBar}>
            <div className={classes.bar} style={{'border-top-left-radius': '5px', 'border-bottom-left-radius': '5px','backgroundColor': '#F2994A', 'width': String(threshold) + '%'}}  key={0}></div>
            <div className={classes.graduation} style={{'color': 'black'}}  key={1}>|</div>
            <div className={classes.bar} style={{'backgroundColor': '#F2994A', 'width': String(value-threshhold) + '%'}}  key={2}></div>
            <div className={classes.bar} style={{'border-top-right-radius': '5px', 'border-bottom-right-radius': '5px', 'backgroundColor':'#F2994A', 'opacity': '0.5', 'width': String(100 - (threshhold+.5)) + '%'}}  key={3}></div>
        </div>);
    };
}


export default ThreshholdBar;