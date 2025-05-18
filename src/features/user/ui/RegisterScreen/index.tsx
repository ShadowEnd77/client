import React from 'react'
import styles from './registerScreen.module.scss'
import { InputField } from '../../../../components/forms/InputField'

export const RegisterScreen = () => {
  return (
    <div className={styles.centered}>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1 className={"sas"}>Регистрация</h1>
          <img src="" alt="Логотип" />
        </header>
        <form action="" className={styles.form}>
          <fieldset>
            <legend>
              <h2>Личные данные</h2>
            </legend>
            <div>
              <InputField placeholder={"Имя"} />
              <InputField placeholder={"Фамилия"} />
              <InputField placeholder={"Отчество (если есть)"} />
              <InputField placeholder={"Возраст"} />
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h2>Данные о школе</h2>
            </legend>
            <div>
              <InputField placeholder={"Имя"} />
              <InputField placeholder={"Фамилия"} />
              <InputField placeholder={"Отчество (если есть)"} />
              <InputField placeholder={"Возраст"} />
            </div>
          </fieldset>

        </form>

      </section>
    </div>

  )
}
