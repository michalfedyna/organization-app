export type ThunkStatus<Error> =
  | {thunkStatus: 'idle'}
  | {thunkStatus: 'loading'}
  | {thunkStatus: 'error'; error: Error};
