import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppPasswordsComponent } from './update-app-passwords.component';

describe('UpdateAppPasswordsComponent', () => {
  let component: UpdateAppPasswordsComponent;
  let fixture: ComponentFixture<UpdateAppPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppPasswordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
