import { carService } from "../../services/car.service";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cars: [],
    status: null,
    carForUpdate:null
};
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const { data } = await carService.getAll();
        return data
    }
);
const create = createAsyncThunk(
    'create',
    async ({ car }, { rejectWithValue }) => {
        try {
            const { data } = await carService.create(car)
            return data
        } catch (error) {
            return rejectWithValue({ status: error.massage, formError: error.response.data })
        }
    }
);
const deleteById = createAsyncThunk(
    'deleteById',
    async ({ id }, { dispatch, rejectWithValue }) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteByCarId({ id }))
        } catch (error) {
            return rejectWithValue({ status: error.massage })
        }
    }
);
const updateById=createAsyncThunk(
    'updateById',
    async({id,car},{dispatch,rejectWithValue})=>{
        try {
            await carService.upadateById(id,car);
            dispatch(updateCarById({id,car}))
        } catch (error) {
            return rejectWithValue({ status: error.massage })
        } 
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteByCarId: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index,1)
        },
        setCarForUpdate:(state,action)=>{
            state.carForUpdate=action.payload.car
        },
        updateCarById:(state,action)=>{
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index]={...state.cars[index],...action.payload.car};
            state.carForUpdate=false
        }
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
            state.status = 'completed'
        },
        [create.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }
})

const { reducer: carReducer, actions: {updateCarById, deleteByCarId,setCarForUpdate} } = carSlice;

const carActions = {
    setCarForUpdate,
    getAll,
    create,
    deleteById,
    updateById
}

export default carReducer
export { carActions }