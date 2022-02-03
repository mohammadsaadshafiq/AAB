import { createFeatureSelector } from '@ngrx/store';
import * as auth from './login/loginStore/login.reducers';



export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('login');
export const selectmsgState = createFeatureSelector('login')
