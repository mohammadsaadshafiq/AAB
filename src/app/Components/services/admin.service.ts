import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AdminModel } from "../Admin/model/admin.model";
import { ApiDataService } from "src/app/Services/api-data.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
@Injectable()
export class AdminsService {
  private _url = environment.APIUrl;
  role: boolean =null;

  constructor(
    public router: Router,
    private http: ApiDataService,
    private https: HttpClient
  ) {}
  data;
  public headers = new HttpHeaders({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Authorization: "Bearer " + localStorage.getItem("_context"),
    "Content-Type": "application/json"
  });
  findAdminById(AdminId: number): Observable<AdminModel> {
    return this.http.httpGet<AdminModel>("", "", AdminId);
  }
  deleteAdmin(id: string) {
    return this.http.httpDelete("portalauth", "deleteuser", { id: id });
  }
  LoadRoleList() {    
    return this.http.httpGet("portalauth", "getroles");
  }

  findAllAdmins(): Observable<AdminModel[]> {
    return this.http.httpGet("portalauth", "getusers");
  }
  saveAdmin(adminModel: Partial<AdminModel>) {
    return this.http.httpPost("portalauth", "createuser", adminModel).pipe(
      catchError(err => {
        alert("User Not Added"); // add toast
        return throwError(err);
      })
    );
  }
  editUser(value) {
    let options = { headers: this.headers };
    return this.https
      .post(this._url + "portalauth/updateuser", value, options)
      .pipe(
        catchError(err => {
          alert("User Not Edited"); // add toast
          return throwError(err);
        })
      );
  }
  updatePassword(value) {
    let options = { headers: this.headers };
    return this.https
      .post(this._url + "portalauth/changepassword", value, options)
      .pipe(
        catchError(err => {
          alert("Error occured while updating password !");
          return throwError(err);
        })
      );
  }
  updatePasswordPortal(value) {
    let options = { headers: this.headers };
    return this.https
      .post(this._url + "portalauth/updatesappass", value, options)
      .pipe(
        catchError(err => {
          alert("Error occured while updating password !");
          return throwError(err);
        })
      );
  }
  getAllPasswords() {
    let options = { headers: this.headers };
    return this.https
      .get(this._url + "portalauth/getsapcredentials", options)
      .pipe(
        catchError(err => {
          alert("Unable to fetch username and password");
          return throwError(err);
        })
      );
  }
  testConnection(obj) {
    let options = { headers: this.headers };
    return this.https
      .post(this._url + "portalauth/testconnection", obj, options)
      .pipe(
        catchError(err => {
          alert(
            "Update Password Test Failed : API currenlty not working " +
              err.messege
          );
          return throwError(err);
        })
      );
  }
  getFeatureList() {
    let options = { headers: this.headers };
    return this.https
      .get(this._url + "portalauth/getfeaturelist", options)
      .pipe(
        catchError(err => {
          alert("Error while fetching Data");
          return throwError(err);
        })
      );
    }
    updateFeatureList(value) {
      let options = { headers: this.headers };
      return this.https
        .post(this._url + "portalauth/updatefeaturelist", value, options)
        .pipe(
          catchError(err => {
            alert("Error occured while updating !");
            return throwError(err);
          })
        );
    }
    getHardCode() {
      let options = { headers: this.headers };
      return this.https
        .get(this._url + "portalauth/gethardcodevalues", options)
        .pipe(
          catchError(err => {
            alert("Error while fetching Data");
            return throwError(err);
          })
        );
      }
      updateHardCode(value) {
        let options = { headers: this.headers };
        return this.https
          .post(this._url + "portalauth/updatehardcodevalues", value, options)
          .pipe(
            catchError(err => {
              alert("Error occured while updating !");
              return throwError(err);
            })
          );
      }
      getRolesAPI(){
        let options = { headers: this.headers };
        let obj ={
          id: localStorage.getItem("currentId")
        }
        return this.https
          .post(this._url + "/portalauth/getrolepermissions",obj, options)
          .pipe(
            catchError(err => {
              return throwError(err);
            })
          );
      }
      roleLogic(){
        this.getRolesAPI().subscribe(x=>{
          this.data = x ;
          let role = this.data.data[0].role;
          if(role == 'ROLE_SUPERADMIN'){
            this.role=null;
            this.role = true
          }
          else{
            this.role=null;
            this.role= false
          }
        })
      }
      roleReturn(){
        return this.role;
      }
}
