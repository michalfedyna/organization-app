import {ThunkStatus} from '../../types';

import {PayloadAction} from '@reduxjs/toolkit';

// State

export type User = {
  token: string;
  email: string;
  username: string;
};

export type UserLoggedIn = {
  userStatus: 'loggedIn';
  details: User;
};

export type UserLoggedOut = {
  userStatus: 'loggedOut';
};

export type UserRegistering = {
  userStatus: 'registering';
};

export type UserState = (UserLoggedIn | UserLoggedOut | UserRegistering) &
  ThunkStatus<string>;

// Reducers

export type UserRegisterPayload = {};

export type UserLoginPayload = {};

export type UserLogoutPayload = {};

export type UserReducers = {
  userRegister: (
    state: UserState,
    action: PayloadAction<UserRegisterPayload>,
  ) => void;
  userLogin: (
    state: UserState,
    action: PayloadAction<UserLoginPayload>,
  ) => void;
  userLogout: (
    state: UserState,
    action: PayloadAction<UserLogoutPayload>,
  ) => void;
};

// Thunks
