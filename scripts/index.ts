import "reflect-metadata";
import * as request from "request";
import { config } from "./config";
import { iocContainer } from "@gtm/lib.common";
import * as userclient from '@gtm/lib.client.user';
import { main } from "./main";
import { JwtToken } from "@gtm/lib.client.user";

request.post(config.services.user + '/web/auth/session', { withCredentials: true }, (error: any, response: request.RequestResponse, body: any): void => {
    let jwtToken: JwtToken;
    if (!!error || !response || response.statusCode !== 200 || typeof(body) !== 'string') {
        if (response) {
            console.error(`Load: ${response.statusCode}/${response.statusMessage}`);
        }
        if (error) {
            console.error(error);
        }
    } else if (body) {
        jwtToken = JSON.parse(body);
    }
    userclient.registerIoc(iocContainer, config.services.user, !!jwtToken ? (<any>jwtToken)._jwt : undefined);

    // Do not use react code here, this will lead the index.ts will load all the react classes (from import/requires) before this request.post code run
    main(jwtToken);
});
