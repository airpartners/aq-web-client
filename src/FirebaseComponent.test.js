import React from 'react';
import { render } from '@testing-library/react';
import { getData } from './FirebaseComponent';
import FirebaseComponent from './FirebaseComponent';

test('firebase realtime data exists for each device', async () => {
    const { getByText } = render(<FirebaseComponent />);
    // TODO: do this for each device when data exists
    let deviceId = "SN000-088";
    let data = await getData(deviceId);
    console.log(data.latest.sn);
    expect(data.latest.sn).toEqual(deviceId);
});
