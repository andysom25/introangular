import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from './Transaction';

@Component({
  selector: 'tx-list',
  templateUrl: './tx-list.component.html',
  styles: []
})
export class TxListComponent implements OnInit {

  @Input()
  tx: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
