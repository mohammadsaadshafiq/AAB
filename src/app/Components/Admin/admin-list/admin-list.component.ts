import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AdminDelete, AllAdminsLoaded, AllAdminsRequested } from '../admin.actions';
import { allAdminsLoaded, selectAllAdmins } from '../admin.selectors';
import { AppState } from '../AppState';
import { MatTable } from "@angular/material/table";
import { AdminsService } from '../../services/admin.service';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  data
  ELEMENT_DATA = [
  ];
  displayedColumns: string[] = ['username','email', 'role','action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  allAdmins$;
  role: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private router:Router, private adminService: AdminsService,
    private store: Store<AppState>) {
      this.allAdmins$ = this.store.pipe(select(selectAllAdmins))
     }
     @ViewChild(MatTable) matTable: MatTable<any>;
     delete(): void {
       this.matTable.dataSource = this.ELEMENT_DATA;
       this.matTable.renderRows();
     }
     redirectTo(){
      location.reload()
    }

  ngOnInit() {
    if(!localStorage.getItem('_context')){
      return this.router.navigate(['/login'])
    }
    this.rolesAPI();
    this.adminService.roleLogic();
    this.sleep(200)
    this.store.dispatch(new AllAdminsRequested());
    this.allAdmins$.subscribe(data=>{
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    })
  }
  openAddUser(){
    this.router.navigate(['/admin-list/add-admin'])
  }
  edit(id,username,email,role,){
    let obj ={
      id,
      email,
      username,
      role
    }
    localStorage.setItem("update",JSON.stringify(obj));
    this.router.navigate(['/admin-list/add-admin/'+id]);
  }
    rolesAPI(){
      this.adminService.getRolesAPI().subscribe(x=>{
        this.data =x;
        setTimeout( () => { this.ifBlock() }, 200 );
      })
    }
    ifBlock(){
      let role = this.data.data[0].role;
      if(role == 'ROLE_SUPERADMIN'){
        this.role = true
      }
      else{
        this.role= false
      }
    }
  
  deleteuser(username:string){
    if(confirm('Are you sure?')){
      this.adminService.deleteAdmin(username).subscribe(x => {
        this.router.navigate(['/admin-list/feature-list/']).then(() => {
          this.router.navigate(['/admin-list/'])
      }).then(()=>this.redirectTo())
      });
    }
  }
  sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }
}
