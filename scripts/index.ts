import * as base from '../base/scripts';
import * as React from 'react';
import App from './app';

base.startup(() => React.createElement(App))
    .then(() => console.log('Module loaded!'))
    .catch(e => console.error('Module load failed', e));