import { FC, useEffect } from 'react'
import { Navigate } from 'react-router';
import { AppRouteProps, AuthRouteOptions } from '../types';
import { ROUTER } from '../consts';


export const AuthRoute: FC<AppRouteProps<AuthRouteOptions>> = ({
    Component,
    options = {
        token: false,
        authIsInverted: false
    }
}) => {


    if (!options.token && !options.authIsInverted) {
        return <Navigate to={ROUTER.PATHS.SIGNUP} />
    }

    if (options.token && options.authIsInverted) {
        return <Navigate to={ROUTER.PATHS.HOME} />
    }

    return <Component />
}
