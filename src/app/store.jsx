import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import accountReducer from '../pages/Login/LoginSlice'
import doctypeReducer from '../pages/Admin/ESD/DocTypeSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        account:accountReducer,
        doctype:doctypeReducer

    },
})
