import styles from './DeleteCompanyButton.module.css'
import { deleteCompanies, } from '../../../../entities/companies/model/companiesSlice'
import { ButtonHTMLAttributes, DetailedHTMLProps, } from 'react'
import { useAppDispatch, useAppSelector, } from '../../../../app/store/hooks'


interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}


export const DeleteCompanyButton = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  const selectedCompanies = useAppSelector(store => store.companies.selectedCompanies)

  const didClicked = () => {
    dispatch(deleteCompanies())
  }


  return (
    <button className={styles.button} onClick={didClicked} disabled={selectedCompanies.length < 1} {...props}>
      Удалить
    </button>
  )
}
