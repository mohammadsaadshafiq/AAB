import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardCodeCellRendererComponent } from './hard-code-cell-renderer.component';

describe('HardCodeCellRendererComponent', () => {
  let component: HardCodeCellRendererComponent;
  let fixture: ComponentFixture<HardCodeCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardCodeCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardCodeCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
