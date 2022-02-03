import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, filter, map, mergeMap, switchMap, withLatestFrom} from "rxjs/operators";
import {select, Store} from '@ngrx/store';
import { AdminActionTypes, AdminAdded, AdminDelete, AdminDeleted, AdminLoaded, AdminRequested, AllAdminsLoaded, AllAdminsRequested, LoadRoles, RolesLoaded } from './admin.actions';
import { AppState } from './AppState';
import { HttpClient } from '@angular/common/http';
import { allAdminsLoaded } from './admin.selectors';
import { AdminModel } from './model/admin.model';
import { AdminsService } from '../services/admin.service';
import { of } from 'rxjs';

@Injectable()
export class AdminEffects {
  
  @Effect()
  loadAdmin$ = this.actions$
    .pipe(
      ofType<AdminRequested>(AdminActionTypes.AdminRequested),
      mergeMap(action => this.adminSerive.findAdminById(action.payload.AdminId)),
      map((Admin:AdminModel) => new AdminLoaded({Admin}))
  );

  @Effect()
  loadRoles$ = this.actions$.pipe(
  ofType<LoadRoles>(AdminActionTypes.LoadRoles),
  map((action: LoadRoles) => action),
  switchMap(() => {
    return this.adminSerive.LoadRoleList()
      .pipe(
        map((roles:any) => {
          return new RolesLoaded(roles);
      })
      )}));

      @Effect()
  deleteAdmin$ = this.actions$.pipe(
  ofType<AdminDelete>(AdminActionTypes.AdminDelete),
  map((action: AdminDelete) => action),
  switchMap((action) => {
    return this.adminSerive.deleteAdmin(action.payload.id)
      .pipe(
        map(() => {
          return new AdminDeleted(action.payload.id);
      })
      )}));

  // this.actions$
  //   .pipe(
  //     ofType<AdminAdded>(AdminActionTypes.LoadRoles),
  //     mergeMap(action => this.adminSerive.LoadRoleList()),
  //     map((roles) => new RolesLoaded(roles))

  // );

  @Effect()
  loadAllAdmins$ = this.actions$
    .pipe(
      ofType<AllAdminsRequested>(AdminActionTypes.AllAdminsRequested),
      map((action: AllAdminsRequested) => action),
      switchMap(() => {
        return this.adminSerive.findAllAdmins()
          .pipe(
            map((adminList:any) => {
               let list=[];
               for (let index = 0; index < adminList.data.all_users.length; index++) {
                 const element = adminList.data.all_users[index];
                 list.push({admin:element._id,id:index,username:element.username,password:element.password,email:element.email,role:element.role});
               }
              return new AllAdminsLoaded({Admins:list});
          })
          )}));
    
  

  constructor(private actions$ :Actions,private adminSerive:AdminsService,
              private store: Store<AppState>) {

  }

}








