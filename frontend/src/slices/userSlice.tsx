import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit'
import Person from '../model/Person'
import axiosInstance from '../axios-api/axios_instance'

export interface UserState  {
    user: Person | null
    error: string | null
    loading: string
}
  
const initialState: UserState = {
   user: null,
   error: null,
   loading: 'idle'
}

export const getLoggedUser = createAsyncThunk(
    "user/getLoggedUser",
    async () => {
        try {
            const response = await axiosInstance.get('/person')
            return response.data;  
        } catch (err: any) {
            return isRejectedWithValue(err.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getLoggedUser.pending, (state) => {
            if (state.loading === 'idle') {
              state.loading = 'pending'
            }
        })
        builder.addCase(getLoggedUser.fulfilled, (state, action: PayloadAction<Person>) => {
            state.user = action.payload
        })
        builder.addCase(getLoggedUser.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload
        })
    }

})

export default userSlice.reducer;