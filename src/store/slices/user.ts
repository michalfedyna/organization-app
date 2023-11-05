import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type User = {
  token: string;
  email: string;
  username: string;
};

export type UserLoggedIn = {
  isLoggedIn: true;
  details: User;
};

export type UserNotLoggedIn = {
  isLoggedIn: false;
};
export type UserState = UserLoggedIn | UserNotLoggedIn;

export type UserReducers = {
  userLogin: (state: UserState, action: PayloadAction) => void;
  userLogoff: (state: UserState, action: PayloadAction) => void;
};

const initialState: UserState = {
  isLoggedIn: false,
};

const userLoginReducer: UserReducers['userLogin'] = (state, action) => {};

const userLogoffReducer: UserReducers['userLogoff'] = (state, action) => {};

const userSlice = createSlice<UserState, UserReducers, 'user'>({
  name: 'user',
  initialState,
  reducers: {
    userLogin: userLoginReducer,
    userLogoff: userLogoffReducer,
  },
});

export const {userLogin, userLogoff} = userSlice.actions;

export default userSlice.reducer;
