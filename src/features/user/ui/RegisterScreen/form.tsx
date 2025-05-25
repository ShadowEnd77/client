import { useDeferredValue, useEffect, useState } from 'react'
import styles from './registerScreen.module.scss'
import { Button } from '../../../../ui/components/buttons/Button'
import { FieldsGroup } from '../../../../ui/components/forms/FieldsGroup'
import { InputField } from '../../../../ui/components/forms/InputField'
import { SelectField } from '../../../../ui/components/forms/SelectField'
import { tickIcon } from '../../../../ui/icons'
import { getSelectOptions } from '../../../../utils/getSelectOptions'
import { STATIC_DATA } from '../../config'
import { UserRegisterReq } from '../../../../types/api/user.api.types'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { getCities, resetPagination } from '../../../citites/slices/citiesSlice'
import { generateKey } from '../../utils/generateKey'

type UserRegisterForm = Omit<UserRegisterReq, "password">
type UserRegisterFormKeys = keyof UserRegisterForm
type UserRegisterFormSelects = keyof Pick<UserRegisterForm, "age" | "city_id">

export const RegisterForm = () => {
    const dispatch = useAppDispatch()
    const { cities } = useAppSelector(state => state)

    const [agreeCheckbox, setAgreeCheckbox] = useState(true);
    const [searchCitiesValue, setSearchCitiesValue] = useState("");
    const defferedSearchCitiesValue = useDeferredValue(searchCitiesValue)

    const formik = useFormik<UserRegisterForm>({
        initialValues: {
            first_name: '',
            last_name: '',
            school: '',
            age: 0,
            city_id: 0
        },
        onSubmit: values => {
            const data: UserRegisterReq = {
                ...values,
                password: generateKey(60)
            }
            console.log(data)
        },
    });

    const fetchCities = () => {
        dispatch(getCities({
            part: cities.pagination.part,
            limit: cities.pagination.limit,
            query: searchCitiesValue
        }))
    }

    const onCitySelect = (city: number, name: string) => {
        if (name !== searchCitiesValue) {
            setSearchCitiesValue(name)
        }
        registerFormSelect("city_id", city)
    }

    const fieldsAreNotValid = Object.keys(formik.values).some((key) => {
        const typedKey = key as UserRegisterFormKeys;
        return !formik.values[typedKey]
    })

    const registerFormSelect = (key: UserRegisterFormSelects, value: number) => {
        formik.setValues((values) => {
            return { ...values, [key]: value }
        })
    }

    useEffect(() => {
        if (!cities.statuses.loading) {
            dispatch(resetPagination())
            fetchCities()
        }
    }, [defferedSearchCitiesValue])

    return (
        <form autoComplete={"off"} onSubmit={formik.handleSubmit} action="" className={styles.form}>
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
                    options={STATIC_DATA.AGES_OPTIONS}
                    value={STATIC_DATA.AGES_OPTIONS.find(item => item.value === formik.values.age)?.label}
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
                    placeholder={"Выбери свой город"}
                    htmlId={"register-city-input"}
                    options={getSelectOptions(cities.items, "id", "name")}
                    asyncOptions={{
                        is_loading: cities.statuses.loading,
                        is_pag_loading: cities.pagination.loading,
                        part: cities.pagination.part,
                        limit: cities.pagination.limit,
                        onLoad: fetchCities,
                    }}
                    onSearch={(e) => setSearchCitiesValue(e.target.value)}
                    value={searchCitiesValue}
                    selectedValue={formik.values.city_id}
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
                <Button type={"submit"} disabled={fieldsAreNotValid || !agreeCheckbox}>Начать</Button>
                <div onClick={() => setAgreeCheckbox(prev => !prev)} tabIndex={1} className={styles.checkboxWrapper}>
                    <div className={styles.checkbox}>
                        {agreeCheckbox ? <img src={tickIcon} height={5} width={9} alt="" /> : null}
                    </div>
                    <span>Согласен на обработку данных</span>
                </div>
            </div>
        </form>
    )
}
