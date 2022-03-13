import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AdminsService } from '../../services/admin.service';
import { AdminAdded, AdminLoaded, AdminSaved, LoadRoles } from '../../Admin/admin.actions';
import { selectAdminById, selectRolesState, selectTotal } from '../admin.selectors';
import { AppState } from '../AppState';
import { AdminModel } from '../model/admin.model';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  paramId = null;
  update = true;
  a;
  button = 'ADD USER'
  form: FormGroup;
  roleList: string[];
  role$;
  state;
  admin$;
  title='Add New Admin';
  role;
  data1;
  passType: string = "password";
  passTypeBool: boolean=false
  constructor(private router:Router,private _Activatedroute: ActivatedRoute,
    private adminService: AdminsService,
    private formBuilder: FormBuilder,
    private store: Store<AppState>) {
      const navigation = this.router.getCurrentNavigation();
        this.state = navigation.extras.state as {
          id
          username
          email
          role 
        };
      this.role$ = this.store.pipe(select(selectRolesState))
  }

  ngOnInit() {
    if(!localStorage.getItem('_context')){
      return this.router.navigate(['/login'])
    }
    this.rolesAPI();
    this.sleep(200)
    if(this.role == false){
      this.router.navigate(['/admin-list/feature-list'])
    }
    let a =JSON.parse(localStorage.getItem("update"))
    this.store.dispatch(new LoadRoles());
    this.role$.subscribe(data=>{
      if(data.roles.roles?.length){
        this.roleList = data.roles.roles;
      }
    })
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required],
      role: ['', Validators.required]
    });
    if(this._Activatedroute.snapshot.paramMap.get("id")){
      this.form.patchValue({
        username: a.username,
        email:  a.email,
      });
      this.form.controls['username'].disable();
      this.form.controls['email'].disable();
       this.button ='UPDATE USER'
       this.title ="UPDATE USER"
       this.update =false
       this.form.controls.email.clearValidators();
       this.form.controls.username.clearValidators();
    }
  }
  addAdmin() {
    if(this.form.invalid){
      return;
    }
    if(!localStorage.getItem('_context')){
      return this.router.navigate(['/login'])
    }
    else{
      if (this._Activatedroute.snapshot.paramMap.get("id")){
        let id = this._Activatedroute.snapshot.paramMap.get("id")
        let obj = {
          "id" :id,
          "password" :this.form.get('password').value,
          "role": this.form.get('role').value
        }
        this.adminService.editUser(obj).subscribe(x => {
          alert('User Edited');
          this.router.navigate(['/admin-list/']).then(() => {
            location.reload();
           })
        });
      }
      else{
        this.button ='ADD USER'
        this.update = true;
        this.title ="ADD USER"
        const values = this.form.value;
        const adminID = Math.random().toString(36).slice(2).toString();
        const admin: AdminModel = {
          email:values.email,
          password:values.password,
          username:values.username,
          role:values.role
        };
        this.adminService .saveAdmin(admin).subscribe(x => {
          alert('User Added');
          this.router.navigate(['/admin-list/']).then(() => {
            location.reload();
           })
        });
      }
    }
  }
  rolesAPI(){
    this.adminService.getRolesAPI().subscribe(x=>{
      this.data1 =x;
      setTimeout( () => { this.ifBlock() }, 200 );
    })
  }
  ifBlock(){
    let role = this.data1.data[0].role;
    if(role == 'ROLE_SUPERADMIN'){
      this.role = true
    }
    else{
      this.role= false
    }
  }
  sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
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
