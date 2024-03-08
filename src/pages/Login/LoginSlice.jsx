import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: null,
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAuth: (state,action) => {
            state.isAuth = action.payload
        },

  
    },
})


export const {setAuth} = accountSlice.actions

export default accountSlice.reducer