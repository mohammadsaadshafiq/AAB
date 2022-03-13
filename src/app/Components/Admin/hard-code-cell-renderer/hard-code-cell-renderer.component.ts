import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminsService } from '../../services/admin.service';
import { HardCodeModalComponent } from '../hard-code-modal/hard-code-modal.component';

@Component({
  selector: 'app-hard-code-cell-renderer',
  templateUrl: './hard-code-cell-renderer.component.html',
  styleUrls: ['./hard-code-cell-renderer.component.css']
})
export class HardCodeCellRendererComponent  implements ICellRendererAngularComp {

  value;
  role;
  data1;
  constructor(public dialog: MatDialog, public router: Router , public _service: AdminsService) {
  }
  public params: any;

  agInit (params: any): void {
    this.params = params;
  }
  ngOnInit(): void {
    this.role=this._service.roleReturn();
  }
    openDialog(): void {
      const dialogRef = this.dialog.open(HardCodeModalComponent, {
        width: '30%',
        height: '54%',
        data: {data:this.params.data,role:this.role}
      });
      this.router.events.subscribe(() => {
        dialogRef.close();
      });
    }
    refresh(): boolean {
      return false;
    }
}
