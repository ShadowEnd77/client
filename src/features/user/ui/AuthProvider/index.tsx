import { FC, ReactNode, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { setTokenIsValid } from '../../slices/userSlice'
import { checkUserToken } from '../../utils/validateToken'
import { Loader } from '../../../../ui/components/service/Loader'

type AuthCheckerProps = {
    children: ReactNode
}

export const AuthChecker: FC<AuthCheckerProps> = ({ children }) => {
    const dispatch = useAppDispatch()
    const { token } = useAppSelector(state => state.user)

    const actualizeToken = () => {
        const tokenIsValid = checkUserToken()
        dispatch(setTokenIsValid(tokenIsValid))
    }

    useEffect(actualizeToken, [])

    if (token === null) {
        return <Loader height={60} width={60} />
    }

    return children
}
