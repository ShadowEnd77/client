import styles from './registerScreen.module.scss'
import { logoIcon } from '../../../../../ui/icons'
import { RegisterForm } from './form'
import { WhiteContainer } from '../../../../../ui/components/containers/WhiteContainer'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { useEffect } from 'react'
import { openPopup } from '../../../../settings/slices/popupSlice'

export const RegisterScreen = () => {
  const dispatch = useAppDispatch()

  return (
    <WhiteContainer className={styles.section}>
      <header className={styles.header}>
        <h1 className={`${styles.title}`}>Регистрация</h1>
        <img src={logoIcon} height={20} width={63} alt="Логотип" />
      </header>
      <RegisterForm />
    </WhiteContainer>
  )
}
