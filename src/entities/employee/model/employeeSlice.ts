import { createSlice, } from '@reduxjs/toolkit'
import type { PayloadAction, } from '@reduxjs/toolkit'
import { nanoid, } from 'nanoid'


interface Employ extends Record<string, string> {
  id: string
  companyId: string
  lastName: string
  firstName: string
  position: string
}

interface State {
  selectedEmployee: string[]
  employList: Employ[]
}


const initialState: State = {
  selectedEmployee: [],
  employList: [
    {
      id: nanoid(),
      companyId: '1',
      firstName: 'Имя - 1',
      lastName: 'Фамилия - 1',
      position: 'Должность - 1',
    },
    {
      id: nanoid(),
      companyId: '1',
      firstName: 'Имя - 2',
      lastName: 'Фамилия - 2',
      position: 'Должность - 2',
    },
    {
      id: nanoid(),
      companyId: '1',
      firstName: 'Имя - 3',
      lastName: 'Фамилия - 3',
      position: 'Должность - 3',
    },
    {
      id: nanoid(),
      companyId: '2',
      firstName: 'Имя - 4',
      lastName: 'Фамилия - 4',
      position: 'Должность - 4',
    },
    {
      id: nanoid(),
      companyId: '2',
      firstName: 'Имя - 5',
      lastName: 'Фамилия - 5',
      position: 'Должность - 5',
    },
    {
      id: nanoid(),
      companyId: '2',
      firstName: 'Имя - 6',
      lastName: 'Фамилия - 6',
      position: 'Должность - 6',
    },
    {
      id: nanoid(),
      companyId: '3',
      firstName: 'Имя - 7',
      lastName: 'Фамилия - 7',
      position: 'Должность - 7',
    },
    {
      id: nanoid(),
      companyId: '3',
      firstName: 'Имя - 8',
      lastName: 'Фамилия - 8',
      position: 'Должность - 8',
    },
  ],
}


export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    creteEmploy: (state, action: PayloadAction<{companyId: string}>) => {
      state.employList.push({
        id: nanoid(),
        companyId: action.payload.companyId,
        firstName: '',
        lastName: '',
        position: '',
      })
    },

    patchEmployInfo: (state, action: PayloadAction<{id: string, field: string, newValue: string}>) => {
      const { id, field, newValue, } = action.payload
      const employ = state.employList.find(employ => employ.id === id)

      if (!employ) {
        return
      }

      employ[field] = newValue
    },

    deleteEmployee: state => {
      state.employList = state.employList.filter(employ => !state.selectedEmployee.some(selected => selected === employ.id))
      state.selectedEmployee = []
    },

    selectEmploy: (state, action: PayloadAction<{id: string}>) => {
      state.selectedEmployee.push(action.payload.id)
    },

    unSelectEmploy: (state, action: PayloadAction<{id: string}>) => {
      state.selectedEmployee = state.selectedEmployee.filter(employ => employ !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectEmploy, unSelectEmploy, deleteEmployee, creteEmploy, patchEmployInfo, } = employeeSlice.actions
