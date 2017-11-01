import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import config from './config';
import './style/base.sass';

import withMeta from './component/withMeta';
import Home from './component/Home';

import style from './App.sass';

const Status = ({ code, children }) => (
    <Route
        render={({ context }) => {
            if (context) {
                context.status = code;
            }

            return children;
        }}
    />
);

const NotFound = () => (
    <Status code={404}>
        <div>
            <h1>Sorry, can’t find that.</h1>
        </div>
    </Status>
);

const About = () => (
    <div>About</div>
);

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default withMeta(App);
