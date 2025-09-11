import React, { useEffect, useState } from 'react';
import styles from './Popup.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { closePopup } from '../../../../features/settings/slices/popupSlice';
import { successIcon } from '../../../icons';

const Popup: React.FC = () => {
    const dispatch = useAppDispatch();
    const { is_open, message } = useAppSelector(state => state.popup);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (is_open) {
            setIsVisible(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => dispatch(closePopup()), 300); // Ждем завершения анимации
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [is_open, dispatch]);

    if (!is_open) return null;

    return (
        <div className={styles.popupOverlay}>
            <div className={`${styles.popupContent} ${isVisible ? styles.isOpen : ''}`}>
                <img src={successIcon} height={40} width={40} alt="" />
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Popup;