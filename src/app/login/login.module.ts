import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './loginPage/login.component';
import { LoginReducer } from './loginStore/login.reducer';
import { AuthEffects } from './loginStore/login.effects';

export const loginRoutes: Routes = [{
    path: '',
    component: LoginComponent 
    }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(loginRoutes),
    StoreModule.forFeature('login', LoginReducer),
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class LoginModule { }
