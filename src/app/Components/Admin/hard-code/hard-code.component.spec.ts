import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardCodeComponent } from './hard-code.component';

describe('HardCodeComponent', () => {
  let component: HardCodeComponent;
  let fixture: ComponentFixture<HardCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
