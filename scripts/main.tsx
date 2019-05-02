import { config } from "./config";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./features/App";
import { JwtToken } from "@gtm/lib.client.user";

export function main(jwtToken: JwtToken) {
    ReactDOM.render(<App jwtToken={jwtToken} />, document.getElementById('content'));
}