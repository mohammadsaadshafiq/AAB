import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity'; 
import { AdminModel } from './model/admin.model';








export enum AdminActionTypes {
  AdminRequested = '[View Admin Page] Admin Requested',
  AdminLoaded = '[Admins API] Admin Loaded',
  AllAdminsRequested = '[Admins Home Page] All Admins Requested',
  AllAdminsLoaded = '[Admins API] All Admins Loaded',
  AdminSaved = '[Edit Admin] Admin Saved',
  AddAdmin = '[Add Admin] New Admin',
  LoadRoles = '[Load Roles API] Load Roles',
  RolesLoaded = "[Roles Loaded] Roles Loaded from API",
  AdminDelete = "[Admin Delete] Delete From API",
  AdminDeleted = "[Admin Deleted] Deleted From API"
}

export class AdminRequested implements Action {

  readonly type = AdminActionTypes.AdminRequested;

  constructor(public payload: { AdminId: number }) {

  }
}

export class AdminAdded implements Action{
  readonly type = AdminActionTypes.AddAdmin;
  constructor(public payload: { Admin: AdminModel }) {

  }
}

export class AdminLoaded implements Action {

  readonly type = AdminActionTypes.AdminLoaded;

  constructor(public payload: { Admin: AdminModel }) {
  }
}


export class AllAdminsRequested implements Action {

  readonly type = AdminActionTypes.AllAdminsRequested;

}
export class LoadRoles implements Action {

  readonly type = AdminActionTypes.LoadRoles;

}
export class RolesLoaded implements Action {

  readonly type = AdminActionTypes.RolesLoaded;
constructor(public payload:any){}
}

export class AllAdminsLoaded implements Action {

  readonly type = AdminActionTypes.AllAdminsLoaded;

  constructor(public payload: { Admins: any }) {

  }

}

export class AdminSaved implements Action {

  readonly type = AdminActionTypes.AdminSaved;

  constructor(public payload: { Admin: Update<AdminModel> }) {}
}

export class AdminDelete implements Action {

  readonly type = AdminActionTypes.AdminDelete;

  constructor(public payload: { id:any }) {}
}

export class AdminDeleted implements Action {

  readonly type = AdminActionTypes.AdminDeleted;

  constructor(public payload: any   ) {}
}




export type AdminActions =
  AdminRequested
  | AdminLoaded
  | AllAdminsRequested
  | AllAdminsLoaded
  | AdminAdded
  | LoadRoles
  | RolesLoaded
  | AdminDelete
  | AdminDeleted
  | AdminSaved;
