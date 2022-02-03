import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/Components/Admin/edit-dialog/edit-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
constructor(public router:Router, public dialog:MatDialog){}
  exit(){
    localStorage.removeItem("_context");
    return this.router.navigate(['/login'])
  }
  openDialog(): void {
      const dialogRef = this.dialog.open(EditDialogComponent, {
        width: '40%',
        height: '45%',
        //data: this.params.data
      });
    }
}
