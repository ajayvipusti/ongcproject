import {configureStore, combineReducers} from '@reduxjs/toolkit'
import csatSlice from './slice/csat/csat'
import dashboardSlice from './slice/dashboard/dashboard'

export const rootReducer = combineReducers({
    csat:csatSlice.reducer,
    dashboard:dashboardSlice.reducer,
})

export const store = configureStore({
    reducer:rootReducer
})