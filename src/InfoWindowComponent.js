import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// Documentation for Marker and InfoWindow:
// https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/MarkerInfoWindow.js
function InfoWindowComponent(props) {
    const {contentComponent} = props;
    const useStyles = makeStyles((theme) => ({
        infoWindow: {
            position: 'relative',
            top: props.top,
            left: props.left,
            right: props.right,
            bottom: props.bottom,
            minWidth: props.minWidth,
            zIndex: 100,
            padding: theme.spacing(3),
            marginBottom: theme.spacing(3),
            display: "inline-grid"
        }
    }));
    const classes = useStyles();

    return (
        <Paper elevation={1} className={classes.infoWindow}>
            {contentComponent}
        </Paper>
    );
}
InfoWindowComponent.defaultProps = {
    top: 0,
    left: -90,
    right: 0,
    bottom: 0,
    minWidth: 200,
}
export default InfoWindowComponent;
