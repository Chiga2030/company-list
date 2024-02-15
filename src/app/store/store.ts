import { configureStore, } from '@reduxjs/toolkit'
import { companiesSlice, } from '../../entities/companies/model/companiesSlice'
import { employeeSlice, } from '../../entities/employee/model/employeeSlice'


export const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
    employee: employeeSlice.reducer,
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
