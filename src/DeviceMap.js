import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMapReact from 'google-map-react';
import { deviceList } from "./Utils";
import Colors from "./assets/Colors";
import { Navigation, NotListedLocation } from "@material-ui/icons";
import MarkerComponent from "./MarkerComponent";
import AtAGlanceComponent from "./AtAGlanceComponent";
import CloudSVG from "./assets/svg/CloudSVG";

const useStyles = makeStyles((theme) => ({
    content: {
        height: `calc(100vh - 120px)`, // Height - Top and Bottom bars
        width: '100%',
    },
    marker: {
        cursor: 'pointer',
        color: Colors.primaryColor,
        fontSize: 30,
    }
}));

const mapApiKey = 'AIzaSyCE7xH50-i4RcG5HygoL1SKXi3dLbstQtI';

/**
 * Check if a device has geo data.
 * @param device: a device instance
 * @returns {boolean}: true if geo data is available
 */
const isGeoDataAvailable = (device) => {
    return Array.isArray(device.data) && device.data.length && device.data[0].geo;
}

/**
 * Get (lat, lng) from the device data if available,
 * otherwise return the default (lat, lng) in Utils.js
 * @param device: a device instance
 * @returns {{lng: number, lat: number}}
 */
const getLatLng = (device) => {
    if (isGeoDataAvailable(device)) {
        return { lat: device.data[0].geo.lat, lng: device.data[0].geo.lon }; // Lat lng from the data
    } else {
        return { lat: device.geo.lat, lng: device.geo.lng }; // Default lat lng
    }
}

function DeviceMap(props) {
    const classes = useStyles();
    const { strings, deviceId, deviceDict } = props;
    const [focusedDevice, setFocusedDevice] = useState(deviceDict[deviceId]);
    const [showInfo, setShowInfo] = useState(false);
    const [latLng, setLatLng] = useState(getLatLng(deviceDict[deviceId]));
    useEffect(() => {
        setLatLng(getLatLng(focusedDevice));
    }, [focusedDevice]);
    useEffect(() => {
        setFocusedDevice(props.deviceDict[props.deviceId]);
    }, [props.deviceId]);

    /**
     * Generate marker for the device based on id. If the device does not have geo location,
     * use the default question mark marker with the default (lat, lng) in Utils.js
     * @param id: of the device
     * @returns {*}: a Marker Component
     */
    const getMarker = (id) => {
        let device = deviceDict[id];
        let marker, infoWindow;
        if (isGeoDataAvailable(device)) {
            marker = <Navigation className={classes.marker} style={{ color: Colors.primaryColor }}
                transform={`rotate(${device.data[0].wind_dir})`} />
            infoWindow = <AtAGlanceComponent cloudWidth={CloudSVG.small} device={device} strings={strings} />
        } else {
            marker = <NotListedLocation className={classes.marker} style={{ color: Colors.primaryColor }} />
            infoWindow = <div>Data Not Available</div>
        }
        return <MarkerComponent key={id} lat={getLatLng(device).lat} lng={getLatLng(device).lng}
            showInfo={showInfo && id === focusedDevice.id} marker={marker} infoWindow={infoWindow} />
    }

    /**
     * Function handles event when a marker is click
     * @param key: of the marker (basically just device id)
     */
    const onMarkerClicked = (key) => {
        if (!showInfo) {
            // show info window if no info window appears yet
            setFocusedDevice(deviceDict[key]);
            setShowInfo(true);
        } else {
            // if info window already appears
            if (focusedDevice.id === key) {
                // if click on the same device, turn off info window
                setShowInfo(false);
            } else {
                // else change focused device so that info window will change to that device
                setFocusedDevice(deviceDict[key]);
            }
        }
    }
    return (
        <div className={classes.content}>
            {/* GoogleMapReact documentation: https://github.com/google-map-react/google-map-react */}
            <GoogleMapReact
                bootstrapURLKeys={{ key: mapApiKey }}
                defaultCenter={latLng}
                center={latLng}
                defaultZoom={14}
                options={mapOptions}
                onChildClick={onMarkerClicked}>
                {deviceList.map((id) => (
                    getMarker(id)
                ))}
            </GoogleMapReact>
        </div>);
}

// Map styling options
const mapOptions = {
    mapTypeControl: false, styles: [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ebe3cd"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#523735"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f1e6"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c9b2a6"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#dcd2be"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ae9e90"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#93817c"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a5b076"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#447530"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f1e6"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fdfcf8"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f8c967"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#e9bc62"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e98d58"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#db8555"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#806b63"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8f7d77"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ebe3cd"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#b9d3c2"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#92998d"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
    ]
};

export default DeviceMap;
