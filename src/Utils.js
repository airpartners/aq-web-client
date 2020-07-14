export const drawerWidth = 300;
export const deviceList = ['SN000-045', 'SN000-046', 'SN000-049', 'SN000-062', 'SN000-067', 'SN000-072'];
export const deviceInitData = {
    'SN000-045': {
        id: 'SN000-045',
        name: 'St Andrew Road, EB',
        data: null,
        meta: null,
        lastUpdated: null,
        geo: {
            lat: 42.37,
            lng: -72.03,
        },
    },
    'SN000-046': {
        id: 'SN000-046',
        name: 'Everett Street, EB',
        data: null,
        meta: null,
        lastUpdated: null,
        geo: {
            lat: 42.36,
            lng: -71,
        },
    },
    'SN000-049': {
        id: 'SN000-049',
        name: 'Elmer Ave, Winthrop',
        data: null,
        meta: null,
        lastUpdated: null,
        geo: {
            lat: 42.38,
            lng: -71.01,
        },
    },
    'SN000-062': {
        id: 'SN000-062',
        name: 'Sumner, EB',
        data: null,
        meta: null,
        lastUpdated: null,
        geo: {
            lat: 42.365,
            lng: -71.03,
        },
    },
    'SN000-067': {
        id: 'SN000-067',
        name: 'Bay View Ave, Winthrop',
        data: null,
        meta: null,
        lastUpdated: null,
        geo: {
            lat: 42.34,
            lng: -71.02,
        },
    },
    'SN000-072': {
        id: 'SN000-072',
        name: 'Anna Voy, EB',
        data: null,
        meta: null,
        lastUpdated: null,
        geo: {
            lat: 42.38,
            lng: -71.015,
        },
    }
};
export const Pollutants = {
    PM25: {
        id: "pm25",
        name: "PM2.5",
        unit: "ug/m3",
        safe: "??",
    },
    PM10: {
        id: "pm10",
        name: "PM10",
        unit: "ug/m3",
        safe: "??",
    },
    CO: {
        id: "co",
        name: "CO",
        unit: "ppm",
        safe: "??",
    },
    NO2: {
        id: "no2",
        name: "NO2",
        unit: "ppb",
        safe: "??",
    },
    O3: {
        id: "o3",
        name: "O3",
        unit: "ppb",
        safe: "??",
    }
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
}
