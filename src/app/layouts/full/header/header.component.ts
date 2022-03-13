import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/Components/Admin/edit-dialog/edit-dialog.component';
import { AdminsService } from 'src/app/Components/services/admin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
constructor(public router:Router, public dialog:MatDialog,public  _service:AdminsService){
 
}
roles;
  exit(){
    localStorage.removeItem("_context");
    return this.router.navigate(['/login'])
  }
  ngOnInit(){
    this._service.roleLogic();
  }
  open(){
    this.roles =this._service.roleReturn()
  }
  openDialog(): void {
      const dialogRef = this.dialog.open(EditDialogComponent, {
        width: '40%',
        height: '45%',
        data: {}
      });
      this.router.events.subscribe(() => {
        dialogRef.close();
      });
    }
    sleep(miliseconds) {
      var currentTime = new Date().getTime();
   
      while (currentTime + miliseconds >= new Date().getTime()) {
      }
   }
}
