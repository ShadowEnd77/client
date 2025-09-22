import { useEffect, useRef, useState } from "react";

export const useDeferredValue = (value: any, delay = 500) => {
    const [deferredValue, setDeferredValue] = useState(value);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        clearTimeout(timeoutRef.current as NodeJS.Timeout);
        timeoutRef.current = setTimeout(() => {
            setDeferredValue(value);
        }, delay);

        return () => {
            clearTimeout(timeoutRef.current as NodeJS.Timeout);
        };
    }, [value, delay]);

    return deferredValue;
}
