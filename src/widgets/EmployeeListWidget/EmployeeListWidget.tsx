import { useAppDispatch, useAppSelector, } from '../../app/store/hooks'
import { type Column, Table, } from '../../shared'
import styles from './EmployeeListWidget.module.css'
import { DeleteEmployButton, } from '../../features/delete-employ'
import { CreateEmployButton, } from '../../features/create-employ'
import { patchEmployInfo, selectEmploy, unSelectEmploy, } from '../../entities/employee/model/employeeSlice'


const columns: Column[] = [
  {
    name: 'lastName',
    value: 'Фамилия',
    isEditable: true,
  },
  {
    name: 'firstName',
    value: 'Имя',
    isEditable: true,
  },
  {
    name: 'position',
    value: 'Должность',
    isEditable: true,
  },
]


export const EmployeeListWidget = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const selectedCompanies = useAppSelector(store => store.companies.selectedCompanies)
  const employee = useAppSelector(store => store.employee.employList).filter(employ => selectedCompanies.some(selected => employ.companyId === selected))

  const didEmployInfoChanged = (id: string, field: string, newValue: string) => {
    dispatch(patchEmployInfo({
      id,
      field,
      newValue,
    }))
  }

  const didEmploySelected = (id: string) => {
    dispatch(selectEmploy({ id, }))
  }

  const didEmployUnSelected = (id: string) => {
    dispatch(unSelectEmploy({ id, }))
  }


  return (
    <section  className={styles.section}>
      <h2>Список Сотрудников</h2>

      <div className={styles.buttonsWrapper}>
        <CreateEmployButton disabled={selectedCompanies.length !== 1} />
        <DeleteEmployButton/>
      </div>

      <Table
        columns={columns}
        rows={employee}
        onChange={didEmployInfoChanged}
        onSelect={didEmploySelected}
        onUnSelect={didEmployUnSelected}
      />
    </section>
  )
}
