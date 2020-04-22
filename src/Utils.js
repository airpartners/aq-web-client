export const drawerWidth = 240;
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

/**
 * Set tab name based on id
 * @param tabId: 0, 1 -> Home, Map
 * @param t: translation object
 * @returns {string} translated string for Home and Map
 */
export const getTabName = (tabId, t) => {
    switch (tabId) {
        case 0:
            return t('BottomNav.Home');
        default:
            return t('BottomNav.Map');
    }
};

/**
 * Get tab id based on tab name
 * @param tabName: Home, Map -> 0, 1
 * @param t: translation object
 * @returns {number}
 */
export const getTabId = (tabName, t) => {
    switch (tabName) {
        case t('BottomNav.Home'):
            return 0;
        default:
            return 1;
    }
};

/**
 * Check whether a url is a device path (aka. containing 'SN')
 * @param path: a url path (i.e. /SN000-049/Home)
 * @returns {boolean}: true if device path
 */
export const isDevicePath = (path) => {
    return path.includes('SN') || path === '';
};

/**
 * Get device name and tab id from a url path
 * @param path: a url path (i.e. /SN000-049/Home)
 * @param t: translation object to retrieve tab name
 * @returns {[string, number]}: device name, tab id
 */
export const getDeviceMetaData = (path, t) => {
    let metaData = path.split('/').filter(el => el); // Split and filter out null/empty string
    let deviceId = metaData.length > 0 ? metaData[0] : deviceList[0];
    let tabName = metaData.length > 1 ? metaData[1] : t('BottomNav.Home');
    if (!deviceList.includes(deviceId)) {
        deviceId = deviceList[0];
    }
    if (![t('BottomNav.Home'), t('BottomNav.Map'), t('BottomNav.Detail')].includes(tabName)) {
        tabName = t('BottomNav.Home');
    }
    return [deviceId, getTabId(tabName, t)];
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
