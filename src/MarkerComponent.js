import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import InfoWindowComponent from "./InfoWindowComponent";

const useStyles = makeStyles((theme) => ({}));

// Documentation for Marker and InfoWindow:
// https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/MarkerInfoWindow.js
function MarkerComponent(props) {
    const {showInfo, marker, infoWindow} = props;
    const classes = useStyles();

    return (
        <Fragment>
            {marker}
            {showInfo && <InfoWindowComponent contentComponent={infoWindow}/>}
        </Fragment>
    );
}

export default MarkerComponent;
