import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AdminsReducer, RoleReducer } from '../Admin/admin.reducers';
import { AdminEffects } from './admin.effects';
import { EffectsModule } from '@ngrx/effects';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminsService } from '../services/admin.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { UpdateAppPasswordsComponent } from './update-app-passwords/update-app-passwords.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { EditCellRendererComponent } from './edit-cell-renderer/edit-cell-renderer.component';
import { EditCellDialogComponent } from './edit-cell-dialog/edit-cell-dialog.component';
import { HardCodeComponent } from './hard-code/hard-code.component';
import { HardCodeCellRendererComponent } from './hard-code-cell-renderer/hard-code-cell-renderer.component';
import { HardCodeModalComponent } from './hard-code-modal/hard-code-modal.component';
export const adminRoutes: Routes = [{
    path: '',
    component: AdminComponent,
    children:[
      {
        path:'',
        component: AdminListComponent
      },
      {
        path:'admin-list',
        component: AdminListComponent
      },

      {
        path: 'add-admin',
        component: AddAdminComponent
      },
      {
        path: 'add-admin/:id',
        component: AddAdminComponent
      },
      {
        path: 'update-pass',
        component: UpdateAppPasswordsComponent
      },
      {
        path: 'feature-list',
        component: FeatureListComponent
      },
      {
        path: 'hard-code',
        component: HardCodeComponent
      },
    ]
    }
]

@NgModule({
  declarations: [
    AdminComponent,
    AdminListComponent,
    AddAdminComponent,
    EditDialogComponent,
    UpdateAppPasswordsComponent,
    FeatureListComponent,
    EditCellRendererComponent,
    EditCellDialogComponent,
    HardCodeComponent,
    HardCodeCellRendererComponent,
    HardCodeModalComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    HttpClientModule,
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(adminRoutes),
    StoreModule.forFeature('Admins', AdminsReducer),
    StoreModule.forFeature('RoleState', RoleReducer),
    EffectsModule.forFeature([AdminEffects]),


  ]
  ,providers:[AdminsService]
})
export class AdminModule { }
