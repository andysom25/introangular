import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Payee} from './Payee';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../core/storage-service';


@Component({
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styles: []
})
export class PayeesListComponent implements OnInit {
  @Input()

  payees: Payee[];
  displayPayees: Payee[];

  @Output()
  selectPayee = new EventEmitter<Payee>();

  @Output()
  sortPayee = new EventEmitter<string>();

  @Output()
  filterPayee = new EventEmitter();

  constructor(private storage: StorageService) { }

  ngOnInit() {
    // this.payees.subscribe(
    //   payees => this.displayPayees = payees,
    //   err => {
    //     console.log('PayeesList had an error: ', err);
    //     this.displayPayees = null;
    //   }
    // );
  }

  handleSort(sortField: string) {
  this.sortPayee.emit(sortField);
  }

  handleClick(payee) {
    console.log('You clicked on', payee.payeeName);
    this.selectPayee.emit(payee);
  }

}
