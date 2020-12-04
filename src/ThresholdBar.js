import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Colors from "./assets/Colors";

const verticalBarPercent = 35;
const useStyles = makeStyles((theme) => ({
    thresholdBar: {
        position: "relative",
        maxWidth: "100%",
    },
    bar: {
        position: "absolute",
        height: "10px",
        background: Colors.grey,
        borderRadius: "100px",
    },
    lightBar: {
        width: "100%",
        maxWidth: "100%",
        opacity: "60%",
    },
    verticalBar: {
        position: "absolute",
        background: Colors.black,
        top: "-2px",
        width: "1px",
        height: '14px',
        marginLeft: verticalBarPercent + "%",
    }
}));


function ThresholdBar(props) {
    let {value, threshold, barColor, showVerticalBar} = props;
    const classes = useStyles();
    let percentage = value / threshold * verticalBarPercent;
    percentage = Math.min(100, Math.max(percentage, 2));
    return (
        <div className={classes.thresholdBar}>
            <div className={`${classes.lightBar} ${classes.bar}`} style={{background: barColor}}/>
            <div className={`${classes.bar}`}
                 style={{width: percentage + "%", background: barColor, opacity: (value === 0 ? "0%" : "100%")}}/>
            {showVerticalBar && <div className={classes.verticalBar}/>}
        </div>);
}


export default ThresholdBar;
