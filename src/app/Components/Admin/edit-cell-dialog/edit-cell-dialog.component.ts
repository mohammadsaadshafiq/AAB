import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { validate } from 'json-schema';
import { Router } from '@angular/router';
import { AdminsService } from '../../services/admin.service';
@Component({
  selector: 'app-edit-cell-dialog',
  templateUrl: './edit-cell-dialog.component.html',
  styleUrls: ['./edit-cell-dialog.component.css']
})
export class EditCellDialogComponent  {
  form: FormGroup;
  notValid: boolean;
  data1;
  role;
  constructor(public router: Router,
              private formBuilder: FormBuilder, public _service : AdminsService,
              public dialogRef: MatDialogRef<EditCellDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.role=this.data.role;
    this.form = this.formBuilder.group({
      id:[this.data.data._id,Validators.required],
      Name:[{value:this.data.data.Name,disabled:true}],
      Status:[this.data.data.Status,Validators.required],
      Message:[this.data.data.Message,Validators.required],
      ShowtoGuest:[this.data.data.ShowtoGuest]
    });
   }
   onSubmit(value){
    if(!localStorage.getItem('_context')){
      return this.router.navigate(['/login'])
    }
    else{
      if (this.form.valid){
        this.dialogRef.close();
        this._service.updateFeatureList(value).subscribe(x => {
          alert('Updated');
          this.router.navigate(["/admin-list"]).then(() => {
            this.router.navigate(["/admin-list/feature-list"]);
          });
        });
      }
    }
  }
}
