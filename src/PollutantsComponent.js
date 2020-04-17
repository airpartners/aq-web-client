import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

function PollutantsComponent(props) {
    const {t} = props;
    const classes = useStyles();
    const {device} = props;
    return (
        <div>
            {device.data.data &&
            <div>
                <h2>{t('Pollutants')}</h2>
            </div>}
        </div>);
}

export default PollutantsComponent;
