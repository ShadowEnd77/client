import styles from './registerScreen.module.scss'
import { InputField } from '../../../../ui/components/forms/InputField'
import { SelectField, SelectFieldOption } from '../../../../ui/components/forms/SelectField'
import { logoIcon, tickIcon } from '../../../../ui/icons'
import { FieldsGroup } from '../../../../ui/components/forms/FieldsGroup'
import { Button } from '../../../../ui/components/buttons/Button'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { UserRegisterReq } from '../../../../types/api/user.api.types'


type UserRegisterForm = Omit<UserRegisterReq, "password">
type UserRegisterFormKeys = keyof UserRegisterForm
type UserRegisterFormSelects = keyof Pick<UserRegisterForm, "age" | "city_id">

const ageOptions: SelectFieldOption[] = Array(9).fill(null).map((_, index) => {
  return {
    value: 7 + index,
    label: `${7 + index} лет`
  }
})

export const RegisterScreen = () => {
  const [agreeCheckbox, setAgreeCheckbox] = useState(false);
  const [searchCitiesValue, setSearchCitiesValue] = useState("")

  const formik = useFormik<UserRegisterForm>({
    initialValues: {
      first_name: '',
      last_name: '',
      school: '',
      age: 0,
      city_id: 0
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const fieldsAreNotValid = Object.keys(formik.values).some((key) => {
    const typedKey = key as UserRegisterFormKeys;
    return !formik.values[typedKey]
  })

  const registerFormSelect = (
    key: UserRegisterFormSelects,
    value: number
  ) => {
    formik.setValues((values) => {
      return {
        ...values,
        [key]: value
      }
    })
  }

  const onCitySelect = (city: number, name: string) => {
    if (name !== searchCitiesValue) {
      setSearchCitiesValue(name)
    }
    registerFormSelect("city_id", city)
  }

  useEffect(() => {
    console.log(formik.values);

  }, [formik.values])

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
            <InputField<UserRegisterFormKeys>
              placeholder={"Имя"}
              name={"first_name"}
              value={formik.values.first_name}
              onChange={formik.handleChange}
            />
            <InputField<UserRegisterFormKeys>
              placeholder={"Фамилия"}
              name={"last_name"}
              value={formik.values.last_name}
              onChange={formik.handleChange}
            />
            <SelectField
              className={styles.ageSelect}
              readOnly
              placeholder={"Выбери свой возраст"}
              htmlId={"register-age-input"}
              options={ageOptions}
              value={ageOptions.find(item => item.value === formik.values.age)?.label}
              selectedValue={formik.values.age}
              onChange={(value) => registerFormSelect("age", value)}
            />
          </FieldsGroup>
          <FieldsGroup
            classNames={{
              body: styles.schoolFields
            }}
            legendChildren={<h2 className={styles.fieldsGroupTitle}>Данные о школе</h2>}
          >
            <SelectField
              className={styles.ageSelect}
              readOnly
              placeholder={"Выбери свой город"}
              htmlId={"register-city-input"}
              options={[]}
              value={searchCitiesValue}
              selectedValue={formik.values.age}
              onChange={(value, label) => onCitySelect(value, label)}
            />
            <InputField<UserRegisterFormKeys>
              placeholder={"Введи название твоей школы"}
              name={"school"}
              value={formik.values.school}
              onChange={formik.handleChange}
            />
          </FieldsGroup>
          <div className={styles.bottom}>
            <Button disabled={fieldsAreNotValid || !agreeCheckbox}>Начать</Button>
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
