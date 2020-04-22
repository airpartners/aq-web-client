import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BubbleSVG from "./assets/svg/BubbleSVG";
import Colors from "./assets/Colors";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({}));

function AirQualityComponent(props) {
    const {t} = props;
    const classes = useStyles();
    const {device} = props;
    return (
        <div>
            {device.data &&
            <div>
                <h2>{t('Air Quality')}</h2>
                <Grid container>
                    <Grid>
                        <BubbleSVG color={Colors.red} percent={65}
                                   standardText1="35 ug/m3" standardText2="EPA 24 hour" standardText3="standard"
                                   currentText="37 ug/m3" pollutantText="PM2.5"
                                   currentTextLength={55} pollutantTextLength={45}/>
                        <BubbleSVG color={Colors.yellow} percent={60}
                                   standardText1="35 ppm" standardText2="EPA 1 hour" standardText3="standard"
                                   currentText="36 ppm" pollutantText="CO"
                                   currentTextLength={50} pollutantTextLength={20}/>
                    </Grid>
                    <Grid>
                        <BubbleSVG color={Colors.green} percent={53}
                                   standardText1="105 ppb" standardText2="EPA 8 hour" standardText3="standard"
                                   currentText="100 ppb" pollutantText="NO2"
                                   currentTextLength={50} pollutantTextLength={28}/>
                        <BubbleSVG color={Colors.green} percent={45}
                                   standardText1="69 ppb" standardText2="EPA 8 hour" standardText3="standard"
                                   currentText="69 ppb" pollutantText="O3"
                                   currentTextLength={50} pollutantTextLength={18}/>
                    </Grid>
                </Grid>
            </div>}
        </div>);
}

export default AirQualityComponent;
