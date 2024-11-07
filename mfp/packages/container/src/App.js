import React, {lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <BrowserRouter>
            <Header isSignedIn={isSignedIn} />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/auth">
                        <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                    </Route>
                    <Route path="/" component={MarketingLazy} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};