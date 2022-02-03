import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { validate } from 'json-schema';
import { Router } from '@angular/router';
import { AdminsService } from '../../services/admin.service';

@Component({
  selector: 'app-hard-code-modal',
  templateUrl: './hard-code-modal.component.html',
  styleUrls: ['./hard-code-modal.component.css']
})
export class HardCodeModalComponent implements OnInit  {
  form: FormGroup;
  notValid: boolean;
  role;
  data1;
  constructor(public router: Router,
              private formBuilder: FormBuilder, public _service : AdminsService,
              public dialogRef: MatDialogRef<HardCodeModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.role =this.data.role;
    this.data.Key =this.capatalize(this.data.data.Key)
    this.form = this.formBuilder.group({
      id:[this.data.data._id,Validators.required],
      Key:[{value:this.data.data.Key,disabled:true}],
      Value:[this.data.data.Value,Validators.required],
    });
   }
   capatalize(str){
    let a = str.replace(/\_/g, " ") 
     a= a.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    return a 
  }
   onSubmit(value){
    if(!localStorage.getItem('_context')){
      return this.router.navigate(['/login'])
    }
    else{
      if (this.form.valid){
        this.dialogRef.close();
        this._service.updateHardCode(value).subscribe(x => {
          alert('Updated');
          this.router.navigate(["/admin-list"]).then(() => {
            this.router.navigate(["/admin-list/hard-code"]);
          });
        });
      }
    }
  }
}
