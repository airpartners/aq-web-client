import React from "react";
import CanvasJSReact from './assets/js/canvasjs.react';
import { makeStyles } from "@material-ui/core/styles";
import Colors from "./assets/Colors";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Pollutants, pollutantNameHTML, pollutantsToShow } from "./Utils";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const useStyles = makeStyles((theme) => ({
    tabView: {
        marginBottom: theme.spacing(3),
    },
    tabRoot: {
        minWidth: "72px",
        [theme.breakpoints.up('sm')]: {
            minWidth: "90px",
        },
        [theme.breakpoints.up('md')]: {
            minWidth: "105px",
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: "160px",
        },
        [theme.breakpoints.up('xl')]: {
            minWidth: "250px",
        },
    }
}))

function PollutantsComponent(props) {
    const classes = useStyles();
    const { strings, device } = props;
    const [activeTab, setActiveTab] = React.useState(0);
    const handleTabChange = (event, newId) => {
        setActiveTab(newId);
    };
    const getSafeValue = (id) => {
        return 0.045; // TODO: remove this when safe values are determined
    };
    const getData = (device, pollutantId) => {
        let data = [];
        if (!device.graph)
            return data;

        for (let dataPoint of device.graph) {
            if (typeof dataPoint[pollutantId] != 'undefined')
                data.push({ x: new Date(dataPoint.timestamp_local), y: dataPoint[pollutantId] });
        }
        return data;
    };
    const options = {
        animationEnabled: true,
        exportEnabled: false, // disabling this because there isn't a simple way to translate the text
        theme: "light2", // "light1", "dark1", "dark2"
        title: {
            text: ""
        },
        axisY: {
            title: Pollutants[pollutantsToShow[activeTab]].unit,
            includeZero: false,
            // stripLines: [{
            //     value: getSafeValue(pollutantId),
            //     color: Colors.green,
            //     labelFontColor: Colors.green,
            //     lineDashType: "dash",
            //     thickness: 3,
            //     label: strings['Safe']
            // }]
        },
        axisX: {
            title: strings["Graph"]["Time"],
            interval: 2,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        data: [{
            type: "spline",
            color: Colors.primaryColor,
            xValueFormatString: "DDD hh:mm",
            dataPoints: getData(device, Pollutants[pollutantsToShow[activeTab]].id),
        }]
    }
    return (
        <div>
            {device.graph &&
                <div>
                    <h2>{strings['Pollutants']}</h2>
                    <Tabs className={classes.tabView}
                        value={activeTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered>
                        {pollutantsToShow.map(pollutant => {
                            return <Tab label={pollutantNameHTML(Pollutants[pollutant].name)} key={pollutant}
                                classes={{
                                    root: classes.tabRoot,
                                }} />
                        })}
                    </Tabs>
                    <CanvasJSChart options={options} />
                </div>}
        </div>);
}

export default PollutantsComponent;
