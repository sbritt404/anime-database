// src/redux/animeSlice.js
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
        const options = {
            method: 'GET',
            url: 'https://community-manga-eden.p.rapidapi.com/list/0',
            params: {
                'manga.title': title // Use the correct parameter for searching by title
            },
            headers: {
                'X-RapidAPI-Key': '31c6b26f3bmsh00499c323ed5954p1dddffjsn668f5990dc8e',
                'X-RapidAPI-Host': 'community-manga-eden.p.rapidapi.com'
            
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data; // Adjust this to match the structure of your Redux state
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
                console.log('Fetching anime data...');
                state.loading = 'pending';
            })
            .addCase(fetchAnimeByTitle.fulfilled, (state, action) => {
                console.log('Fetch successful:', action.payload);
                state.loading = 'idle';
                state.entities = action.payload;
            })
            .addCase(fetchAnimeByTitle.rejected, (state, action) => {
                console.log('Fetch failed:', action.payload);
                state.loading = 'idle';
                state.error = action.payload;
            });
    },
});
export const { reducer } = animeSlice;
export default reducer;