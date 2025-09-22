import { FC, ReactNode } from 'react'

export type ConditionalContainerProps = {
    condition: boolean
    trueElement: ReactNode
    falseElement: ReactNode
}

export const ConditionalContainer: FC<ConditionalContainerProps> = ({
    condition,
    trueElement,
    falseElement
}) => {
    if (!condition) {
        return falseElement
    }
    return trueElement
}
