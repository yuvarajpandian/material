import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort} from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-add-remove-table',
  templateUrl: './add-remove-table.component.html',
  styleUrls: ['./add-remove-table.component.scss']
})
export class AddRemoveTableComponent {
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource(
    ELEMENT_DATA
  );

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(event: Sort): void {
    const active = event.active;
    const direction = event.direction;

    if (!active || direction === '') {
      // Reset the sorting to the default order
      this.dataSource.data = ELEMENT_DATA.slice();
      return;
    }

    // Implement your custom sorting logic here based on the active column
    this.dataSource.data.sort((a, b) => {
      if (active === 'position') {
        return a.position - b.position;
      } else if (active === 'name') {
        return a.name.localeCompare(b.name);
      } else if (active === 'weight') {
        return a.weight - b.weight;
      } else if (active === 'symbol') {
        return a.symbol.localeCompare(b.symbol);
      } else {
        return 0;
      }
    });

    // Reverse the order for descending sorting
    if (direction === 'desc') {
      this.dataSource.data.reverse();
    }
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    ELEMENT_DATA.push(ELEMENT_DATA[randomElementIndex]);
    this.dataSource.data = ELEMENT_DATA.slice(); // Update the table data
  }

  removeData() {
    ELEMENT_DATA.pop();
    this.dataSource.data = ELEMENT_DATA.slice(); // Update the table data
  }
}
