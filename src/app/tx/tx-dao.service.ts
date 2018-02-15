import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Transaction } from './Transaction';

@Injectable()
export class TxDaoService {

  baseUrl = 'http://localhost:8001/tx/';
  params = new HttpParams();

  constructor(private http: HttpClient) {
    this.params = this.params.set('_expand', 'payee');
  }

  get() { }

  list() {
    // return this.http.get<Transaction[]>(this.baseUrl, { params: this.params });
    return this.http.get<Transaction[]>(this.baseUrl, { params: {'_expand': 'payee'} });
  }

}
