import { Component, OnInit } from '@angular/core';
import { AdminsService } from "../../services/admin.service";
import { HardCodeCellRendererComponent } from '../hard-code-cell-renderer/hard-code-cell-renderer.component';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent, ITextFilterParams } from 'ag-grid-community';
@Component({
  selector: 'app-hard-code',
  templateUrl: './hard-code.component.html',
  styleUrls: ['./hard-code.component.css']
})
export class HardCodeComponent implements OnInit {
  constructor(public _AdminService:AdminsService, public router :Router){
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
  domLayout;
  columnDefs = [
        { headerName: 'ID',field: '_id', hide: 'true'},
        { field: 'Key',filter: 'agTextColumnFilter',filterParams: athleteFilterParams,valueFormatter: this.capatalize, width: 800 },
        { field: 'Value', resizable: true ,width: 150 },
        { field: 'Actions', cellRenderer: 'editcell',width: 150},
    ];
    ngOnInit() {
      if(!localStorage.getItem('_context')){
        return this.router.navigate(['/login'])
      }
      this.gridCall();
    }
 
    gridCall(){
      this._AdminService.getHardCode().subscribe(x => {
        this.data = x ;
        this.rowData = this.data.data;
      });
    }
    sizeToFit() {
      this.gridApi.sizeColumnsToFit();
    }
    
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      params.api.sizeColumnsToFit();
      params.api.resetRowHeights();
      this.gridApi.setDomLayout('autoHeight')
    }
    capatalize(params){
      let a = params.value.replace(/\_/g, " ") 
       a= a.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      return a 
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
