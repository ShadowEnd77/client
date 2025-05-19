import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { arrowDownIcon, tickIcon } from '../../../icons'
import inputStyles from '../InputField/inputField.module.scss'
import styles from './selectField.module.scss'

export type SelectFieldOption = {
    label: string
    value: number
}

type SelectFieldProps = {
    htmlId: string;
    selectedValue: number
    isLoading?: boolean
    placeholder?: string
    searchValue: string
    options: SelectFieldOption[]
    onSearch?: (e: ChangeEvent<HTMLInputElement>) => void
    onChange?: (value: number) => void
}

export const SelectField: FC<SelectFieldProps> = ({ isLoading, htmlId, placeholder, searchValue, options, selectedValue, onChange, onSearch }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [menuIsOpened, setMenuIsOpened] = useState(false)

    const ref = useRef<any>(null);

    const onSearchFocus = () => {
        setIsFocused(true)
    }

    const onContainerClick = () => {
        if (menuIsOpened) {
            return undefined
        }
        return () => setMenuIsOpened(true)
    }

    const onLabelClick = () => {
        setMenuIsOpened(prev => !prev)
    }


    const handleSelect = (val: number) => {
        if (onChange) {
            onChange(val)
        }
        setIsFocused(false)
        setMenuIsOpened(false)
    }

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            if (menuIsOpened) {
                setIsFocused(false)
                setMenuIsOpened(false)
            }
        }
    };

    useEffect(() => {
        if (menuIsOpened) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuIsOpened])


    return (
        <div
            ref={ref}
            onClick={onContainerClick}
            className={`${styles.container}`}>
            <label
                htmlFor={htmlId}
                onClick={onLabelClick}
                className={`
                ${inputStyles.wrapper} 
                ${isFocused || selectedValue ? inputStyles.focused : ""} 
                ${styles.controls}`
                }>
                <input
                    onChange={onSearch}
                    placeholder={placeholder || "Не выбрано"}
                    value={isLoading ? "Загрузка" : searchValue}
                    onFocus={onSearchFocus}
                    className={inputStyles.input}
                    type="text"
                />
                <div className={styles.iconWrapper}>
                    <img src={arrowDownIcon} height={19} width={19} />
                </div>
            </label>
            {
                menuIsOpened ?
                    <div className={styles.menu}>
                        {

                            !options.length ?
                                <div className={styles.noMatch}>
                                    <p>Ничего не найдено</p>
                                </div> :
                                <ul className={styles.list}>
                                    {
                                        options.map(option => (
                                            <li onClick={() => handleSelect(option.value)} className={styles.option}>
                                                <span>{option.label}</span>
                                                {
                                                    selectedValue === option.value ?
                                                        <img src={tickIcon} height={8} width={12} alt="" />
                                                        : null
                                                }

                                            </li>
                                        ))
                                    }
                                </ul>

                        }
                    </div>
                    : null
            }
        </div>
    )
}
