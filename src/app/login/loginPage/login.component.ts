import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogIn } from '../loginStore/login.actions';
import { AppState, LoginError, loginError, Messages } from '../loginStore/login.state';
import { AdminsService } from 'src/app/Components/services/admin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage$: Observable<any>;
  errorMessageList: Messages[];
  passType: string = "password";
  passTypeBool: boolean=false
  constructor(private formBuilder: FormBuilder,public service:AdminsService,
    private router: Router,
    private store: Store<AppState>) {
        this.errorMessage$ = this.store.pipe(select(loginError));
    }
  loginForm: FormGroup = this.formBuilder.group({
    username:['',Validators.required],
    password: ['',Validators.required]
  });
  ngOnInit() {    
    this.errorMessage$.subscribe((state:LoginError) => {
      this.errorMessageList = state.errorMessage;
      });
  }
submit() {
  if (!this.loginForm.valid) {
    return;
  }
  this.store.dispatch(new LogIn(this.loginForm.value))
 // this.router.navigate(['/admin-list'])
}
show() {
  if (this.passType == "password") {
    this.passTypeBool=true
    this.passType = "text";
    
  } else {
    this.passTypeBool=false
    this.passType = "password";
  }
}

}
