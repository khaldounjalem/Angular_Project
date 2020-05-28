import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';



@Component({
  selector: 'app-payment-detail-list-print',
  templateUrl: './payment-detail-list-print.component.html',
  styles: []
})
export class PaymentDetailListPrintComponent implements OnInit {


  constructor(public service: PaymentDetailService) { }


  ngOnInit(): void {
    this.service.refreshList();

  }


}
