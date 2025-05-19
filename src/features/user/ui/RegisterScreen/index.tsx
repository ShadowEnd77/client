import styles from './registerScreen.module.scss'
import { InputField } from '../../../../ui/components/forms/InputField'
import { SelectField, SelectFieldOption } from '../../../../ui/components/forms/SelectField'
import { logoIcon, tickIcon } from '../../../../ui/icons'
import { FieldsGroup } from '../../../../ui/components/forms/FieldsGroup'
import { Button } from '../../../../ui/components/buttons/Button'
import { useState } from 'react'

const ageOptions: SelectFieldOption[] = Array(9).fill(5).map((_, index) => {
  return {
    value: 7 + index,
    label: `${7 + index} лет`
  }
})

export const RegisterScreen = () => {
  const [agreeCheckbox, setAgreeCheckbox] = useState(false);

  return (
    <div className={styles.centered}>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1 className={"sas"}>Регистрация</h1>
          <img src={logoIcon} height={20} width={63} alt="Логотип" />
        </header>
        <form action="" className={styles.form}>
          <FieldsGroup
            classNames={{
              body: styles.personFields
            }}
            legendChildren={<h2 className={styles.fieldsGroupTitle}>Личные данные</h2>}
          >
            <InputField placeholder={"Имя"} />
            <InputField placeholder={"Фамилия"} />
            <InputField placeholder={"Отчество (если есть)"} />
            <SelectField
              htmlId={"register-age-input"}
              options={ageOptions}
              selectedValue={0}
              onChange={value => { }}
              searchValue={''}
            />
          </FieldsGroup>
          <FieldsGroup
            classNames={{
              body: styles.schoolFields
            }}
            legendChildren={<h2 className={styles.fieldsGroupTitle}>Данные о школе</h2>}
          >
            <SelectField
              htmlId={"register-age-input"}
              options={ageOptions}
              selectedValue={0}
              onChange={value => { }}
              searchValue={''}
            />
            <InputField placeholder={"Название школы"} />
          </FieldsGroup>
          <div className={styles.bottom}>
            <Button disabled={!agreeCheckbox}>Начать</Button>
            <div onClick={() => setAgreeCheckbox(prev => !prev)} tabIndex={1} className={styles.checkboxWrapper}>
              <div className={styles.checkbox}>
                {agreeCheckbox ? <img src={tickIcon} height={5} width={9} alt="" /> : null}
              </div>
              <span>Согласен на обработку данных</span>
            </div>
          </div>
        </form>
      </section>
    </div>

  )
}
