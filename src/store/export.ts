export {store, type RootState, type AppDispatch} from './store';
export {useAppDispatch, useAppSelector} from './hooks';

export {userLogin, userLogout, userRegister} from './slices/user/user';
