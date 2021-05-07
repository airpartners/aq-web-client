import React from 'react'; // so we can use JSX in pollutantNameHTML function

export const drawerWidth = 300;
export const deviceList = ['SN000-045', 'SN000-046', 'SN000-049', 'SN000-062', 'SN000-067', 'SN000-114'];
export const pollutantsToShow = ['CO', 'NO2', 'O3', 'PM25', 'PM10', 'NO', 'PNC'];
export const deviceInitData = {
    'SN000-045': {
        id: 'SN000-045',
        name: 'Orient Heights, East Boston',
        latest: null,
        graph: null,
        lastUpdated: null,
        geo: {
            lat: 42.385,
            lng: -71.002,
        },
    },
    'SN000-046': {
        id: 'SN000-046',
        name: 'Gibson Park, Revere',
        latest: null,
        graph: null,
        lastUpdated: null,
        geo: {
            lat: 42.386,
            lng: -71.029,
        },
    },
    'SN000-049': {
        id: 'SN000-049',
        name: 'Chelsea Point, Winthrop',
        latest: null,
        graph: null,
        lastUpdated: null,
        geo: {
            lat: 42.373,
            lng: -70.994,
        },
    },
    'SN000-062': {
        id: 'SN000-062',
        name: 'Jeffries Point, East Boston',
        latest: null,
        graph: null,
        lastUpdated: null,
        geo: {
            lat: 42.365,
            lng: -71.03,
        },
    },
    'SN000-067': {
        id: 'SN000-067',
        name: 'Point Shirley, Winthrop',
        latest: null,
        graph: null,
        lastUpdated: null,
        geo: {
            lat: 42.361,
            lng: -70.972,
        },
    },
    'SN000-072': {
        id: 'SN000-072',
        name: 'Anna Voy, EB',
        latest: null,
        graph: null,
        lastUpdated: null,
        geo: {
            lat: 42.384,
            lng: -71,
        },
    },
    'SN000-114': {
        id: 'SN000-114',
        name: 'Beachmont, Revere',
        latest: null,
        graph: null,
        lastUpdated: null,
        geo: {
            lat: 42.397,
            lng: -70.988,
        },
    }
};
export const Pollutants = {
    PM25: {
        id: "pm25",
        name: "PM25",
        unit: "\xB5g/m\u00B3",
        baseline: 5.974271453,
        experimentalBaseline: false,
        showInfo: false,
        averagingTime: "lifetime of sensors (Sept 2019)",
    },
    PM10: {
        id: "pm10",
        name: "PM10",
        unit: "\xB5g/m\u00B3",
        experimentalBaseline: false,
        baseline: 48.78786576,
        showInfo: false,
        averagingTime: "lifetime of sensors (Sept 2019)",
    },
    CO: {
        id: "co",
        name: "CO",
        unit: "ppb",
        baseline: 157.5180895,
        experimentalBaseline: false,
        showInfo: false,
        averagingTime: "lifetime of sensors (Sept 2019)",
    },
    NO2: {
        id: "no2",
        name: "NO2",
        unit: "ppb",
        baseline: 9.305720405,
        experimentalBaseline: false,
        showInfo: false,
        averagingTime: "lifetime of sensors (Sept 2019)",
    },
    O3: {
        id: "o3",
        name: "O3",
        unit: "ppb",
        baseline: 21.41686391,
        experimentalBaseline: false,
        showInfo: false,
        averagingTime: "lifetime of sensors (Sept 2019)",
    },
    NO: {
        id: "no",
        name: "NO",
        unit: "ppb",
        baseline: 1.829369833,
        experimentalBaseline: false, // TODO: needs to find a baseline value
        averagingTime: "lifetime of sensors (Sept 2019)",
        showInfo: false,
    },
    PNC: {
        id: "bin0",
        name: "PNC",
        unit: "particles/cm\u00B3",
        experimentalBaseline: false, // TODO: needs to find a baseline value
        baseline: 4.604247525,
        averagingTime: "lifetime of sensors (Sept 2019)",
        showInfo: false,
    }
};

/**
 * Return JSX formatted html elements for pollutant names
 *
 * @param {string} pollutant the pollutant name
 */
export const pollutantAbbreviationHTML = (pollutant) => {
    let ret;
    switch (pollutant) {
        case "PM25":
            ret = (<span>PM<sub>2.5</sub></span>);
            break;
        case "PM10":
            ret = (<span>PM<sub>10</sub></span>);
            break;
        case "NO2":
            ret = (<span>NO<sub>2</sub></span>);
            break;
        case "O3":
            ret = (<span>O<sub>3</sub></span>);
            break;
        case "PNC":
            ret = (<span>PNC<sub>0.3-0.5</sub></span>);
            break;
        default:
            ret = (<span>{pollutant}</span>);
    }
    return ret;
};

/**
 * Check whether we should fetch new data. Update when
 * - Data has just been initialized (lastUpdated == null)
 * - Last updated was 5 minutes ago or longer
 * @param deviceDict: dictionary of our device data
 * @param deviceId: id of the current device
 * @returns {boolean}: true if update is needed
 */
export const needUpdate = (deviceDict, deviceId) => {
    let lastUpdated = deviceDict[deviceId].lastUpdated;
    if (!lastUpdated)
        return true;
    let now = new Date();
    let timeDiff = (now - lastUpdated) / 1000 / 60; // in minutes
    return timeDiff >= 5;
};
