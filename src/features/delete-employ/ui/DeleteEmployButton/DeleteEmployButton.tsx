import styles from './DeleteEmployButton.module.css'
import { ButtonHTMLAttributes, DetailedHTMLProps, } from 'react'
import { useAppDispatch, useAppSelector, } from '../../../../app/store/hooks'
import { deleteEmployee, } from '../../../../entities/employee/model/employeeSlice'
import { decrementEmployeeAmount, } from '../../../../entities/companies/model/companiesSlice'


interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}


export const DeleteEmployButton = ({ ...props }: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  const selectedEmployeeAmount = useAppSelector(store => store.employee.selectedEmployee).length
  const didClicked = () => {
    dispatch(deleteEmployee())
    dispatch(decrementEmployeeAmount({ amount: selectedEmployeeAmount, }))
  }

  const selectedEmployee = useAppSelector(store => store.employee.selectedEmployee)


  return (
    <button className={styles.button} onClick={didClicked} disabled={selectedEmployee.length < 1} {...props}>
      Удалить
    </button>
  )
}
