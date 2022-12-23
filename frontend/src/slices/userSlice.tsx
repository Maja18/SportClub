import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Person from '../model/Person'
import axiosInstance from '../axios-api/axios_instance'

export interface UserState  {
    user: Person | null
}
  
const initialState: UserState = {
   user: null
}

export const getLoggedUser = createAsyncThunk(
    "user/getLoggedUser",
    async () => {
      const response = await axiosInstance.get('/person')
      return response.data;  
    }

)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getLoggedUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }

})

export default userSlice.reducer;