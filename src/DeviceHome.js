import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

}));

function DeviceHome(props) {
    const classes = useStyles();
    const {device} = props;
    return (
        <div>
            <Typography paragraph>
                {device.name} Home
            </Typography>
        </div>);
}

export default DeviceHome;
