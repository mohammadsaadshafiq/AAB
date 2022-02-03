import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ApiDataService } from 'src/app/Services/api-data.service';
import { AuthActionTypes, LogIn, LogInFailure, LogInSuccess } from './login.actions';
import { User } from '../model/user';
import { of } from 'rxjs';
import { AdminsService } from 'src/app/Components/services/admin.service';
@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: ApiDataService,
    private router: Router,
    public service:AdminsService
  ) {}

  @Effect()
  LogIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action),
    switchMap((action:LogIn) => {
      return this.authService.httpPost('portalauth','login',action.payload)
        .pipe(
          map((user:any) => {
            this.router.navigate(['admin-list']);
            localStorage.setItem('_context',user.data.token);
            localStorage.setItem('currentId',user.data.user._id);
            return new LogInSuccess({token: user.data.token, email: user.data.user.email,id:user.data.user.id});
          
        }),
        catchError((error) => {
          return of(new LogInFailure(error.error.errors));
        }))}));
   


//   @Effect({ dispatch: false })
//   LogInSuccess: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.LOGIN_SUCCESS),
//     tap((user) => {
//       localStorage.setItem('token', user.payload.token);
//       this.router.navigateByUrl('/');
//     })
//   );

//   @Effect({ dispatch: false })
//   LogInFailure: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.LOGIN_FAILURE)
//   );

//   @Effect()
//   SignUp: Observable<any> = this.actions
//     .ofType(AuthActionTypes.SIGNUP)
//     .map((action: SignUp) => action.payload)
//     .switchMap(payload => {
//       return this.authService.signUp(payload.email, payload.password)
//         .map((user) => {
//           return new SignUpSuccess({token: user.token, email: payload.email});
//         })
//         .catch((error) => {
//           return Observable.of(new SignUpFailure({ error: error }));
//         });
//     });

//   @Effect({ dispatch: false })
//   SignUpSuccess: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.SIGNUP_SUCCESS),
//     tap((user) => {
//       localStorage.setItem('token', user.payload.token);
//       this.router.navigateByUrl('/');
//     })
//   );

//   @Effect({ dispatch: false })
//   SignUpFailure: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.SIGNUP_FAILURE)
//   );

//   @Effect({ dispatch: false })
//   public LogOut: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.LOGOUT),
//     tap((user) => {
//       localStorage.removeItem('token');
//     })
//   );

//   @Effect({ dispatch: false })
//   GetStatus: Observable<any> = this.actions
//     .ofType(AuthActionTypes.GET_STATUS)
//     .switchMap(payload => {
//       return this.authService.getStatus();
//     });

}
