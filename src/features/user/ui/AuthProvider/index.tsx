import { FC, ReactNode, useEffect } from 'react'
import { useAppDispatch } from '../../../../store/hooks'
import { setTokenIsValid } from '../../slices/userSlice'
import { checkUserToken } from '../../utils/validateToken'

type AuthCheckerProps = {
    children: ReactNode
}

export const AuthChecker: FC<AuthCheckerProps> = ({ children }) => {
    const dispatch = useAppDispatch()

    const actualizeToken = () => {
        const tokenIsValid = checkUserToken()
        dispatch(setTokenIsValid(tokenIsValid))
    }

    useEffect(actualizeToken, [])

    return children
}
