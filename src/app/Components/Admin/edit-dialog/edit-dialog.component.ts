import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminsService } from '../../services/admin.service';



@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  role: boolean;
  passType: string = "password";
  passTypeBool: boolean=false
  passType2: string = "password";
  passTypeBool2: boolean=false;
  roles;
  data1;
  constructor(public router: Router,
    private formBuilder: FormBuilder, public _adminsService : AdminsService,
    public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

 ngOnInit() {
  if(!localStorage.getItem('_context')){
    return this.router.navigate(['/login'])
  }
  this.form = this.formBuilder.group({
    password:['',Validators.required],
    Updatepassword:['',Validators.required]
  });
 }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(value){
    if(!localStorage.getItem('_context')){
      return this.router.navigate(['/login'])
    }
    if(value.password != value.Updatepassword){
       alert("Password doesn't match")
    }
    else{
      let a =localStorage.getItem('currentId')
      if (this.form.get('password').valid && this.form.get('Updatepassword')){
        let obj ={
          id:a,
          password:value.password,
          role:"ROLE_SUPERADMIN"
        }
        this.dialogRef.close();
        this._adminsService.editUser(obj).subscribe(x => {
          alert('Password Updated');
          this.router.navigate(['/login'])
        });
      }
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
  showbtn(){
    if (this.passType2 == "password") {
      this.passTypeBool2=true
      this.passType2 = "text";
      
    } else {
      this.passTypeBool2=false
      this.passType2 = "password";
    }
  }
}