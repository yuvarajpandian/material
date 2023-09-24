import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTemplateTableComponent } from './row-template-table.component';

describe('RowTemplateTableComponent', () => {
  let component: RowTemplateTableComponent;
  let fixture: ComponentFixture<RowTemplateTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowTemplateTableComponent]
    });
    fixture = TestBed.createComponent(RowTemplateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
