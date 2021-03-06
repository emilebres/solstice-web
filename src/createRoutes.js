import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import ConnectPage from "./containers/ConnectPage";
import RoomsPane from "./containers/RoomsPane";
import UsersPane from "./containers/UsersPane";

import SolsticeApp from "./components/SolsticeApp";

import { STATE_OPEN } from "./constants/socket";
import { LOGIN_STATUS_SUCCESS } from "./constants/login";

const createRoutes = (store) => {
    const requireLoggedIn = (nextState, replaceState) => {
        let { socket, login } = store.getState();
        if (socket.state !== STATE_OPEN ||
                login.status !== LOGIN_STATUS_SUCCESS)
        {
            replaceState({}, "/");
        }
    };

    return (
        <Route path="/">
            <IndexRoute component={ConnectPage} />

            <Route path="app" onEnter={requireLoggedIn} component={SolsticeApp}>
                <Route path="rooms(/:roomNameHash)" component={RoomsPane} />
                <Route path="users(/:userNameHash)" component={UsersPane} />
            </Route>
        </Route>
    );
};

export default createRoutes;
