// import { useKeycloak } from '@react-keycloak/web';
import React, {
    //  useEffect
     } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from './routes';



const AppRouter = () => {
    // const { keycloak } = useKeycloak();
    // useEffect(() => {
    //     if (!keycloak.authenticated) {
    //         keycloak.login();
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    function RouteWithSubRoutes(route) {
        return (
            <Route
                path={route.path}
                exact={route.exact}
                render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} />
                )}
            />
        );
    }

    return (
        <>
            <Switch>
                {Routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </>
    );
}

export default React.memo(AppRouter);
