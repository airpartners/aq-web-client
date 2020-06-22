import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfoWindowComponent from "./InfoWindowComponent";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
    },
}));

// Documentation for Marker and InfoWindow:
// https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/MarkerInfoWindow.js
function MarkerComponent(props) {
    const { t, showInfo, marker, infoWindow } = props;
    const classes = useStyles();

    return (
        <Fragment>
            {marker}
            {showInfo && (infoWindow.props.device ?
                <Link className={classes.link}
                    to={`${process.env.PUBLIC_URL}/${infoWindow.props.device.id}/${t('Routes.Home')}`}>
                    <InfoWindowComponent contentComponent={infoWindow} />
                </Link>
                : <InfoWindowComponent contentComponent={infoWindow} />)}
        </Fragment>
    );
}

export default MarkerComponent;
