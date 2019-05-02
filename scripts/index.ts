import "reflect-metadata";
import { main } from "./main";
import { isloggedin } from './common/utils';

// Do not use react rendering code here, this will lead the index.ts will load all the react classes (from import/requires) before this request.post code run
isloggedin().then(main).catch(e => console.error(`Load error: ${e}`));