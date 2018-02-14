import { Component, OnInit } from '@angular/core';
import { Payee } from './Payee';
import { PayeesDaoService } from './payees-dao.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: []
})
export class PayeesManagerComponent implements OnInit {


payees: Payee[];
asyncPayees: Observable<Payee[]>;

constructor(public dao: PayeesDaoService) { }

  ngOnInit() {
    // this.dao.list()
    // .subscribe(
    //   payees => this.payees = payees,
    //   this.handleError
    // );

    // this.asyncPayees = this.dao.list()
    // .catch(err => {
    //   console.log('Something went wrong: ', err);
    //   return Observable.of([]);
    // });
    this.asyncPayees = this.dao.list();
  }

  handleSelectPayee(payee) {
  console.log('You selected', payee.payeeName);
  }

  handleSortPayee(sortField) {
    console.log('You want to sort on ', sortField);
  }

  handleError(err) {
    console.log('PayeesManager.handleError()', err);

  }

}
