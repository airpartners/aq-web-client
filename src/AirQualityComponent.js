import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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
            </div>}
        </div>);
}

export default AirQualityComponent;
