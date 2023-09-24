import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveTableComponent } from './add-remove-table.component';

describe('AddRemoveTableComponent', () => {
  let component: AddRemoveTableComponent;
  let fixture: ComponentFixture<AddRemoveTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRemoveTableComponent]
    });
    fixture = TestBed.createComponent(AddRemoveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
