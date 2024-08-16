import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Repo {
    id: number;
    name: string;
    html_url: string;
    stargazers_count: number;
}

interface GithubState {
    repos: Repo[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    page: number;
}

const initialState: GithubState = {
    repos: [],
    status: 'idle',
    error: null,
    page: 1,
};

export const fetchRepos = createAsyncThunk('github/fetchRepos', async (page: number) => {
    const response = await axios.get(
        `https://api.github.com/search/repositories?q=language:TypeScript&sort=stars&order=desc&per_page=10&page=${page}`
    );
    return response.data.items as Repo[];
});

const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRepos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.repos = action.payload; // Обновляем репозитории для текущей страницы
            })
            .addCase(fetchRepos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { setPage } = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
