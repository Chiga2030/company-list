import styles from './CreateEmployButton.module.css'
import { ButtonHTMLAttributes, DetailedHTMLProps, } from 'react'
import { useAppDispatch, useAppSelector, } from '../../../../app/store/hooks'
import { creteEmploy, } from '../../../../entities/employee/model/employeeSlice'
import { incrementEmployeeAmount, } from '../../../../entities/companies/model/companiesSlice'


interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}


export const CreateEmployButton = ({ ...props }: Props): JSX.Element => {
  const companyId = useAppSelector(store => store.companies.selectedCompanies)[0]

  const dispatch = useAppDispatch()
  const didClicked = () => {
    dispatch(creteEmploy({
      companyId,
    }))
    dispatch(incrementEmployeeAmount({ id: companyId, }))
  }


  return (
    <button className={styles.button} onClick={didClicked} {...props}>
      Добавить
    </button>
  )
}
