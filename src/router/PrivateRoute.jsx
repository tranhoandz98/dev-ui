import React from 'react';
import { Route } from 'react-router-dom';

import { useKeycloak } from '@react-keycloak/web'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { keycloak } = useKeycloak()

    return (
        <div>
            {/* <Route {...rest} render={props => (
                currentUser ?
                    (<Component {...props} />) :
                    <Redirect to="/login" />
            )} /> */}
            <Route
                {...rest}
                render={(props) =>
                    keycloak?.authenticated ? (
                        <Component {...props} />
                    ) : keycloak.login()

                }
            />
        </div>
    );
};

export default PrivateRoute;
