import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './page/Login';
import Signup from "./page/Signup/index"

AuthFeature.propTypes = {
    
};

function AuthFeature(props) {
    const match = useRouteMatch()
    return (
    <Switch>
        <Route path={`${match.url}/signup`} component={Signup} exact></Route>
        <Route path={`${match.url}/login`} component={Login} exact></Route>
    </Switch>
    );
}

export default AuthFeature;