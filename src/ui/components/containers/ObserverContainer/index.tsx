import { ElementType, FC } from 'react'
import { IntersectionObserverProps, InView } from 'react-intersection-observer'

type ObserverContainerProps = {
    disabled?: boolean,
    onInView: () => void
}

export const ObserverContainer: FC<ObserverContainerProps> = ({ onInView, disabled }) => {
    const onChange = (inView: boolean) => {
        if (!inView || disabled) {
            return;
        }
        onInView();
    }

    return (
        <InView onChange={onChange} />
    )
}
