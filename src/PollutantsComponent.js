import React from "react";
import CanvasJSReact from './assets/js/canvasjs.react';
import { makeStyles } from "@material-ui/core/styles";
import Colors from "./assets/Colors";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Pollutants, pollutantNameHTML } from "./Utils";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const useStyles = makeStyles((theme) => ({
    tabView: {
        marginBottom: theme.spacing(3),
    }
}))

function PollutantsComponent(props) {
    const classes = useStyles();
    const { strings, device } = props;
    const [pollutantId, setPollutantId] = React.useState(0);
    const handleTabChange = (event, newId) => {
        setPollutantId(newId);
    };
    const getPollutant = (id) => {
        switch (id) {
            case 0:
                return Pollutants.PM25.id;
            case 1:
                return Pollutants.CO.id;
            case 2:
                return Pollutants.NO2.id;
            case 3:
                return Pollutants.O3.id;
            default:
                return Pollutants.NO.id;
        }
    };
    const getUnit = (id) => {
        switch (id) {
            case 0:
                return Pollutants.PM25.unit;
            case 1:
                return Pollutants.CO.unit;
            case 2:
                return Pollutants.NO2.unit;
            case 3:
                return Pollutants.O3.unit;
            default:
                return Pollutants.NO.unit;
        }
    };
    const getSafeValue = (id) => {
        return 0.045; // TODO: remove this when safe values are determined
        switch (id) {
            case 0:
                return Pollutants.PM25.safe;
            case 1:
                return Pollutants.CO.safe;
            case 2:
                return Pollutants.NO2.safe;
            default:
                return Pollutants.O3.safe;
        }
    };
    const getData = (device, pollutantId) => {
        let data = [];
        let pollutant = getPollutant(pollutantId);
        if (!device.graph)
            return data;

        for (let dataPoint of device.graph) {
            if (typeof dataPoint[pollutant] != 'undefined')
                data.push({ x: new Date(dataPoint.timestamp_local), y: dataPoint[pollutant] });
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
            title: getUnit(pollutantId),
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
            dataPoints: getData(device, pollutantId),
        }]
    }
    return (
        <div>
            {device.graph &&
                <div>
                    <h2>{strings['Pollutants']}</h2>
                    <Tabs className={classes.tabView}
                        value={pollutantId}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered>
                        <Tab label={pollutantNameHTML(Pollutants.PM25.name)} />
                        <Tab label={pollutantNameHTML(Pollutants.CO.name)} />
                        <Tab label={pollutantNameHTML(Pollutants.NO2.name)} />
                        <Tab label={pollutantNameHTML(Pollutants.O3.name)} />
                        <Tab label={pollutantNameHTML(Pollutants.NO.name)} />
                    </Tabs>
                    <CanvasJSChart options={options} />
                </div>}
        </div>);
}

export default PollutantsComponent;
