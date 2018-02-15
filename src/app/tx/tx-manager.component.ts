import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from './Transaction';
import { TxDaoService } from './tx-dao.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/scan';
import 'rxjs/add/observable/empty';
import { Observable } from 'rxjs/Observable';
import { TxFilterComponent } from './tx-filter.component';


@Component({
  selector: 'tx-manager',
  templateUrl: './tx-manager.component.html',
  styles: []
})
export class TxManagerComponent implements OnInit {

  transactions: Transaction[];
  asyncTx: Observable<Transaction[]>;

  @ViewChild('tx-filter')
  child: TxFilterComponent;

  constructor(private dao: TxDaoService) { }

  ngOnInit() {
    this.asyncTx = this.dao.list()
      .retryWhen(e => e.scan<number>((errorCount, error) => {
        if (errorCount >= 10) {
          throw error;
        }
        return errorCount + 1;
      }, 0).delay(1000))
      .catch(err => {
        console.error('Error at ', Date.now());
        return Observable.of([]);
        // return err;

      });
    // .subscribe(tx => {
    //   console.log('Subscribed at ', Date.now());
    //   this.transactions = tx;
    // });
  }

}
