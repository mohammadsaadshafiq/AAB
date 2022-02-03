import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AdminsState} from './admin.reducers';

import * as fromAdmin from './admin.reducers';


export const selectAdminsState = createFeatureSelector<AdminsState>("Admins");
export const selectRolesState = createFeatureSelector<AdminsState>("RoleState");


export const selectAdminById = (AdminId:any) => createSelector(
  selectAdminsState,
  AdminsState => AdminsState.entities[AdminId]
);
export const selectTotal = createSelector(
  selectAdminsState,
  fromAdmin.selectTotal
);


export const selectAllAdmins = createSelector(
  selectAdminsState,
  fromAdmin.selectAll
);


export const allAdminsLoaded = createSelector(
  selectAdminsState,
  AdminsState => AdminsState.allAdminsLoaded
);











