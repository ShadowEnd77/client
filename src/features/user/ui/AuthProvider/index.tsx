import { FC, ReactNode, useEffect } from 'react'
import { useAppDispatch } from '../../../../store/hooks'
import { checkValidToken } from '../../slices/userSlice'
import { checkUserToken } from '../../utils/validateToken'

type AuthProviderProps = {
    children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const tokenIsValid = checkUserToken()
        dispatch(checkValidToken(tokenIsValid))
    }, [])

    return children
}
