import React, {lazy, Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/auth" component={AuthLazy} />
                    <Route path="/" component={MarketingLazy} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};