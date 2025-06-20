import { FC, useEffect } from 'react'
import { Navigate } from 'react-router';
import { AppRouteProps, AuthRouteOptions } from '../types';
import { ROUTER } from '../consts';
import { useAppSelector } from '../../store/hooks';


export const AuthRoute: FC<AppRouteProps<AuthRouteOptions>> = ({
    Component,
    options
}) => {
    const { token } = useAppSelector(state => state.user)
    // if(options?.token === null) {
    //     return <p>Загрузка</p> 
    // }

    // REDIRECT IF NOT AUTH
    if (token === false && !options?.authIsInverted) {
        console.log(options);

        return <Navigate to={ROUTER.PATHS.SIGNUP} />
    }

    // REDIRECT IF NEED NON-AUTH BUT AUTH
    if (token && options?.authIsInverted) {
        return <Navigate to={ROUTER.PATHS.HOME} />
    }

    // RENDER IF AUTH OK
    return <Component />
}
