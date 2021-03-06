import { Component, OnInit } from "@angular/core";
import { ColDef, GridReadyEvent, ITextFilterParams } from 'ag-grid-community';
import { AdminsService } from "../../services/admin.service";
import { EditCellRendererComponent } from "../edit-cell-renderer/edit-cell-renderer.component";
import { Router } from "@angular/router";
@Component({
  selector: "app-feature-list",
  templateUrl: "./feature-list.component.html",
  styleUrls: ["./feature-list.component.css"]
})
export class FeatureListComponent {
  constructor(public _AdminService:AdminsService, public router:Router){
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
        { headerName: 'Message_AR',field: 'Message_AR', resizable: true, hide: 'true'},
        { field: 'Name',filter: 'agTextColumnFilter',filterParams: athleteFilterParams, resizable: true, width: 400},
        { field: 'Status', resizable: true  },
        { field: 'Message', resizable: true },
        {  headerName: 'Show to Guest',field: 'ShowtoGuest', resizable: true},
        {  headerName: 'Show to Passport User',field: 'ShowtoPassportUser', resizable: true},
        { field: 'Actions', cellRenderer: 'editcell', width: 120},
    ];
    ngOnInit() {
      if(!localStorage.getItem('_context')){
        return this.router.navigate(['/login'])
      }
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
      params.api.sizeColumnsToFit();
      params.api.resetRowHeights();
      this.gridApi.setDomLayout('autoHeight')
    }
    sleep(miliseconds) {
      var currentTime = new Date().getTime();
   
      while (currentTime + miliseconds >= new Date().getTime()) {
      }
   }
}
var athleteFilterParams: ITextFilterParams = {
  filterOptions: ['contains', 'notContains'],
  textFormatter: function (r) {
    if (r == null) return null;
    return r
      .toLowerCase()
      .replace(/[????????????]/g, 'a')
      .replace(/??/g, 'ae')
      .replace(/??/g, 'c')
      .replace(/[????????]/g, 'e')
      .replace(/[????????]/g, 'i')
      .replace(/??/g, 'n')
      .replace(/[??????????]/g, 'o')
      .replace(/??/g, 'oe')
      .replace(/[????????]/g, 'u')
      .replace(/[????]/g, 'y');
  },
  debounceMs: 200,
  suppressAndOrCondition: true,
} as ITextFilterParams;

