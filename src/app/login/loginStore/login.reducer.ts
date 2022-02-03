import { Action, combineReducers } from "@ngrx/store";
import { User } from "../model/user";
import { All, AuthActionTypes } from "./login.actions";
import { AppState, LoginError, LoginState } from "./login.state";


export const initialState: AppState = {
      login:{
      loginState:null,
      loginError:null
      }
    };
const loginInitialState : LoginState = {
  User: null
}
const loginErrorState : LoginError = {
  errorMessage: []
};
// export function LoginReducer(state = initialState, action: All): AppState {
//   switch (action.type) {
//     case AuthActionTypes.LOGIN_SUCCESS: {
//       let LState: LoginState = {
//         User:
//         {
//           token:action.payload.token,
//           id:action.payload.id,
//           email:action.payload.email
//         }
//       };
//       return {
//         ...state,
//         login:{
//           loginState: LState,
//           loginError:null
//         }
//       };
//     }
//     case AuthActionTypes.LOGIN_FAILURE: {
//       return {
//         ...state,
//         login:{
//           loginError:null
//         }
//       };
//     }
   
//     case AuthActionTypes.LOGOUT: {
//       return initialState;
//     }
//     default: {
//       return state;
//     }
//   }
// }
const reducers = combineReducers<AppState['login'], any>({
  loginState(state = loginInitialState, action: All) {
      
      switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS: {
         
          return {
            ...state,
            User:{
              token:action.payload.token,
              id:action.payload.id,
              email:action.payload.email}
          };
        }
        default:
            return state;
        }
  },
  loginError(state = loginErrorState, action: All) {
     
      switch (action.type) {
          case AuthActionTypes.LOGIN_FAILURE:
              return {...state,errorMessage:action.payload};
          default:
              return state;
          }
  },


});


export function LoginReducer(s: AppState['login'], a: Action) {
  return reducers(s, a);
}