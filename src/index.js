import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Theta from './Theta.js';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Theta />, document.getElementById('theta'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
