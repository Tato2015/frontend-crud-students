import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',actions:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',actions:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',actions:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',actions:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',actions:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',actions:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',actions:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',actions:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',actions:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',actions:''},
];

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})
export class StudentGridComponent implements AfterViewInit  {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
}
