import React from "react";
import CanvasJSReact from './assets/js/canvasjs.react';
import {makeStyles} from "@material-ui/core/styles";
import Colors from "./assets/Colors";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Pollutants} from "./Utils";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const useStyles = makeStyles((theme) => ({
    tabView: {
        marginBottom: theme.spacing(3),
    }
}))

function PollutantsComponent(props) {
    const {t} = props;
    const classes = useStyles();
    const {device} = props;
    const [pollutantId, setPollutantId] = React.useState(0);
    const handleTabChange = (event, newId) => {
        setPollutantId(newId);
    };
    const isPollutantDataAvailable = (device, pollutant) => {
        return Array.isArray(device.data) && device.data.length && device.data[0][pollutant];
    };
    const getPollutant = (id) => {
        switch (id) {
            case 0:
                return Pollutants.PM25.id;
            case 1:
                return Pollutants.CO.id;
            case 2:
                return Pollutants.NO2.id;
            default:
                return Pollutants.O3.id;
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
            default:
                return Pollutants.O3.unit;
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
        let pollutant = getPollutant(pollutantId);
        if (!isPollutantDataAvailable(device, pollutant))
            return [];

        // Filter data so that only pick data points that are at least one hour apart
        let time = new Date(device.data[0].timestamp_local);
        let data = [{x: time, y: device.data[0][pollutant]}];
        for (let d of device.data) {
            let dTime = new Date(d.timestamp_local);
            let timeDiff = (time - dTime) / 1000 / 60; // in minutes
            if (timeDiff > 60) {
                data.push({x: dTime, y: d[pollutant]});
                time = dTime;
            }
            if (data.length > 24)
                break;
        }
        return data;
    };
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title: {
            text: ""
        },
        axisY: {
            title: getUnit(pollutantId),
            includeZero: false,
            stripLines: [{
                value: getSafeValue(pollutantId),
                color: Colors.green,
                labelFontColor: Colors.green,
                lineDashType: "dash",
                thickness: 3,
                label: t('Safe')
            }]
        },
        axisX: {
            title: "Time",
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
            {device.data &&
            <div>
                <h2>{t('Pollutants')}</h2>
                <Tabs className={classes.tabView}
                      value={pollutantId}
                      onChange={handleTabChange}
                      indicatorColor="primary"
                      textColor="primary"
                      centered>
                    <Tab label={Pollutants.PM25.name}/>
                    <Tab label={Pollutants.CO.name}/>
                    <Tab label={Pollutants.NO2.name}/>
                    <Tab label={Pollutants.O3.name}/>
                </Tabs>
                <CanvasJSChart options={options}/>
            </div>}
        </div>);
}

export default PollutantsComponent;
