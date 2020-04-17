import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BubbleSVG from "./assets/svg/BubbleSVG";

const useStyles = makeStyles((theme) => ({}));

function AirQualityComponent(props) {
    const {t} = props;
    const classes = useStyles();
    const {device} = props;
    return (
        <div>
            {device.data.data &&
            <div>
                <h2>{t('Air Quality')}</h2>
                <BubbleSVG color="#B53F3F" percent={80}/>
                <BubbleSVG color="#F2C94C" percent={40}/>
                <BubbleSVG/>
            </div>}
        </div>);
}

export default AirQualityComponent;
