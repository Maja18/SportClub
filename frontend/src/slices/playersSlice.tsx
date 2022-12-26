import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../axios-api/axios_instance';
import Player from '../model/Player';

export interface PlayersState  {
    players: Player[]
    newPlayer: Player | null
}

  
const initialState: PlayersState = {
   players: [],
   newPlayer: null
}

export const getPlayers = createAsyncThunk(
    "players/getPlayers",
    async () => {
      const response = await axiosInstance.get('/player')
      return response.data;  
    }
)

export const addNewPlayer = createAsyncThunk(
    "players/addPlayer",
    async (newPlayer: Player) => {
      const response = await axiosInstance.post('/player', newPlayer)
      return response.data;  
    }
)

export const deletePlayer  = createAsyncThunk(
    "players/deletePlayer",
    async (id: number) => {
        const response = await axiosInstance.delete('/player/' + id)
        return response.data;  
      }
)

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getPlayers.fulfilled, (state, action) => {
            state.players = action.payload
        })
        builder.addCase(addNewPlayer.fulfilled, (state, action) => {
            state.newPlayer = action.payload
        })
        builder.addCase(deletePlayer.fulfilled, (state, action) => {
            
        })
    }
})

export default playersSlice.reducer;