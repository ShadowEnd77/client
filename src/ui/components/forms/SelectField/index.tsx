import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { arrowDownIcon } from '../../../icons'
import { ObserverContainer } from '../../containers/ObserverContainer'
import { Loader } from '../../service/Loader'
import { SelectFieldOption, SelectFieldProps } from './selectField.types'
import inputStyles from '../InputField/inputField.module.scss'
import styles from './selectField.module.scss'
import { SelectOption } from './option'
import { AnimatePresence, motion } from 'motion/react'

export const SelectField: FC<SelectFieldProps> = ({
    className,
    readOnly,
    htmlId,
    placeholder,
    value,
    asyncOptions,
    options,
    selectedValue,
    onChange,
    onSearch,
    disabled
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const [menuIsOpened, setMenuIsOpened] = useState(false)
    const ref = useRef<HTMLDivElement>(null);

    const onSearchFocus = () => {
        setIsFocused(true)
    }

    const onContainerClick = () => {
        if (menuIsOpened || disabled) {
            return undefined
        }
        return () => setMenuIsOpened(true)
    }

    const onLabelClick = () => {
        if (disabled) return
        setMenuIsOpened(prev => !prev)
    }

    const onSelect = useCallback((option: SelectFieldOption) => {
        onChange?.(option.value, option.label)
        setIsFocused(false)
        setMenuIsOpened(false)
    }, [onChange])

    const onClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            if (menuIsOpened) {
                setIsFocused(false)
                setMenuIsOpened(false)
            }
        }
    }

    useEffect(() => {
        if (!menuIsOpened && isFocused) {
            setMenuIsOpened(true)
        }
    }, [value])

    useEffect(() => {
        if (menuIsOpened) {
            document.addEventListener('mousedown', onClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', onClickOutside);
        };
    }, [menuIsOpened])

    return (
        <div
            ref={ref}
            onClick={onContainerClick}
            className={`${styles.container} ${className}`}>
            <label
                htmlFor={htmlId}
                onClick={onLabelClick}
                className={`
                ${inputStyles.wrapper} 
                ${isFocused ? inputStyles.focused : ""} 
                ${selectedValue || value ? inputStyles.hasValue : ""} 
                ${styles.controls}`
                }>
                <input
                    readOnly={readOnly}
                    disabled={disabled}
                    onChange={onSearch}
                    placeholder={placeholder || "Не выбрано"}
                    value={value || ""}
                    onFocus={onSearchFocus}
                    className={inputStyles.input}
                    type="text"
                />
                <div
                    className={styles.iconWrapper}>
                    <motion.img
                        initial={{
                            rotateZ: 0
                        }}
                        animate={{
                            rotateZ: menuIsOpened ? 180 : 0
                        }}
                        src={arrowDownIcon} height={19} width={19} />
                </div>
            </label>
            <AnimatePresence>
                {
                    menuIsOpened &&
                    <motion.div
                        initial={{
                            translate: "0 -20px",
                            opacity: 0
                        }}
                        animate={{
                            translate: 0,
                            opacity: 1
                        }}
                        exit={{
                            translate: "0 -20px",
                            opacity: 0
                        }}
                        className={styles.menu}>
                        {
                            !options.length || asyncOptions?.is_loading ?
                                <div className={styles.noMatch}>
                                    <p>{!asyncOptions?.is_loading ? "Ничего не найдено" : "Ищем совпадения..."}</p>
                                </div> :
                                <ul className={`${styles.list} ${options.length < 3 ? styles.noPaddingBottom : ""}`}>
                                    {
                                        options.map((option) => (
                                            <SelectOption
                                                selectedValue={selectedValue}
                                                onSelect={() => onSelect(option)}
                                                {...option}
                                            />
                                        ))
                                    }
                                    {
                                        asyncOptions &&
                                        <li>
                                            <ObserverContainer
                                                disabled={asyncOptions?.disableObserving || asyncOptions.is_pag_loading || asyncOptions.is_loading}
                                                onInView={asyncOptions.onLoad}
                                            />
                                            {
                                                asyncOptions.is_pag_loading &&
                                                <div className={`${styles.loader}`}>
                                                    <Loader width={16} height={16} />
                                                    <span>Загружаем еще...</span>
                                                </div>
                                            }

                                        </li>
                                    }
                                </ul>
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}
