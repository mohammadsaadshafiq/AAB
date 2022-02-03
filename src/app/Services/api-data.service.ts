import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ApiDataService {
  
  private _url = environment.APIUrl;

  constructor(private _http: HttpClient,private router: Router) {
  }

  httpPost<TResult, TRequest>(controllerName: string, actionName: string, t: any): Observable<TResult> {
    let url = this._url;
    url = url + controllerName + '/' + actionName;
    if (localStorage.getItem('_context') == null || localStorage.getItem('_context') === undefined) {
      return this._http.post<HttpResponse<Object>>(url, t, {observe: 'response'})
      .pipe(
        map(resp => {
            
          return resp.body as unknown as TResult
        
        }),
        catchError((error) =>{
          // this.router.navigate(['/login'])
          throw throwError(error);  
        })
      );
    } else {
      return this._http.post<HttpResponse<Object>>(url, t, {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Authorization': 'Bearer '+localStorage.getItem('_context')
          },
          observe: 'response'
        }
      )
      .pipe(
        map(resp => {
            
          return resp.body as unknown as TResult
        
        }),
        catchError((error) =>{
          // this.router.navigate(['/login'])
          throw throwError(error);  
        })
      );
    }
  }

   httpGet<TResult>(controllerName: string, actionName: string, requestobj?: any): Observable<TResult> {
    let url = this._url;
    url = url + controllerName + '/' + actionName;
     if (requestobj !== '' && (requestobj !== undefined && requestobj !== null) && localStorage.getItem('_context') !== '' && (localStorage.getItem('_context') !== undefined && localStorage.getItem('_context') !== null)) {
      return this._http.get<HttpResponse<Object>>(url
        , {
          params: requestobj,
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Authorization': 'Bearer '+localStorage.getItem('_context')
        }}
        ).pipe(
          map(resp => {
              
            return resp as unknown as TResult
          
          }),
          catchError((error) =>{
            // this.router.navigate(['/login'])
            throw throwError(error);  
          })
        );
    } else if (requestobj !== '' && (requestobj !== undefined && requestobj !== null)) {
      return this._http.get<HttpResponse<Object>>(url
        , {
          params: requestobj,
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Authorization': 'Bearer '+localStorage.getItem('_context')
          }}
        ).pipe(
          map(resp => {
              
            return resp as unknown as TResult
          
          })
          ,
          catchError((error) =>{
            // this.router.navigate(['/login'])
            throw throwError(error);  
          })
        );
    // tslint:disable-next-line: max-line-length
    } else if (localStorage.getItem('_context') !== '' && (localStorage.getItem('_context') !== undefined && localStorage.getItem('_context') !== null)) {
      return this._http.get<HttpResponse<Object>>(url
        , {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Authorization': 'Bearer '+localStorage.getItem('_context')
        }}
        ).pipe(
          map(resp => {
              
            return resp as unknown as TResult
          
          }),
          catchError((error) =>{
            // this.router.navigate(['/login'])
            throw throwError(error);  
          })
        );
    } else {
      return this._http.get<HttpResponse<Object>>(url).pipe(
        map(resp => {
            
          return resp as unknown as TResult
        
        }),
        catchError((error) =>{
          // this.router.navigate(['/login'])
          throw throwError(error);  
        })
      );
    }

  }
  httpDelete<TResult>
    (controllerName: string, actionName: string, t: any): Observable<TResult> {
      let url = this._url;
      url = url + controllerName + '/' + actionName;
          return this._http.delete<HttpResponse<Object>>(url, { body:t,
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Authorization': 'Bearer '+localStorage.getItem('_context')
            },
            observe: 'response'
          }
        )
        .pipe(
          map(resp => {
              
            return resp.body as unknown as TResult
          
          }),
          catchError((error) =>{
            // this.router.navigate(['/login'])
            throw throwError(error);  
          })
        );
      }
        
  
}
