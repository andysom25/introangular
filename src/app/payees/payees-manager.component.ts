import { Component, OnInit } from '@angular/core';
import { Payee } from './Payee';
import { PayeesDaoService } from './payees-dao.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import _sortBy from 'lodash-es/sortBy';
import ld_get from 'lodash-es/get';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayeeDetailComponent } from './payee-detail.component';
import { PayeeDetailModalComponent } from './payee-detail-modal.component';

@Component({
  selector: 'payees-manager',
  templateUrl: './payees-manager.component.html',
  styles: []
})
export class PayeesManagerComponent implements OnInit {


payees: Payee[];
originalPayees: Payee[];
asyncPayees: Observable<Payee[]>;
sortField: string;

constructor(public dao: PayeesDaoService,
private modalService: NgbModal) { }

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

    this.asyncPayees = this.dao.list();
    this.asyncPayees.subscribe( payees => {
      this.payees = payees;
      this.originalPayees = payees;
    });
  }

  handleSelectPayee(payee) {
  console.log('You selected', payee.payeeName);
  const pdm = this.modalService.open(PayeeDetailModalComponent);
  pdm.componentInstance.payee = payee;
  }

  handleSortPayee(sortField) {
    console.log('You want to sort on: ', sortField);

    if (this.sortField === sortField) {
      this.payees.reverse();
    } else {
      this.payees = _sortBy(this.payees, sortField);
    }
    this.sortField = sortField;
  }

  handleFilterPayees(criteria) {
    // console.log('Payees Manager filtering on ', criteria);
    const criteriaKeys = Object.keys(criteria)
    .filter(key => criteria[key]);

      this.payees = this.originalPayees.filter(payee => criteriaKeys.every(
        key => {
          if (key !== 'category') {
            return payee[key] && payee[key].includes(criteria[key]);
          } else {
            const value = ld_get(payee, 'category.categoryName');
            return value ? value.includes(criteria[key]) : false;
          }
        }
      ));
    }

  handleError(err) {
    console.log('PayeesManager.handleError()', err);

  }

}
