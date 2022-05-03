import { createSlice } from "@reduxjs/toolkit";

const initialState = { dogs: [] }
const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {

    }
})

const {reducer:dogReducer,actions:{}}=dogSlice

export default dogReducer