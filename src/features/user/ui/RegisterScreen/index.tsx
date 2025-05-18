import React from 'react'
import styles from './registerScreen.module.scss'

export const RegisterScreen = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>Регистрация</h1>
        <img src="" alt="Логотип" />
      </header>
      <form action="" className={styles.form}>
          <fieldset>
            <legend>Личные данные</legend>
            <div>
              <input placeholder={"Имя"} type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </fieldset>
      </form>
      
    </section>
  )
}
