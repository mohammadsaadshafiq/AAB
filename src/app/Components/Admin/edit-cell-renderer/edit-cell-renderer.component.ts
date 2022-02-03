import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminsService } from '../../services/admin.service';
import { EditCellDialogComponent } from '../edit-cell-dialog/edit-cell-dialog.component';


@Component({
  selector: 'app-edit-cell-renderer',
  templateUrl: './edit-cell-renderer.component.html',
  styleUrls: ['./edit-cell-renderer.component.css']
})
export class EditCellRendererComponent implements ICellRendererAngularComp {

  value;
  role;
  data1: any;
  constructor(public dialog: MatDialog, public router: Router , public _service: AdminsService) { }
  public params: any;

  agInit (params: any): void {
    this.params = params;
  }
    openDialog(): void {
      const dialogRef = this.dialog.open(EditCellDialogComponent, {
        width: '50%',
        height: '70%',
        data: {data:this.params.data,role:this.role}
      });
    }
    ngOnInit(): void {
      this.rolesAPI();
    }
    rolesAPI(){
      this._service.getRolesAPI().subscribe(x=>{
        this.data1 =x;
        setTimeout( () => { this.ifBlock() }, 500 );
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
    refresh(): boolean {
      return false;
    }
    sleep(miliseconds) {
      var currentTime = new Date().getTime();
   
      while (currentTime + miliseconds >= new Date().getTime()) {
      }
   }
}
