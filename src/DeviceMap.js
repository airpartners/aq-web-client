import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GoogleMapReact from 'google-map-react';
import {deviceList} from "./Utils";
import Colors from "./assets/Colors";
import {Navigation, NotListedLocation} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    content: {
        height: `calc(100vh - 120px)`,
        width: '100%',
    }
}));

const mapApiKey = 'AIzaSyCE7xH50-i4RcG5HygoL1SKXi3dLbstQtI';

const isGeoDataAvailable = (device) => {
    return Array.isArray(device.data) && device.data.length && device.data[0].geo;
}

const getLatLng = (device) => {
    if (isGeoDataAvailable(device)) {
        return {lat: device.data[0].geo.lat, lng: device.data[0].geo.lon}; // Lat lng from the data
    } else {
        return {lat: device.geo.lat, lng: device.geo.lng}; // Default lat lng
    }
}

function DeviceMap(props) {
    const {t} = props;
    const classes = useStyles();
    const {deviceId, deviceDict} = props;
    const focusedDevice = deviceDict[deviceId];
    const latLng = getLatLng(focusedDevice);
    const getMarker = (id) => {
        let device = deviceDict[id];
        if (isGeoDataAvailable(device)) {
            return <Navigation key={id} lat={getLatLng(device).lat} lng={getLatLng(device).lng}
                               style={{color: Colors.primaryColor, fontSize: 30}}
                               transform={`rotate(${device.data[0].wind_dir})`}/>
        } else {
            return <NotListedLocation key={id} lat={getLatLng(device).lat} lng={getLatLng(device).lng}
                                      style={{color: Colors.primaryColor, fontSize: 30}}/>
        }
    }
    return (
        <div className={classes.content}>
            <GoogleMapReact
                bootstrapURLKeys={{key: mapApiKey}}
                defaultCenter={latLng}
                defaultZoom={14}
                options={mapOptions}>
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
