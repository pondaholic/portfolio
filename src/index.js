import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './portfolio';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();
