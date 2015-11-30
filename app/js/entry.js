const globalConfig = require('../../global.config');
/* styles */
import '../scss/main';
/* App */
import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './test/HelloMessage';

ReactDOM.render(<HelloMessage name="Foo"/>, document.getElementById(globalConfig.staticPage.container.id));
