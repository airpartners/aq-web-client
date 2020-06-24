let base64 = require('base-64');
const BASE_URL = "https://quant-aq.com/device-api/v1/devices";
const LIMIT = 2000;
const USERNAME = "";
const PASSWORD = "";
let token = 'Basic ' + base64.encode(USERNAME + ":" + PASSWORD);

let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Authorization', token);

const HOSTS_TO_USE_LOCAL_DATA = ["localhost",
    "airpartners.github.io", // github pages
    "airpartners-ade.web.app", // firebase
    "airpartners-ade.firebaseapp.com"]; // firebase

function getEndpoint(deviceId, page, perPage) {
    if (HOSTS_TO_USE_LOCAL_DATA.includes(window.location.hostname))
        return window.location.origin + '/data/' + deviceId + '.json';
    else
        return `${BASE_URL}/${deviceId}/data/?page=${page}&per_page=${perPage}&limit=${LIMIT}`;
}

export const getData = (deviceId = 'SN000-072', page = 1, perPage = 1000) =>
    fetch(getEndpoint(deviceId, page, perPage), {
        headers: headers,
        credentials: 'include',
        method: 'GET'
    }).then(res => res.json());
