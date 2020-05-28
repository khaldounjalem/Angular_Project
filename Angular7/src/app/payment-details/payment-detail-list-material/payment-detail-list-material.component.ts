import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog/dialog';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { environment } from 'src/environments/environment';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-payment-detail-list-material',
  templateUrl: './payment-detail-list-material.component.html',
  styleUrls: ['./payment-detail-list-material.component.css']
})
export class PaymentDetailListMaterialComponent implements OnInit, AfterViewInit {
  
  public displayedColumns: string[] = ['cardOwnerName', 'cardNumber', 'expirationDate'];
  

  
  public dataSource =  new MatTableDataSource(this.service.list );
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public service: PaymentDetailService) { }


  ngOnInit(): void {
 
    this.service.refreshList();
    
  }
 
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
 


















//   -------------------------

//  list: MatTableDataSource<any>;

 
//   searchKey: string;


//   constructor(public service: PaymentDetailService) { }
//   displayedColumns: string[] = ['cardOwnerName', 'cardNumber', 'expirationDate'];


//   ngOnInit(): void {

//       this.service.refreshList();
//       this.list = new MatTableDataSource();

//   }

    
}
