export const deviceList = ['SN000-045', 'SN000-046', 'SN000-049', 'SN000-062', 'SN000-067', 'SN000-072'];
export const drawerWidth = 240;
export const getTabName = (tabId, t) => {
    switch (tabId) {
        case 1: return t('BottomNav.Map');
        case 2: return t('BottomNav.Detail');
        default: return t('BottomNav.Home');
    }
};
export const getTabId = (tabName, t) => {
    switch (tabName) {
        case t('BottomNav.Map'): return 1;
        case t('BottomNav.Detail'): return 2;
        default: return 0;
    }
};
export const isDevicePath = (path) => {
    return path.includes('SN') || path === '';
};
