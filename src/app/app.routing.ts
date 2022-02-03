import { Routes } from '@angular/router';
import {UpdateAppPasswordsComponent} from '../app/Components/Admin/update-app-passwords/update-app-passwords.component'
import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  
  {
    path: 'login',
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },  
  {
    path: 'admin-list',
    component: FullComponent,
    children: [
         
      {
        path:'',
        loadChildren:()=>import('./Components/Admin/admin.module').then(m=>m.AdminModule)
      },
      {
        path: 'update-pass',
        component:UpdateAppPasswordsComponent,
      }
      // {
      //   path: '',
      //   loadChildren:
      //     () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      // },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      // }
    ]

  },
];
