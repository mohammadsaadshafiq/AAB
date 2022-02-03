import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCellDialogComponent } from './edit-cell-dialog.component';

describe('EditCellDialogComponent', () => {
  let component: EditCellDialogComponent;
  let fixture: ComponentFixture<EditCellDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCellDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
