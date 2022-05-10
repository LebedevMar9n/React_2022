import { carService } from "../../services/car.service";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cars: [],
    status: null
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
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteByCarId: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index,1)
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

const { reducer: carReducer, actions: { deleteByCarId} } = carSlice;

const carActions = {
    getAll,
    create,
    deleteById
}

export default carReducer
export { carActions }