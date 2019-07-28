import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import wrapper from './components/LCH/wrapper';
const theme = createMuiTheme({
    palette:{
        type:'dark'
    }
});
ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={theme}>
            {/* <App /> */}
                <Route exact path="/" component={App} />
                <Route path="/LF" component={wrapper} />
            <ul>
                <li>
                <Link to="/">Game</Link>
                </li>
                <li>
                <Link to="/LF">LifeCycleHooks</Link>
                </li>
            </ul>
        </MuiThemeProvider>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
