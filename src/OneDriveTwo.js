import React, { useState } from 'react';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-client';

function OneDrivePicker() {
  const [authToken, setAuthToken] = useState(null);
  const [items, setItems] = useState([]);

  const authenticate = async () => {
    // Request an access token from the Microsoft Graph API
    const tokenResponse = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `client_id=eb629b63-11aa-42fd-9031-f9585abdc144&scope=files.read&code=YOUR_AUTH_CODE&redirect_uri=http://localhost:3000&grant_type=authorization_code`,
    });
    const token = await tokenResponse.json();
    setAuthToken(token.access_token);
  };

  const getItems = async () => {
    // Use the Microsoft Graph API to retrieve a list of files and folders
    const client = MicrosoftGraph.Client.init({
      authProvider: (done) => {
        done(null, authToken);
      },
    });
    const itemsResponse = await client
      .api('/me/drive/root/children')
      .top(1000)
      .select('name,size,file,folder')
      .get();
    setItems(itemsResponse.value);
  };

  return (
    <div>
         <button onClick={getItems}>Get Items</button>
      {authToken ? (
        <button onClick={getItems}>Get Items</button>
      ) : (
        <button onClick={authenticate}>Authenticate</button>
      )}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default OneDrivePicker;
