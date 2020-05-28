import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail


  list : PaymentDetail[];
  dataSource : PaymentDetail[];
  cardownername : string;

  constructor(public http: HttpClient) { }



postPaymentDetail() {
  return this.http.post(environment.apiBaseURI + '/PaymentDetail', this.formData);
}

putPaymentDetail() {
  return this.http.put(environment.apiBaseURI + '/PaymentDetail/'+ this.formData.pmid, this.formData);
}
deletePaymentDetail(id) {
  return this.http.delete(environment.apiBaseURI + '/PaymentDetail/'+ id);
}

refreshList(){
  this.http.get(environment.apiBaseURI + '/PaymentDetail')
  .toPromise()
  .then(res => this.list = res as PaymentDetail[]);
}


Search(){
  if(this.cardownername != ""){
    this.list = this.list.filter(res=>{
      return res.cardOwnerName.toLocaleLowerCase().match(this.cardownername.toLocaleLowerCase());
    });

  }else if (this.cardownername == ""){
    //location.reload();
    this.refreshList()
  }
  }

}

