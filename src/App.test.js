import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { deviceList, deviceInitData } from './Utils';

test('renders nav with all locations', () => {
    const { getAllByText } = render(<BrowserRouter><App /></BrowserRouter>);
    let name;
    for (let deviceId of deviceList) {
        name = deviceInitData[deviceId].name;
        let el;
        console.log(`Looking for link to location, ${name}, with id: ${deviceId}.`);
        try {
            el = getAllByText(name);
        } catch (error) {
            console.log(`Error while looking for link to location, ${name}, with id: ${deviceId}.`)
        }
        expect(el).toBeDefined();
    }
});
