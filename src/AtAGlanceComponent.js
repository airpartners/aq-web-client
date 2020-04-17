import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

function AtAGlanceComponent(props) {
    const {t} = props;
    const classes = useStyles();
    const {device} = props;
    return (
        <div>
            {device.data.data &&
            <div>
                <h2>{t('Now')}</h2>
                <h2>{t('Recommendations')}</h2>
            </div>}
        </div>);
}

export default AtAGlanceComponent;
