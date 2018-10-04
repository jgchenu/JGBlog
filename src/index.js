import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import Router from './router/index.jsx';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './styles/media.less'
import axios from './axios/index';
React.Component.prototype.$axios=axios;
ReactDOM.render( 
<Provider >
    <Router />
</Provider>, document.getElementById('root'));
registerServiceWorker();
