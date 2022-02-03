import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardCodeModalComponent } from './hard-code-modal.component';

describe('HardCodeModalComponent', () => {
  let component: HardCodeModalComponent;
  let fixture: ComponentFixture<HardCodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardCodeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
