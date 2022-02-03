import { Component, Input, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="preloader" *ngIf="isSpinnerVisible">
                <div class="spinner">
                  <div class="double-bounce1"></div>
                  <div class="double-bounce2"></div>
                  <p class="please-wait">Please wait ...</p>
                </div>
             </div>`,
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;

  @Input()
  public backgroundColor = 'rgba(0, 115, 170, 0.69)';
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(
    private router: Router,
    private loaderService: LoaderService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          
            this.isSpinnerVisible = false;
       
          
        }
      },
      () => {
       
          this.isSpinnerVisible = false;
     
        
      }
    );

    this.isLoading.subscribe(loading=>{
      this.isSpinnerVisible = loading;  
    })
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
