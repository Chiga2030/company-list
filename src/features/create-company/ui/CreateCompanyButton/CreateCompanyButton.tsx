import { useDispatch, } from 'react-redux'
import styles from './CreateCompanyButton.module.css'
import { creteCompany, } from '../../../../entities/companies/model/companiesSlice'
import { ButtonHTMLAttributes, DetailedHTMLProps, } from 'react'


interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}


export const CreateCompanyButton = ({ ...props }: Props): JSX.Element => {
  const dispatch = useDispatch()
  const didClicked = () => {
    dispatch(creteCompany())
  }


  return (
    <button className={styles.button} onClick={didClicked} {...props}>
      Добавить
    </button>
  )
}
