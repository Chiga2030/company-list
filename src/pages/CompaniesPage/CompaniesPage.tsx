import { CompanyListWidget, } from '../../widgets/CompanyListWidget'
import { EmployeeListWidget, } from '../../widgets/EmployeeListWidget'
import styles from './CompaniesPage.module.css'

export const CompaniesPage = (): JSX.Element => {
  return (
    <main className={styles.page}>
      <CompanyListWidget/>

      <EmployeeListWidget/>
    </main>
  )
}
