import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { AdminActions, AdminActionTypes } from './admin.actions';
import { AdminModel } from './model/admin.model';



export interface AdminsState extends EntityState<AdminModel> {

  allAdminsLoaded:boolean;

}


export const adapter : EntityAdapter<AdminModel> =
  createEntityAdapter<AdminModel>({
    selectId: admin => admin.id
  });


export const initialAdminsState: AdminsState = adapter.getInitialState({
  allAdminsLoaded: false
});


export function AdminsReducer(state = initialAdminsState , action: AdminActions): AdminsState {

  switch(action.type) {

    case AdminActionTypes.AdminLoaded:

      return adapter.addOne(action.payload.Admin, state);
    case AdminActionTypes.AddAdmin:

      return adapter.addOne(action.payload.Admin, state);

    case AdminActionTypes.AllAdminsLoaded:

      return adapter.addMany(action.payload.Admins, {...state, allAdminsLoaded:true});

    case AdminActionTypes.AdminSaved:

      return adapter.updateOne(action.payload.Admin,state);
      case AdminActionTypes.AdminDeleted:

        return adapter.removeOne(action.payload,state);  

    default: {

      return state;
    }

  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();


export interface RoleState extends EntityState<any> {
  roles:any;
}



export const adapterRole : EntityAdapter<any> =
  createEntityAdapter<any>();


const initialLessonsState = adapterRole.getInitialState({
  roles: []
});



export function RoleReducer(state = initialLessonsState,
                               action: AdminActions): RoleState {

  switch(action.type) {

    case AdminActionTypes.RolesLoaded:

      return {
        ...state,
        roles:action.payload
      };

   

    default:

      return state;

  }

}







