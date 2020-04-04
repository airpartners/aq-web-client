export const deviceList = ['SN000-045', 'SN000-046', 'SN000-049', 'SN000-062', 'SN000-067', 'SN000-072'];
export const drawerWidth = 240;
export const aboutUsText = 'About Us';
export const qaaText = 'Q&A';
export const homeText = 'Home';
export const mapText = 'Map';
export const detailText = 'Detail';
export const getTabName = (tabId) => {
    switch (tabId) {
        case 1: return mapText;
        case 2: return detailText;
        default: return homeText;
    }
};
export const getTabId = (tabName) => {
    switch (tabName) {
        case mapText: return 1;
        case detailText: return 2;
        default: return 0;
    }
};
export const isDevicePath = (path) => {
    return path.includes('SN') || path === '';
};
