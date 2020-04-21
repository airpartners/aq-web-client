export const drawerWidth = 240;
export const deviceList = ['SN000-045', 'SN000-046', 'SN000-049', 'SN000-062', 'SN000-067', 'SN000-072'];
export const deviceInitData = {
    'SN000-045': {
        id: 'SN000-045',
        name: 'St Andrew Road, EB',
        data: null,
        lastUpdated: null,
    },
    'SN000-046': {
        id: 'SN000-046',
        name: 'Everett Street, EB',
        data: null,
        lastUpdated: null,
    },
    'SN000-049': {
        id: 'SN000-049',
        name: 'Elmer Ave, Winthrop',
        data: null,
        lastUpdated: null,
    },
    'SN000-062': {
        id: 'SN000-062',
        name: 'Sumner, EB',
        data: null,
        lastUpdated: null,
    },
    'SN000-067': {
        id: 'SN000-067',
        name: 'Bay View Ave, Winthrop',
        data: null,
        lastUpdated: null,
    },
    'SN000-072': {
        id: 'SN000-072',
        name: 'Anna Voy, EB',
        data: null,
        lastUpdated: null,
    }
};
export const getTabName = (tabId, t) => {
    switch (tabId) {
        case 1:
            return t('BottomNav.Map');
        case 2:
            return t('BottomNav.Detail');
        default:
            return t('BottomNav.Home');
    }
};
export const getTabId = (tabName, t) => {
    switch (tabName) {
        case t('BottomNav.Map'):
            return 1;
        case t('BottomNav.Detail'):
            return 2;
        default:
            return 0;
    }
};
export const isDevicePath = (path) => {
    return path.includes('SN') || path === '';
};
export const getDeviceMetaData = (path, t) => {
    let metaData = path.split('/').filter(el => el); // Split and filter out null/empty string
    let deviceName = metaData.length > 0 ? metaData[0] : deviceList[0];
    let tabName = metaData.length > 1 ? metaData[1] : t('BottomNav.Home');
    if (!deviceList.includes(deviceName)) {
        deviceName = deviceList[0];
    }
    if (![t('BottomNav.Home'), t('BottomNav.Map'), t('BottomNav.Detail')].includes(tabName)) {
        tabName = t('BottomNav.Home');
    }
    return [deviceName, getTabId(tabName, t)];
};
export const needUpdate = (deviceDict, deviceName) => {
    let lastUpdated = deviceDict[deviceName].lastUpdated;
    if (!lastUpdated)
        return true;
    let now = new Date();
    let timeDiff = (now - lastUpdated) / 1000 / 60; // in minutes
    return timeDiff >= 5;
}
