import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { expandableRowAnimation } from './expandable-row.animation';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  date:string;
  expanded?:any;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

 

/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-sorting-example',
  styleUrls: ['table-sorting-example.scss'],
  templateUrl: 'table-sorting-example.html',
  animations: [expandableRowAnimation],
})
export class TableSortingExample implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', date:"2020-02-03T05:15:57.729Z" },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' ,date:"2020-02-02T05:15:57.729Z"},
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',date:"2020-02-02T05:15:57.729Z" },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', date:"2020-02-04T05:15:57.729Z" },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', date:"2020-02-02T05:15:57.729Z" },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', date:"2020-02-08T05:15:57.729Z" },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , date:"2020-02-02T05:15:57.729Z"},
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , date:"2020-02-02T05:15:57.729Z"},
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', date:"2020-02-02T05:15:57.729Z" },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', date:"2020-02-02T05:15:57.729Z" },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' , date:"2020-09-02T05:15:57.729Z"},
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' , date:"2020-02-02T05:15:57.729Z"},
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' , date:"2020-02-02T05:15:57.729Z"},
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', date:"2020-03-02T05:15:57.729Z" },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', date:"2020-01-02T05:15:57.729Z" },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', date:"2020-02-02T05:15:57.729Z" },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' , date:"2020-02-02T05:15:57.729Z"},
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' , date:"2019-02-02T05:15:57.729Z"},
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' , date:"2020-02-02T05:15:57.729Z"},
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' , date:"2020-02-02T05:15:57.729Z"},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','date','action'];
dataSource:any;
  

  expandedSymbol: string = '';

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  this.ELEMENT_DATA.forEach((data) => (data.expanded = false));
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    this.dataSource.sort = this.sort;
  }

   toggleErrorLabel(row): void {
    row.expanded = !row.expanded;
   }


  toggleExpandableSymbol(row): void {
     row.expanded = !row.expanded;
    this.expandedSymbol = this.expandedSymbol === row.symbol
      ? ''
      : row.symbol;
  }
}


