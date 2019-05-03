import "reflect-metadata";
import { main } from "./main";
import * as auth from './common/auth';

// Do not use react rendering code here, this will lead the index.ts will load all the react classes (from import/requires) before this request.post code run
auth.token().then(main).catch(e => console.error(`Load error: ${e}`));