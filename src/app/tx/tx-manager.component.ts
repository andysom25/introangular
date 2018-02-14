import { Component, OnInit } from '@angular/core';
import { Transaction } from './Transaction';
import {TxDaoService } from './tx-dao.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'tx-manager',
  templateUrl: './tx-manager.component.html',
  styles: []
})
export class TxManagerComponent implements OnInit {

transactions: Transaction[];
asyncTransactions: Observable<Transaction[]>;

  constructor(private dao: TxDaoService) { }

  ngOnInit() {
//  this.dao.list()
//  .subscribe(tx => this.transactions = tx);

this.dao.list()
// .delay(100)
// .catch((err, obs) => {
// console.error('Error at ', Date.now());
// return obs;
// })
.subscribe(tx => {
  console.log('Subscribed at ', Date.now());
  this.transactions = tx;
});
  }


  handleSelectTx(transactions) {
    console.log('You selected', transactions.payeeName);
    }

    handleError(err) {
      console.log('TxManager.handleError()', err);

    }

  }

