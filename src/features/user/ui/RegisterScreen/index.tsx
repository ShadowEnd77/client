import styles from './registerScreen.module.scss'
import { logoIcon } from '../../../../ui/icons'
import { RegisterForm } from './form'

export const RegisterScreen = () => {
  return (
    <div className={styles.centered}>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1 className={"sas"}>Регистрация</h1>
          <img src={logoIcon} height={20} width={63} alt="Логотип" />
        </header>
        <RegisterForm />
      </section>
    </div>
  )
}
