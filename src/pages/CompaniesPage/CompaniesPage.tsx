import { CompanyListWidget, } from '../../widgets/CompanyListWidget'
import styles from './CompaniesPage.module.css'

export const CompaniesPage = (): JSX.Element => {
  return (
    <main className={styles.page}>
      <CompanyListWidget/>
    </main>
  )
}
