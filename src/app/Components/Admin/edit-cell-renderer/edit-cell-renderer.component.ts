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
    this.role=this._service.roleReturn();
    }
    refresh(): boolean {
      return false;
    }
}
