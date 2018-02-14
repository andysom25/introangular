import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Payee} from './Payee';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styles: []
})
export class PayeesListComponent implements OnInit {
  @Input()

  payees: Observable<Payee[]>;
  displayPayees: Payee[];

  @Output()
  selectPayee = new EventEmitter<Payee>();

  constructor() { }

  ngOnInit() {
    this.payees.subscribe(
      payees => this.displayPayees = payees,
      err => {
        console.log('PayeesList had an error: ', err);
        this.displayPayees = null;
      }
    );
  }

  handleClick(payee) {
    console.log('You clicked on', payee.payeeName);
    this.selectPayee.emit(payee);
  }

}
