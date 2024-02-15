import { createSlice, } from '@reduxjs/toolkit'
import type { PayloadAction, } from '@reduxjs/toolkit'
import { nanoid, } from 'nanoid'


interface Company extends Record<string, string> {
  id: string
  companyName: string
  employeeAmount: string
  address: string
}

type CompanyId = string

interface State {
  selectedCompanies: CompanyId[]
  companyList: Company[]
}


const initialState: State = {
  selectedCompanies: [],
  companyList: [
    {
      id: '1',
      companyName: 'Компания - 1',
      employeeAmount: '3',
      address: 'ул. Пушкина',
    },
    {
      id: '2',
      companyName: 'Компания - 2',
      employeeAmount: '3',
      address: 'ул. Лубянка',
    },
    {
      id: '3',
      companyName: 'Компания - 3',
      employeeAmount: '2',
      address: 'ул. Покровская',
    },
  ],
}


export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    creteCompany: state => {
      state.companyList.push({
        id: nanoid(),
        address: '',
        companyName: '',
        employeeAmount: '0',
      })
    },

    patchCompanyInfo: (state, action: PayloadAction<{id: CompanyId, field: string, newValue: string}>) => {
      const { id, field, newValue, } = action.payload
      const company = state.companyList.find(company => company.id === id)

      if (!company) {
        return
      }

      company[field] = newValue
    },

    deleteCompanies: state => {
      state.companyList = state.companyList.filter(company => !state.selectedCompanies.some(selected => selected === company.id))
      state.selectedCompanies = []
    },

    selectCompany: (state, action: PayloadAction<{id: CompanyId}>) => {
      state.selectedCompanies.push(action.payload.id)
    },

    unSelectCompany: (state, action: PayloadAction<{id: CompanyId}>) => {
      state.selectedCompanies = state.selectedCompanies.filter(company => company !== action.payload.id)
    },

    incrementEmployeeAmount: (store, action: PayloadAction<{id: CompanyId}>) => {
      const currentCompany = store.companyList.find(company => company.id === action.payload.id)
      if (currentCompany) {
        currentCompany.employeeAmount = String(Number(currentCompany.employeeAmount) + 1)
      }
    },

    decrementEmployeeAmount: (store, action: PayloadAction<{amount: number}>) => {
      const { amount, } = action.payload
      const companyId = store.selectedCompanies[0]
      const currentCompany = store.companyList.find(company => company.id === companyId)
      if (currentCompany) {
        currentCompany.employeeAmount = String(Number(currentCompany.employeeAmount) - amount)
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  patchCompanyInfo,
  creteCompany,
  selectCompany,
  unSelectCompany,
  deleteCompanies,
  decrementEmployeeAmount,
  incrementEmployeeAmount,
} = companiesSlice.actions
