import { ChangeEvent, FocusEvent, useId, } from 'react'
import styles from './Table.module.css'


export interface Column {
  name: string
  value: string
  isEditable: boolean
}

interface Props {
  columns: Column[]
  rows: Record<string, string>[]
  onChange: (id: string, field: string, newValue: string) => void
  onSelect: (id: string) => void
  onUnSelect: (id: string) => void
}


const didRowChecked = (
  tableId: string,
  rowId: string,
  selectCallback: (id: string) => void,
  unSelectCallback: (id: string) => void,
  event: ChangeEvent<HTMLInputElement>
) => {
  const row = document.getElementById(`row-${rowId}`)
  const isChecked = event.target.checked

  if (!row) {
    return
  }


  if (isChecked) {
    row.classList.add(styles.selected)
    selectCallback(rowId)
  } else {
    row.classList.remove(styles.selected)

    const table = document.getElementById(tableId)
    const mainCheckbox: HTMLInputElement | null | undefined = table?.querySelector('.mainCheckbox')
    mainCheckbox?.checked && (mainCheckbox.checked = false)
    unSelectCallback(rowId)
  }
}


const didTableChecked = (tableId: string) => {
  const table = document.getElementById(tableId)
  if (!table) {
    return
  }

  const mainCheckbox: HTMLInputElement | null = table.querySelector('.mainCheckbox')
  const isMainChecked = mainCheckbox?.checked
  const checkboxList = table.querySelectorAll('.rowCheckbox')

  Array.prototype.forEach.call(checkboxList, ((element: HTMLInputElement)  => {
    const isElementChecked = element.checked

    if (isMainChecked && !isElementChecked) {
      element.click()
    }

    if (!isMainChecked && isElementChecked) {
      element.click()
    }
  }))
}


const didCellUnfocused = (
  row: Record<string, string>,
  cell: Column,
  callback: (id: string, field: string, newValue: string) => void,
  event: FocusEvent
) => {
  const newValue = String(event.target.textContent)

  if (newValue !== row[cell.name]) {
    callback(row.id, cell.name, newValue)
  }
}


export const Table = ({
  columns,
  rows,
  onChange,
  onSelect,
  onUnSelect,
}:Props): JSX.Element => {
  const tableId = useId()

  return (
    <table id={tableId} className={styles.table}>
      <thead>
        <tr>
          <th>
            <label className={styles.rowCheckboxLabel}>
              <input className={'mainCheckbox'} type={'checkbox'} onChange={didTableChecked.bind(null, tableId)} />
            </label>
          </th>
          {columns.map(col => (
            <th key={col.name}>{col.value}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map(row => (
          <tr key={row.id} id={`row-${row.id}`}>
            <td>
              <label className={styles.rowCheckboxLabel}>
                <input
                  className={'rowCheckbox'}
                  type={'checkbox'}
                  onChange={didRowChecked.bind(null, tableId, row.id, onSelect, onUnSelect)}
                />
              </label>
            </td>

            {columns.map(cell => (
              <td
                key={cell.name}
                suppressContentEditableWarning
                contentEditable={cell.isEditable}
                onBlur={didCellUnfocused.bind(null, row, cell, onChange)}
              >
                {row[cell.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
