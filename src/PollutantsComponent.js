import React from "react";
import CanvasJSReact from './assets/js/canvasjs.react';
import {makeStyles} from "@material-ui/core/styles";
import Colors from "./assets/Colors";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
    tabView: {
        marginBottom: theme.spacing(3),
    }
}))
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function PollutantsComponent(props) {
    const {t} = props;
    const classes = useStyles();
    const {device} = props;
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title: {
            text: "Bounce Rate by Week of Year"
        },
        axisY: {
            title: "Bounce Rate",
            includeZero: false,
            suffix: "%"
        },
        axisX: {
            title: "Week of Year",
            prefix: "W",
            interval: 2
        },
        data: [{
            type: "spline",
            toolTipContent: "Week {x}: {y}%",
            color: Colors.primaryColor,
            dataPoints: [
                {x: 1, y: 64},
                {x: 2, y: 61},
                {x: 3, y: 64},
                {x: 4, y: 62},
                {x: 5, y: 64},
                {x: 6, y: 60},
                {x: 7, y: 58},
                {x: 8, y: 59},
                {x: 9, y: 53},
                {x: 10, y: 54},
                {x: 11, y: 61},
                {x: 12, y: 60},
                {x: 13, y: 55},
                {x: 14, y: 60},
                {x: 15, y: 56},
                {x: 16, y: 60},
                {x: 17, y: 59.5},
                {x: 18, y: 63},
                {x: 19, y: 58},
                {x: 20, y: 54},
                {x: 21, y: 59},
                {x: 22, y: 64},
                {x: 23, y: 59}
            ]
        }]
    }
    return (
        <div>
            {device.data &&
            <div>
                <h2>{t('Pollutants')}</h2>
                <Tabs className={classes.tabView}
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      centered>
                    <Tab label="PM2.5"/>
                    <Tab label="CO"/>
                    <Tab label="NO2"/>
                    <Tab label="O3"/>
                </Tabs>
                <CanvasJSChart options={options}/>
            </div>}
        </div>);
}

export default PollutantsComponent;
