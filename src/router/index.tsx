import { Routes } from 'react-router'
import { Route } from 'react-router'
import { useAppSelector } from '../store/hooks'
import { AuthRoute } from './ui/AuthRoute'
import { AuthChecker } from '../features/user/ui/AuthProvider'
import { routes } from './routes'
import { useEffect } from 'react'

export const AppRouter = () => {

    return (
        <Routes>
            {
                routes.AUTH.map(({ path, Component }) => (
                    <Route
                        path={path}
                        key={path}
                        element={
                            <AuthChecker>
                                <AuthRoute
                                    Component={Component}
                                    options={{ authIsInverted: false }}
                                />
                            </AuthChecker>
                        }
                    />
                ))
            }
            {
                routes.NON_AUTH.map(({ path, Component }) => (
                    <Route
                        path={path}
                        key={path}
                        element={
                            <AuthChecker>
                                <AuthRoute
                                    Component={Component}
                                    options={{ authIsInverted: true }}
                                />
                            </AuthChecker>
                        }
                    />
                ))
            }

        </Routes>
    )
}
