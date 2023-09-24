import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithPaginatorComponent } from './table-with-paginator.component';

describe('TableWithPaginatorComponent', () => {
  let component: TableWithPaginatorComponent;
  let fixture: ComponentFixture<TableWithPaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableWithPaginatorComponent]
    });
    fixture = TestBed.createComponent(TableWithPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
