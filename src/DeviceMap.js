import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

}));

function DeviceMap(props) {
    const {t} = props;
    const classes = useStyles();
    const {device, deviceDict} = props;
    return (
        <div>
            <Typography paragraph>
                {device.name} {t('BottomNav.Map')}
            </Typography>
        </div>);
}

export default DeviceMap;
