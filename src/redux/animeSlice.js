import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    entities: [],
    loading: 'idle',
    error: null,
};


// Async thunk for fetching anime by title
export const fetchAnimeByTitle = createAsyncThunk(
    'anime/fetchByTitle',
    async (title, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.mangaeden.com/api/manga/?title=${title}`);
            return response.data.manga;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnimeByTitle.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchAnimeByTitle.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.entities = action.payload;
            })
            .addCase(fetchAnimeByTitle.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload;
            });
    },
});


export const { reducer } = animeSlice;
export default reducer;
