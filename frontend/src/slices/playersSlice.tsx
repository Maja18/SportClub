import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit'
import axiosInstance from '../axios-api/axios_instance';
import Player from '../model/Player';

export interface PlayersState  {
    players: Player[]
    newPlayer: Player | null
    deletedPlayer: Player | null
    error: string | null
    loading: string
}

  
const initialState: PlayersState = {
   players: [],
   newPlayer: null,
   deletedPlayer: null,
   error: null,
   loading: 'idle',
}

export const getPlayers = createAsyncThunk(
    "players/getPlayers",
    async () => {
        try{
            const response = await axiosInstance.get('/player')
            return response.data;  
        } catch (err: any) {
            return isRejectedWithValue(err.response.data)
        }
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
        builder.addCase(getPlayers.pending, (state) => {
            if (state.loading === 'idle') {
              state.loading = 'pending'
            }
        })
        builder.addCase(getPlayers.fulfilled, (state, action: PayloadAction<Player[]>) => {
            state.players = action.payload
        })
        builder.addCase(getPlayers.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload
        })
        builder.addCase(addNewPlayer.pending, (state) => {
            if (state.loading === 'idle') {
              state.loading = 'pending'
            }
        })
        builder.addCase(addNewPlayer.fulfilled, (state, action: PayloadAction<Player>) => {
            state.newPlayer = action.payload
        })
        builder.addCase(addNewPlayer.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload
        })
        builder.addCase(deletePlayer.pending, (state) => {
            if (state.loading === 'idle') {
              state.loading = 'pending'
            }
        })
        builder.addCase(deletePlayer.fulfilled, (state, action: PayloadAction<Player>) => {
            state.deletedPlayer = action.payload
        })
        builder.addCase(deletePlayer.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload
        })
    }
})

export default playersSlice.reducer;