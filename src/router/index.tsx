import { Routes } from 'react-router'
import { Route } from 'react-router'
import { useAppSelector } from '../store/hooks'
import { AuthRoute } from './ui/AuthRoute'
import { AuthChecker } from '../features/user/ui/AuthProvider'
import { routes } from './routes'

export const AppRouter = () => {
    const { token } = useAppSelector(state => state.user)

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
                                    options={{ authIsInverted: false, token }}
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
                                    options={{ authIsInverted: true, token }}
                                />
                            </AuthChecker>
                        }
                    />
                ))
            }

        </Routes>
    )
}
