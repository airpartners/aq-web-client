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
                defaultZoom={15}>
                {deviceList.map((id) => (
                    getMarker(id)
                ))}
            </GoogleMapReact>
        </div>);
}

// Map style
const mapOptions = {
    mapTypeControl: false, styles: [{
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#5f94ff"
            },
                {
                    "lightness": 26
                },
                {
                    "gamma": 5.86
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "weight": 0.6
            },
                {
                    "saturation": -85
                },
                {
                    "lightness": 61
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "hue": "#0066ff"
            },
                {
                    "saturation": 74
                },
                {
                    "lightness": 100
                }
            ]
        }
    ]
};

export default DeviceMap;
