import { useDispatch, } from 'react-redux'
import { useAppSelector, } from '../../app/store/hooks'
import { type Column, Table, } from '../../shared'
import styles from './CompanyListWidget.module.css'
import { patchCompanyInfo, selectCompany, unSelectCompany, } from '../../entities/companies/model/companiesSlice'
import { CreateCompanyButton, } from '../../features/create-company'
import { DeleteCompanyButton, } from '../../features/delete-company'


const columns: Column[] = [
  {
    name: 'companyName',
    value: 'Название компании',
    isEditable: true,
  },
  {
    name: 'employeeAmount',
    value: 'Кол-во сотрудников',
    isEditable: false,
  },
  {
    name: 'address',
    value: 'Адрес',
    isEditable: true,
  },
]


export const CompanyListWidget = (): JSX.Element => {
  const dispatch = useDispatch()
  const companies = useAppSelector(store => store.companies.companyList)

  const didCompanyInfoChanged = (id: string, field: string, newValue: string) => {
    dispatch(patchCompanyInfo({
      id,
      field,
      newValue,
    }))
  }

  const didCompanySelected = (id: string) => {
    dispatch(selectCompany({ id, }))
  }

  const didCompanyUnSelected = (id: string) => {
    dispatch(unSelectCompany({ id, }))
  }


  return (
    <section  className={styles.section}>
      <h2>Список компаний</h2>

      <div className={styles.buttonsWrapper}>
        <CreateCompanyButton/>
        <DeleteCompanyButton/>
      </div>

      <Table
        columns={columns}
        rows={companies}
        onChange={didCompanyInfoChanged}
        onSelect={didCompanySelected}
        onUnSelect={didCompanyUnSelected}
      />
    </section>
  )
}
