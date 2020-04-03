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

function getEndpoint(deviceName, page, perPage) {
    if (window.location.hostname === "localhost")
        return window.location.origin + '/data/' + deviceName + '.json';
    else
        return `${BASE_URL}/${deviceName}/data/?page=${page}&per_page=${perPage}&limit=${LIMIT}`;
}

export const getData = (deviceName = 'SN000-072', page = 1, perPage = 1000) =>
    fetch(getEndpoint(deviceName, page, perPage), {
        headers: headers,
        credentials: 'include',
        method: 'GET'
    }).then(res => res.json());
