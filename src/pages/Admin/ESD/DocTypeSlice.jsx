import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    docTypeList: [],
    docTypeById: null,
    positionList: [],
    workerList: [],
}

export const docTypeSllce = createSlice({
    name: 'doctype',
    initialState,
    reducers: {
        getDocTypeList: (state,action) => {
            state.docTypeList = action.payload
        },

        getPositionsForDropDown: (state,action) => {
            state.positionList = action.payload
        },

        getUsersForDropDown: (state,action)=> {
            state.workerList = action.payload
        },
    },
})


export const {getDocTypeList,getPositionsForDropDown,getUsersForDropDown} = docTypeSllce.actions

export default docTypeSllce.reducer