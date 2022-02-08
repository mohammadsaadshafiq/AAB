import { Component, OnInit } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { AdminsService } from "../../services/admin.service";
import { EditCellRendererComponent } from "../edit-cell-renderer/edit-cell-renderer.component";
@Component({
  selector: "app-feature-list",
  templateUrl: "./feature-list.component.html",
  styleUrls: ["./feature-list.component.css"]
})
export class FeatureListComponent {
  constructor(public _AdminService:AdminsService){
    this.frameworkComponents = {
      editcell : EditCellRendererComponent
    };
  }
  private gridApi;
  private gridColumnApi;
  rowData: any;
  data;
  public defaultColDef;
  frameworkComponents: any;
  private rowClassRules;
  columnDefs = [
        { headerName: 'ID',field: '_id', resizable: true, hide: 'true'},
        { field: 'Name', resizable: true, filter: true , width: 400},
        { field: 'Status', resizable: true, filter: true },
        { field: 'Message', resizable: true, filter: true },
        {  headerName: 'Show to Guest',field: 'ShowtoGuest', resizable: true, filter: true },
        { field: 'Actions', cellRenderer: 'editcell', width: 120},
    ];
    ngOnInit() {
      this.gridCall();
    }
    gridCall(){
      this._AdminService.getFeatureList().subscribe(x => {
        this.data = x ;
        this.rowData = this.data.data;
      });
    }
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.gridApi.setDomLayout('autoHeight')
    }
    sleep(miliseconds) {
      var currentTime = new Date().getTime();
   
      while (currentTime + miliseconds >= new Date().getTime()) {
      }
   }
}
