import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BubbleSVG from "./assets/svg/BubbleSVG";
import Colors from "./assets/Colors";
import Grid from "@material-ui/core/Grid";
import { Pollutants } from "./Utils";

const useStyles = makeStyles((theme) => ({}));

function truncateCurrentDataText(value, pollutant) {
    let ret;
    switch (pollutant) {
        case "PM2.5":
            ret = parseInt(value);
            break;
        case "CO":
            ret = parseInt(value);
            break;
        case "NO2":
            ret = parseInt(value);
            break;
        case "O3":
            ret = parseInt(value);
            break;
        default:
            ret = "??"
    }
    return ret;
}

// TODO: All values are dummy data. Need to update
// - Color based on device.latest
// - Percent of the filled region in the bubble based on device.latest
// - Update standard safe values
// - Localize units
function AirQualityComponent(props) {
    const classes = useStyles();
    const { strings, device } = props;
    return (
        <div>
            {device.latest &&
                <div>
                    <h2>{strings['Air Quality']}</h2>
                    <Grid container>
                        <Grid>
                            <BubbleSVG color={Colors.red} percent={65}
                                standardText1={`${Pollutants.PM25.safe} ${Pollutants.PM25.unit}`}
                                standardText2={strings["Bubble"]["PM2.5"]["standardText2"]}
                                standardText3={strings["Bubble"]["PM2.5"]["standardText3"]}
                                currentText={`${truncateCurrentDataText(device.latest.pm25, "PM2.5")}
                                ${Pollutants.PM25.unit}`}
                                pollutantText={Pollutants.PM25.name}
                                currentTextLength={55} pollutantTextLength={45} />
                            <BubbleSVG color={Colors.yellow} percent={60}
                                standardText1={`${Pollutants.CO.safe} ${Pollutants.CO.unit}`}
                                standardText2={strings["Bubble"]["CO"]["standardText2"]}
                                standardText3={strings["Bubble"]["CO"]["standardText3"]}
                                currentText={`${truncateCurrentDataText(device.latest.co, "CO")}
                                ${Pollutants.CO.unit}`}
                                pollutantText={Pollutants.CO.name}
                                currentTextLength={50} pollutantTextLength={20} />
                        </Grid>
                        <Grid>
                            <BubbleSVG color={Colors.green} percent={53}
                                standardText1={`${Pollutants.NO2.safe} ${Pollutants.NO2.unit}`}
                                standardText2={strings["Bubble"]["NO2"]["standardText2"]}
                                standardText3={strings["Bubble"]["NO2"]["standardText3"]}
                                currentText={`${truncateCurrentDataText(device.latest.no2, "NO2")}
                                ${Pollutants.NO2.unit}`}
                                pollutantText={Pollutants.NO2.name}
                                currentTextLength={50} pollutantTextLength={28} />
                            <BubbleSVG color={Colors.green} percent={45}
                                standardText1={`${Pollutants.O3.safe} ${Pollutants.O3.unit}`}
                                standardText2={strings["Bubble"]["O3"]["standardText2"]}
                                standardText3={strings["Bubble"]["O3"]["standardText3"]}
                                currentText={`${truncateCurrentDataText(device.latest.o3, "O3")}
                                ${Pollutants.O3.unit}`}
                                pollutantText={Pollutants.O3.name}
                                currentTextLength={50} pollutantTextLength={18} />
                        </Grid>
                    </Grid>
                </div>}
        </div>);
}

export default AirQualityComponent;
