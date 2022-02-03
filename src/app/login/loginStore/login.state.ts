import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../model/user";

export interface LoginState{
  User:User
}

export interface AppState{
  login:{
  loginState: LoginState,
  loginError: LoginError
  }
}
export interface LoginError{
  errorMessage: Messages[];
}
export interface Messages{
  message:string;
}


//export const selectErrorState = createFeatureSelector<AppState>('loginError');
export const TargetState  = (state:AppState)=> state.login;
export const loginState = createSelector(TargetState , state => state.loginState);
export const loginError = createSelector(TargetState, state => state.loginError);