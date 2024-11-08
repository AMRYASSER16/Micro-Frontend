import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';

export default ({ history, onSignIn }) => {
    return (
        <StylesProvider>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <Signin onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <Signup onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    );
};