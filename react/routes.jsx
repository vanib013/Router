import React from 'react';
import { Router, Route } from 'react-router';

import App from './App.jsx';
import Home from './Components/Home.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Counter from './Components/Counter.jsx';

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/counter" component={Counter} />
        </Route>
    </Router>,

    document.getElementById("react-root"));

export default routes;
