import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StorageKeys from 'constants/storage-key';
import userApi from '../../api/userApi';

export const register = createAsyncThunk('users/register', async (payload) => {
    const data = await userApi.register(payload);

    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
    return data.user;
});

//login
export const login = createAsyncThunk('users/login', async (payload) => {
    const data = await userApi.login(payload);

    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            //clear local storage
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem(StorageKeys.USER);

            state.current = {};
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
