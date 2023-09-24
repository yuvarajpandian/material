import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicTableComponent } from './component/table/basic-table/basic-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { RowTemplateTableComponent } from './component/table/row-template-table/row-template-table.component';
import { TableWithPaginatorComponent } from './component/table/table-with-paginator/table-with-paginator.component';
import {MatSortModule} from '@angular/material/sort';
import { AddRemoveTableComponent } from './component/table/add-remove-table/add-remove-table.component';
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    RowTemplateTableComponent,
    TableWithPaginatorComponent,
    AddRemoveTableComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,

    MatPaginatorModule,
    MatSortModule,

    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
