import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

 function onRedirectCallback() {
   window.location.href = '/SensorData';
 }

ReactDOM.render(
    
  <Auth0Provider
    domain="dev-bmeujak9.us.auth0.com"
    clientId="BEwNWwZ0kduhIY0ym4PUn3UCXdLvS2na"
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
