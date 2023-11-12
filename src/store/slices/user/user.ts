import type {UserReducers, UserState} from './types';

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const userRegisterReducer: UserReducers['userRegister'] = (state, action) => {};

const userLoginReducer: UserReducers['userLogin'] = (state, action) => {};

const userLogoutReducer: UserReducers['userLogout'] = (state, action) => {};

const userLoginThunk = createAsyncThunk('user/login', async () => {});

const userSlice = createSlice<UserState, UserReducers, 'user'>({
  name: 'user',
  initialState: {
    userStatus: 'loggedOut',
    thunkStatus: 'idle',
  },
  reducers: {
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userLogout: userLogoutReducer,
  },
  extraReducers: builder => {
    // Login thunk
    builder.addCase(userLoginThunk.pending, (state, action) => {});
    builder.addCase(userLoginThunk.fulfilled, (state, action) => {});
    builder.addCase(userLoginThunk.rejected, (state, action) => {});
    // Logout thunk

    // Register thunk
  },
});

const {userLogin, userLogout, userRegister} = userSlice.actions;

export {userLogin, userLogout, userRegister, userLoginThunk};

export default userSlice.reducer;
