import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BubbleSVG from "./assets/svg/BubbleSVG";
import Colors from "./assets/Colors";

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
                <BubbleSVG color={Colors.red} percent={80}/>
                <BubbleSVG color={Colors.yellow} percent={40}/>
                <BubbleSVG/>
            </div>}
        </div>);
}

export default AirQualityComponent;
