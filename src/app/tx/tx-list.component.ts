import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Transaction} from './Transaction';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../core/storage-service';


@Component({
  selector: 'tx-list',
  templateUrl: './tx-list.component.html',
  styles: []
})
export class TxListComponent implements OnInit {
@Input()

transactions: Transaction[];
displaytx: Transaction[];

@Output()
selecttx = new EventEmitter<Transaction>();

  constructor(private storage: StorageService) { }

  ngOnInit() {
    // this.transactions.subscribe(
    //   transactions => this.displaytx = transactions,
    //   err => {
    //     console.log('Transaction List had an error: ', err);
    //     this.displaytx = null;
    //   }
    // );
  }

  handleClick(payee) {
    console.log('You clicked on', payee.payeeName);
    this.selecttx.emit(payee);
  }

}
