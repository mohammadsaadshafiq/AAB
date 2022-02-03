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
  constructor(public router: Router,
    private formBuilder: FormBuilder, public _adminsService : AdminsService,
    public dialogRef: MatDialogRef<EditDialogComponent>) { }

 ngOnInit(): void {
  this.form = this.formBuilder.group({
    password:['',Validators.required],
  });
 }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(value){
    if(!localStorage.getItem('_context')){
      return this.router.navigate(['/login'])
    }
    else{
      let a =localStorage.getItem('currentId')
      if (this.form.get('password').valid){
        let obj ={
          id:a,
          password:value.password,
        }
        this.dialogRef.close();
        this._adminsService.updatePassword(obj).subscribe(x => {
          alert('Password Updated');
          this.router.navigate(['/login'])
        });
      }
    }
  }
}