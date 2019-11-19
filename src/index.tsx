import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import MyStore from './State/MyStore';

ReactDOM.render(
    <Provider store={MyStore}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
