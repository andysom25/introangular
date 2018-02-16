import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Payee } from './Payee';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../core/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payees-list',
  templateUrl: './payees-list.component.html',
  styles: []
})
export class PayeesListComponent implements OnInit {
  displayPayees: Payee[];

  @Input() payees: Payee[];
  // @Input() asyncPayees: Observable<Payee[]>;

  @Output() selectPayee = new EventEmitter<Payee>();

  @Output() sortPayee = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { payees: Payee[] }) => {
      this.payees = data.payees;
    });

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
