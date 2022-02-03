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
    this.rolesAPI();
  }
  public params: any;

  agInit (params: any): void {
    this.params = params;
  }
  ngOnInit(): void {
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
    openDialog(): void {
      const dialogRef = this.dialog.open(HardCodeModalComponent, {
        width: '30%',
        height: '54%',
        data: {data:this.params.data,role:this.role}
      });
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
