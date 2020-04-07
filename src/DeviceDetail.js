import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

}));

function DeviceDetail(props) {
    const classes = useStyles();
    const {device, deviceDict} = props;
    return (
        <div>
            <Typography paragraph>
                {device.name} Detail
            </Typography>
        </div>);
}

export default DeviceDetail;
