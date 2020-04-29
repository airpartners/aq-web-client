import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BubbleSVG from "./assets/svg/BubbleSVG";
import Colors from "./assets/Colors";
import Grid from "@material-ui/core/Grid";
import {Pollutants} from "./Utils";

const useStyles = makeStyles((theme) => ({}));

// TODO: All values are dummy data. Need to update
// - Color based on device.data
// - Percent of the filled region in the bubble based on device.data
// - Update standard safe values
// - Update current concentration values
// - Localize all texts using the `t` variable
function AirQualityComponent(props) {
    const classes = useStyles();
    const {t, device} = props;
    return (
        <div>
            {device.data &&
            <div>
                <h2>{t('Air Quality')}</h2>
                <Grid container>
                    <Grid>
                        <BubbleSVG color={Colors.red} percent={65}
                                   standardText1={`${Pollutants.PM25.safe} ${Pollutants.PM25.unit}`}
                                   standardText2="EPA 24 hour" standardText3="standard"
                                   currentText={`37 ${Pollutants.PM25.unit}`} pollutantText={Pollutants.PM25.name}
                                   currentTextLength={55} pollutantTextLength={45}/>
                        <BubbleSVG color={Colors.yellow} percent={60}
                                   standardText1={`${Pollutants.CO.safe} ${Pollutants.CO.unit}`}
                                   standardText2="EPA 1 hour" standardText3="standard"
                                   currentText={`36 ${Pollutants.CO.unit}`} pollutantText={Pollutants.CO.name}
                                   currentTextLength={50} pollutantTextLength={20}/>
                    </Grid>
                    <Grid>
                        <BubbleSVG color={Colors.green} percent={53}
                                   standardText1={`${Pollutants.NO2.safe} ${Pollutants.NO2.unit}`}
                                   standardText2="EPA 8 hour" standardText3="standard"
                                   currentText={`100 ${Pollutants.NO2.unit}`} pollutantText={Pollutants.NO2.name}
                                   currentTextLength={50} pollutantTextLength={28}/>
                        <BubbleSVG color={Colors.green} percent={45}
                                   standardText1={`${Pollutants.O3.safe} ${Pollutants.O3.unit}`}
                                   standardText2="EPA 8 hour" standardText3="standard"
                                   currentText={`69 ${Pollutants.O3.unit}`} pollutantText={Pollutants.O3.name}
                                   currentTextLength={50} pollutantTextLength={18}/>
                    </Grid>
                </Grid>
            </div>}
        </div>);
}

export default AirQualityComponent;
