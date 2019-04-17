import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

//React Router
import { Router, Route, Switch} from "react-router-dom";
import { createHashHistory } from 'history'
    
//Components
import App from './components/App';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const jsx = (
        <Router history={hashHistory}>
            <Switch>
                <Route path='/' component={App}/>
                <Route component={() => (<div>404 Not found 1</div>)} />
            </Switch>
        </Router>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
