import { Component, OnInit } from '@angular/core';
import { ColDef } from "ag-grid-community";
import { AdminsService } from "../../services/admin.service";
import { HardCodeCellRendererComponent } from '../hard-code-cell-renderer/hard-code-cell-renderer.component';

@Component({
  selector: 'app-hard-code',
  templateUrl: './hard-code.component.html',
  styleUrls: ['./hard-code.component.css']
})
export class HardCodeComponent implements OnInit {
  constructor(public _AdminService:AdminsService){
    this.frameworkComponents = {
      editcell : HardCodeCellRendererComponent
    };
  }
  private gridApi;
  private gridOptions;
  private gridColumnApi;
  rowData: any;
  data;
  hide;
  public defaultColDef;
  frameworkComponents: any;
  private rowClassRules;
  columnDefs = [
        { headerName: 'ID',field: '_id', hide: 'true'},
        { field: 'Key',width: 800, filter: true,valueFormatter: this.capatalize },
        { field: 'Value', resizable: true, filter: true },
        { field: 'Actions', cellRenderer: 'editcell',width: 120},
    ];
    ngOnInit() {
      this.gridCall();
    }
    gridCall(){
      this._AdminService.getHardCode().subscribe(x => {
        this.data = x ;
        this.rowData = this.data.data;
      });
    }
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
    capatalize(params){
      let a = params.value.replace(/\_/g, " ") 
       a= a.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      return a 
    }
}
