import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Transaction } from './Transaction';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TxDaoService {

  baseUrl = 'http://localhost:8001/tx/';
  params = new HttpParams();

  constructor(private http: HttpClient) {
  this.params = this.params.set('_expand', 'payee');
  }

  get() {}

  list() {
   return this.http.get<Transaction[]>(this.baseUrl, {params: this.params});
    }
}
