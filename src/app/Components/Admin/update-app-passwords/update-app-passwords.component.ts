import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminsService } from "../../services/admin.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-update-app-passwords",
  templateUrl: "./update-app-passwords.component.html",
  styleUrls: ["./update-app-passwords.component.css"]
})
export class UpdateAppPasswordsComponent implements OnInit {
  form: FormGroup;
  role = [];
  data = null;
  dataFlag = null;
  idp: Boolean = true;
  flag: Boolean = false;
  test: Boolean = false;
  passType: string = "password";
  passTypeBool: boolean=false
  roles;
  data1: any;
  constructor(
    public _adminsService: AdminsService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  ngOnInit() {
    if(!localStorage.getItem('_context')){
      return this.router.navigate(['/login'])
    }
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      portal: ["", Validators.required]
    });
    this.savePassCodes();
    this.rolesAPI();
    this.sleep(180)
  }
  onDropdown(event) {
    let codes = this.data.data[0];
    let val = event.value;
    if (val == "c4cpass") {
      this.idp = true;
      this.form.patchValue({
        username: codes.c4cuser,
        password: codes.c4cpass
      });
    } else if (val == "eccpass") {
      this.idp = true;
      this.form.patchValue({
        username: codes.eccuser,
        password: codes.eccpass
      });
    } else if (val == "idppass") {
      this.idp = false;
      this.form.patchValue({
        username: codes.idpuser,
        password: codes.idppass
      });
    } else {
      this.form.patchValue({
        username: "",
        password: ""
      });
    }
  }
  savePassCodes() {
    this._adminsService.getAllPasswords().subscribe(x => {
      this.data = x;
    });
  }
  testAPI() {
    let portal = this.form.get("portal").value;
    let obj = {
      key: this.form.get("portal").value,
      username: this.form.get("username").value,
      password: this.form.get("password").value
    };
    this._adminsService.testConnection(obj).subscribe(x => {
      this.dataFlag = x;
      if (this.dataFlag.message == "Failed") {
        alert("API is not working");
        this.test = false;
      } else {
        alert("Test API is working");
        this.test = true;
      }
    });
  }
  addAdmin(value) {
    if (
      this.form.get("username").valid &&
      this.form.get("portal").valid &&
      this.form.get("password").valid
    ) {
      let obj = {
        key: value.portal,
        username: value.username,
        password: value.password
      };
      if (!localStorage.getItem("_context")) {
        return this.router.navigate(["/login"]);
      } else {
        if (value.portal != "idppass") {
          this.testAPI();
        }
        setTimeout( () => { this.ifBlock(value,obj) }, 2000 );
      }
    }
  }
  ifBlock(value,obj){
    if (this.test == true || value.portal == "idppass") {
      this._adminsService.updatePasswordPortal(obj).subscribe(x => {
        alert("Password Updated");
        this.router.navigate(["/admin-list"]).then(() => {
          this.router.navigate(["/admin-list/update-pass"]);
        });
      });
    }
  }
  rolesAPI(){
    this._adminsService.getRolesAPI().subscribe(x=>{
      this.data1 =x;
      setTimeout( () => { this.ifBlocks() }, 200 );
    })
  }
  ifBlocks(){
    let role = this.data1.data[0].role;
    if(role == 'ROLE_SUPERADMIN'){
      this.roles = true
    }
    else{
      this.roles= false
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
  sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }
 
  
}
